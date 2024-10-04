import { Request, Response } from 'express';
import UserService from '../services/UserService';

const getUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.getUser(req.params.id);
        res.status(200).json(user);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
};

export default getUser; // Default export
