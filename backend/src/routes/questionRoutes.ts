import express from 'express';
import createQuestion from '../controllers/QuestionController'; // Default import

const router = express.Router();

// Define a POST route for creating a question
router.post('/', createQuestion);

export default router; // Use default export
