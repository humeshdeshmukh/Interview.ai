import express from 'express';
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import resumeRoutes from './routes/resumeRoutes';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define the port for the server
const PORT = process.env.PORT || 5000;

// PostgreSQL connection string from environment variables
const DB_URI = process.env.DB_URI || 'postgres://user:password@localhost:5432/resume-service';

// Create a Sequelize instance and connect to PostgreSQL
const sequelize = new Sequelize(DB_URI, {
  dialect: 'postgres',
  logging: false,
  models: [__dirname + '/models'], // Path to your models
});

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('PostgreSQL connected'))
  .catch((err) => console.error('PostgreSQL connection error:', err));

// Use routes from resumeRoutes
app.use('/api/resumes', resumeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
