import express, { Request, Response } from 'express';
import getUser from '../controllers/UserController';

const router = express.Router();

// Define a route to get a user by ID
router.get('/:id', getUser);

export default router;
