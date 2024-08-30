import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes'; // Import user routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Default to port 5000 if not specified

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/users', userRoutes); // Set up routes for user profiles

// Default route
app.get('/', (req, res) => {
  res.send('User Service is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
