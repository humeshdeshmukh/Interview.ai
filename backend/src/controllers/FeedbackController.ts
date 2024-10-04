import { Request, Response } from 'express';
import giveFeedback from '../services/FeedbackService'; // Adjust the path if necessary

const submitFeedback = async (req: Request, res: Response): Promise<void> => {
    try {
        const feedbackData = req.body; // Assuming you are sending feedback data in the request body
        const result = await giveFeedback(feedbackData);
        res.status(200).json({ message: result });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    }
};

export default { submitFeedback };
