// src/index.ts

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/auth-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});
