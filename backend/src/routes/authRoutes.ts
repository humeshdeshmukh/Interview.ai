import express from 'express';
import authService from '../services/AuthService'; // Adjust the path according to your structure

const router = express.Router();
// Registration Route
router.post('/register', async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = (error as Error).message; // Assert that error is of type Error
        res.status(400).json({ error: errorMessage });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        const errorMessage = (error as Error).message; // Assert that error is of type Error
        res.status(400).json({ error: errorMessage });
    }
});

export default router;
