import { Request, Response } from 'express';
import FeedbackService from '../services/FeedbackService';

export const giveFeedback = async (req: Request, res: Response) => {
    try {
        const feedback = await FeedbackService.giveFeedback(req.body);
        res.status(201).json(feedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
