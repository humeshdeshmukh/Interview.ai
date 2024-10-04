import express from 'express';
import { giveFeedback } from '../controllers/FeedbackController';

const router = express.Router();

router.post('/', giveFeedback);

export default router;
