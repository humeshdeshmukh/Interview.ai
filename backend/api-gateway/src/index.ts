// api-gateway/src/index.ts

import express from 'express';
import cors from 'cors';
import gatewayRoutes from './routes/gatewayRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use gateway routes
app.use('/api', gatewayRoutes);

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
