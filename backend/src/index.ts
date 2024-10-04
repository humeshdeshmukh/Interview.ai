import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import interviewRoutes from './routes/interviewRoutes';
import questionRoutes from './routes/questionRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/interview', interviewRoutes);
app.use('/questions', questionRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/user', userRoutes);

const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        app.listen(5000, () => console.log('Server running on port 5000'));
    } catch (err) {
        console.error(err);
    }
};

startServer();
