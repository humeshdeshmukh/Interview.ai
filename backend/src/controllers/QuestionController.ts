import { Request, Response } from 'express';
import QuestionService from '../services/QuestionService'; // Adjust the path if necessary

const createQuestion = async (req: Request, res: Response) => {
    try {
        const question = await QuestionService.createQuestion(req.body);
        res.status(201).json(question); // Respond with the created question
    } catch (err: unknown) { // Specify the type as 'unknown'
        if (err instanceof Error) {
            // If the error is an instance of Error, access its message
            res.status(500).json({ error: err.message }); // Handle any errors
        } else {
            // Handle unexpected errors
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
};

export default createQuestion; // Use default export
