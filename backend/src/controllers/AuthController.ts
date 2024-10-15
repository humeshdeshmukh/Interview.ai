import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User'; // Make sure this is the correct path to your User model

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your actual JWT secret

// Register function
export const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, jwtSecret, { expiresIn: '1h' });

    // Return success response with token
    return res.status(201).json({ message: 'User registered successfully', token });
  } catch (error: unknown) {
    // Type assertion for the error variable
    if (error instanceof Error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
    return res.status(500).json({ message: 'Server error', error: 'Unknown error' });
  }
};

// Login function
export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

    // Return success response with token
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
    return res.status(500).json({ message: 'Server error', error: 'Unknown error' });
  }
};

// Google Login function (assuming you have Google OAuth integrated)
export const googleLogin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { googleIdToken } = req.body;

    // Verify Google token and get user info (use a library like 'google-auth-library')
    const googleUser = await verifyGoogleToken(googleIdToken);

    // Check if the user already exists
    let user = await User.findOne({ email: googleUser.email });
    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({
        name: googleUser.name,
        email: googleUser.email,
        password: '', // No password since it's Google login
      });
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

    // Return success response with token
    return res.status(200).json({ message: 'Google login successful', token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
    return res.status(500).json({ message: 'Server error', error: 'Unknown error' });
  }
};

// Helper function to verify Google ID Token (placeholder)
const verifyGoogleToken = async (googleIdToken: string) => {
  // Logic for verifying Google token and getting user info
  // Use a library like google-auth-library or passport-google-oauth
  return {
    name: 'Google User',
    email: 'user@example.com',
  };
};
