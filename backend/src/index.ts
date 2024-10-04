import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import interviewRoutes from './routes/interviewRoutes';
import questionRoutes from './routes/questionRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/interview', interviewRoutes);
app.use('/questions', questionRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/user', userRoutes);

const startServer = async () => {
    try {
        const dbConnectionString = process.env.DB_CONNECTION_STRING;

        // Check if DB_CONNECTION_STRING is defined
        if (!dbConnectionString) {
            throw new Error("DB_CONNECTION_STRING is not defined in .env file");
        }

        await mongoose.connect(dbConnectionString);
        app.listen(5000, () => console.log('Server running on port 5000'));
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

startServer();
