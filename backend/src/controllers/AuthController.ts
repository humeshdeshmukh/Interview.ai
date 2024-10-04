import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

// Controller for user registration
export const register = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json(user); // Respond with the created user and status 201
    } catch (err: unknown) {  // Use 'unknown' type for error
        if (err instanceof Error) {
            res.status(500).json({ error: err.message }); // Handle server errors
        } else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
};

// Controller for user login
export const login = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.login(req.body);
        res.status(200).json({ token }); // Respond with the token and status 200
    } catch (err: unknown) { // Use 'unknown' type for error
        if (err instanceof Error) {
            res.status(401).json({ error: err.message }); // Handle invalid credentials error
        } else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
};
