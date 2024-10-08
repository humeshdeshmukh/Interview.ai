import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the CORS package
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import interviewRoutes from './routes/interviewRoutes';
import questionRoutes from './routes/questionRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import userRoutes from './routes/userRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for specified origin
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true,
}));

// Set up routes
app.use('/api/auth', authRoutes);
app.use('/api/interview', interviewRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/user', userRoutes);

// Start the server
const startServer = async () => {
    try {
        const dbConnectionString = process.env.DB_CONNECTION_STRING;

        if (!dbConnectionString) {
            throw new Error("DB_CONNECTION_STRING is not defined in .env file");
        }

        await mongoose.connect(dbConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

// Graceful shutdown for the server
process.on('SIGTERM', () => {
    console.log('Shutting down server...');
    process.exit(0);
});
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    process.exit(0);
});

// Start the server
startServer();
