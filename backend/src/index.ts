import express from 'express';
import mongoose from 'mongoose';
import { authRoutes } from './routes/auth';
import { AuthService } from './services/AuthService';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DB_CONNECTION_STRING; // Use the correct variable name

if (!MONGO_URI) {
    throw new Error("MongoDB connection string is not defined in the environment variables.");
}

// Middleware
app.use(bodyParser.json());

// Initialize services
const authService = new AuthService();

// Routes
app.use('/api/auth', authRoutes(authService));

// MongoDB connection and server startup
mongoose
    .connect(MONGO_URI) // Remove options for newer versions
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error);
    });
