import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware for CORS
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes for authentication
app.use('/api/auth', authRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Auth service running on port 5000');
});
