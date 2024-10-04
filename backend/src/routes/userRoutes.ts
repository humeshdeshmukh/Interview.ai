import express from 'express';
import { getUser } from '../controllers/UserController';

const router = express.Router();

router.get('/:id', getUser);

export default router;
