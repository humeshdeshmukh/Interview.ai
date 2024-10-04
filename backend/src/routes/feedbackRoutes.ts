import express from 'express';
import FeedbackController from '../controllers/FeedbackController'; // Ensure this imports your controller

const router = express.Router();

// Route for submitting feedback
router.post('/', FeedbackController.submitFeedback);

export default router;
