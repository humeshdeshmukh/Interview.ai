import express from 'express';
import { createInterview, getInterview } from '../controllers/InterviewController';

const router = express.Router();

router.post('/', createInterview);
router.get('/:id', getInterview);

export default router;
