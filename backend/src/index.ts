import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example route
app.get('/api/test', (req, res) => {
  res.json({ message: 'This is a test route' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
