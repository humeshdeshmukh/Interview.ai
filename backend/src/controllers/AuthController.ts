import { Request, Response, NextFunction } from 'express';// Import your User model
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library'; // Import Google Auth library
import User from '../models/User';
// Create a Google OAuth2 client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Register controller function
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { identifier, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ identifier });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const newUser = new User({ identifier, password });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error-handling middleware
    }
};

// Login controller function
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { identifier, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ identifier });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error-handling middleware
    }
};

// Google login controller function
export const googleLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { tokenId } = req.body;

        // Verify Google token
        const ticket = await googleClient.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) {
            return res.status(401).json({ message: 'Google token verification failed' });
        }

        // Check if user already exists
        let user = await User.findOne({ googleId: payload.sub });
        if (!user) {
            // Create new user if not found
            user = new User({
                googleId: payload.sub,
                email: payload.email,
                name: payload.name,
            });
            await user.save();
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Google login successful', token });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error-handling middleware
    }
};

// Export default object
export default {
    register,
    login,
    googleLogin,
};
