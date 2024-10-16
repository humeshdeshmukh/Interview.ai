"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleLogin = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User"); // Use named import
// Make sure this is the correct path to your User model
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your actual JWT secret
// Register function
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        // Check if the user already exists
        const existingUser = yield User_1.User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        // Create the new user
        const newUser = new User_1.User({
            name,
            email,
            password: hashedPassword,
        });
        // Save the user to the database
        yield newUser.save();
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: newUser._id }, jwtSecret, { expiresIn: '1h' });
        // Return success response with token
        return res.status(201).json({ message: 'User registered successfully', token });
    }
    catch (error) {
        // Type assertion for the error variable
        if (error instanceof Error) {
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
        return res.status(500).json({ message: 'Server error', error: 'Unknown error' });
    }
});
exports.register = register;
// Login function
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Check if the user exists
        const user = yield User_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Validate password
        const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        // Return success response with token
        return res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
        return res.status(500).json({ message: 'Server error', error: 'Unknown error' });
    }
});
exports.login = login;
// Google Login function (assuming you have Google OAuth integrated)
const googleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { googleIdToken } = req.body;
        // Verify Google token and get user info (use a library like 'google-auth-library')
        const googleUser = yield verifyGoogleToken(googleIdToken);
        // Check if the user already exists
        let user = yield User_1.User.findOne({ email: googleUser.email });
        if (!user) {
            // If user doesn't exist, create a new one
            user = new User_1.User({
                name: googleUser.name,
                email: googleUser.email,
                password: '', // No password since it's Google login
            });
            yield user.save();
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
        // Return success response with token
        return res.status(200).json({ message: 'Google login successful', token });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
        return res.status(500).json({ message: 'Server error', error: 'Unknown error' });
    }
});
exports.googleLogin = googleLogin;
// Helper function to verify Google ID Token (placeholder)
const verifyGoogleToken = (googleIdToken) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic for verifying Google token and getting user info
    // Use a library like google-auth-library or passport-google-oauth
    return {
        name: 'Google User',
        email: 'user@example.com',
    };
});
