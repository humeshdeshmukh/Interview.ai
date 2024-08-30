// Path: chatbot-service/src/controllers/chatbotController.ts

import { Request, Response } from 'express';
import { generateChatbotResponse } from '../services/chatbotService';

export const handleChatbotRequest = async (req: Request, res: Response): Promise<void> => {
    try {
        const userMessage = req.body.message;
        const botResponse = await generateChatbotResponse(userMessage);
        res.status(200).json({ response: botResponse });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process chatbot request' });
    }
};
