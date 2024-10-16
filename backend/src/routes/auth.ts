// src/routes/auth.ts
import { Router, Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export const authRoutes = (authService: AuthService) => {
    const router = Router();

    // Test route to check connection
    router.get('/ping', (req: Request, res: Response) => {
        res.status(200).json({ message: 'Backend is connected!' });
    });

    // User registration route
    router.post('/register', async (req: Request, res: Response) => {
        try {
            const user = await authService.register(req.body);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            // Check if the error is an instance of Error
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    });

    // User login route
    router.post('/login', async (req: Request, res: Response) => {
        try {
            const user = await authService.login(req.body);
            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            // Check if the error is an instance of Error
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    });

    return router;
};
