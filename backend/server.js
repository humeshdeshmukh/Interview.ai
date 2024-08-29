import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Service is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
