import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Example of proxying requests to another server
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3000', // Replace with the target server
    changeOrigin: true,
}));

// A simple endpoint for testing
app.get('/', (req, res) => {
    res.send('API Gateway is up and running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
