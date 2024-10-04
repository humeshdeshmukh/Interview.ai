import { Request, Response } from 'express';
import InterviewService from '../services/InterviewService';

export const createInterview = async (req: Request, res: Response) => {
    try {
        const interview = await InterviewService.createInterview(req.body);
        res.status(201).json(interview);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getInterview = async (req: Request, res: Response) => {
    try {
        const interview = await InterviewService.getInterview(req.params.id);
        res.status(200).json(interview);
    } catch (err) {
        res.status(404).json({ error: 'Interview not found' });
    }
};
