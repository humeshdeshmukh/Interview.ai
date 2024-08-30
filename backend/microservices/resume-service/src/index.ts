import express from 'express';
import mongoose from 'mongoose';
import resumeRoutes from './routes/resumeRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api', resumeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
