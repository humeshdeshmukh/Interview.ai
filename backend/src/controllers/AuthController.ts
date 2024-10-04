import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

export const register = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.login(req.body);
        res.status(200).json({ token });
    } catch (err) {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};
