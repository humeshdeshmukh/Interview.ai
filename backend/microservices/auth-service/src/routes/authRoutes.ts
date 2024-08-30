// src/routes/authRoutes.ts

import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const authController = new AuthController();
const router = Router();

router.post('/login', authController.login.bind(authController));
router.post('/register', authController.register.bind(authController));
router.get('/validate-token', authController.validateToken.bind(authController));

export default router;
