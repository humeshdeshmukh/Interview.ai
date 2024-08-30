// Path: chatbot-service/src/routes/chatbotRoutes.ts

import { Router } from 'express';
import { handleChatbotRequest } from '../controllers/chatbotController';

const router = Router();

router.post('/chat', handleChatbotRequest);

export default router;
