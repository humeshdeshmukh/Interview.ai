import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the CORS package
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

// Enable CORS for all origins
app.use(cors()); 

app.use('/auth', authRoutes);
app.use('/interview', interviewRoutes);
app.use('/questions', questionRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/user', userRoutes);

const startServer = async () => {
    try {
        const dbConnectionString = process.env.DB_CONNECTION_STRING;

        if (!dbConnectionString) {
            throw new Error("DB_CONNECTION_STRING is not defined in .env file");
        }

        await mongoose.connect(dbConnectionString);

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

process.on('SIGTERM', () => console.log('Shutting down server...'));
process.on('SIGINT', () => console.log('Shutting down server...'));

startServer();
