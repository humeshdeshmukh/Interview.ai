import express from 'express';
import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
import resumeRoutes from './routes/resumeRoutes';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// PostgreSQL connection setup
const pgp = pgPromise({});
const db = pgp({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

// Test the database connection
db.connect()
  .then(obj => {
    obj.done(); // success, release the connection
    console.log('PostgreSQL connected');
  })
  .catch(error => {
    console.error('PostgreSQL connection error:', error.message || error);
  });

// Routes
app.use('/api', resumeRoutes(db));

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Interview Mastery backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
