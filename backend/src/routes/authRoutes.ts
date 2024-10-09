// backend/src/routes/authRoutes.ts

import express from 'express';
import { register, login } from '../controllers/AuthController';

const router = express.Router();

// Define registration route
router.post('/register', register);

// Define login route
router.post('/login', login);

export default router;
