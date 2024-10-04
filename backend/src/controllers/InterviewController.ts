import { Request, Response } from 'express';
import InterviewService from '../services/InterviewService';

// Function to create a new interview
export const createInterview = async (req: Request, res: Response) => {
    try {
        const interview = await InterviewService.createInterview(req.body);
        res.status(201).json(interview);
    } catch (err: unknown) { // Specify the type of err as unknown
        if (err instanceof Error) {
            // If err is an instance of Error, we can safely access its message property
            res.status(500).json({ error: err.message });
        } else {
            // If err is not an instance of Error, return a generic error message
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
};

// Function to get an interview by ID
export const getInterview = async (req: Request, res: Response) => {
    try {
        const interview = await InterviewService.getInterview(req.params.id);
        res.status(200).json(interview);
    } catch (err: unknown) { // Specify the type of err as unknown
        if (err instanceof Error) {
            res.status(404).json({ error: 'Interview not found', details: err.message });
        } else {
            res.status(404).json({ error: 'An unexpected error occurred while fetching the interview.' });
        }
    }
};

// Default export of the controller functions
export default {
    createInterview,
    getInterview,
};
