// Importing required modules
import express from 'express';
import cors from 'cors';

// Importing routes from the 'routes' directory
import authRoutes from './routes/authRoutes'; // './' refers to the current directory (src), 'routes' is a subdirectory, and 'authRoutes' is the file name without the '.ts' extension.

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Registering the authentication routes with the Express app
app.use('/auth', authRoutes); // All routes defined in authRoutes will be prefixed with '/auth'

// Default route for testing if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Interview Mastery backend!');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
