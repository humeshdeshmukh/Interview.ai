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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const google_auth_library_1 = require("google-auth-library"); // Import Google Auth library
const User_1 = __importDefault(require("../models/User"));
// Create a Google OAuth2 client
const googleClient = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// Register controller function
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identifier, password } = req.body;
        // Check if user already exists
        const existingUser = yield User_1.default.findOne({ identifier });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create new user
        const newUser = new User_1.default({ identifier, password });
        yield newUser.save();
        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    }
    catch (err) {
        console.error(err);
        next(err); // Pass the error to the error-handling middleware
    }
});
exports.register = register;
// Login controller function
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identifier, password } = req.body;
        // Check if user exists
        const user = yield User_1.default.findOne({ identifier });
        if (!user || !(yield user.comparePassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    }
    catch (err) {
        console.error(err);
        next(err); // Pass the error to the error-handling middleware
    }
});
exports.login = login;
// Google login controller function
const googleLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tokenId } = req.body;
        // Verify Google token
        const ticket = yield googleClient.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload) {
            return res.status(401).json({ message: 'Google token verification failed' });
        }
        // Check if user already exists
        let user = yield User_1.default.findOne({ googleId: payload.sub });
        if (!user) {
            // Create new user if not found
            user = new User_1.default({
                googleId: payload.sub,
                email: payload.email,
                name: payload.name,
            });
            yield user.save();
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Google login successful', token });
    }
    catch (err) {
        console.error(err);
        next(err); // Pass the error to the error-handling middleware
    }
});
exports.googleLogin = googleLogin;
// Export default object
exports.default = {
    register: exports.register,
    login: exports.login,
    googleLogin: exports.googleLogin,
};
