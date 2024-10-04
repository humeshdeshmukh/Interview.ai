import { Request, Response } from 'express';
import QuestionService from '../services/QuestionService';

export const createQuestion = async (req: Request, res: Response) => {
    try {
        const question = await QuestionService.createQuestion(req.body);
        res.status(201).json(question);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
