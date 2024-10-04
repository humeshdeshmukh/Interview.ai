import { Request, Response } from 'express';
import UserService from '../services/UserService';

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.getUser(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ error: 'User not found' });
    }
};
