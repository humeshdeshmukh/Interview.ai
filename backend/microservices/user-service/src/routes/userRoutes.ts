import { Router } from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController';

const router = Router();

router.get('/profile/:id', getUserProfile);
router.put('/profile/:id', updateUserProfile);

export default router;
