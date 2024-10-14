import express from 'express';
import { register, login, googleLogin } from '../controllers/AuthController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google-login', googleLogin);

export default router;
