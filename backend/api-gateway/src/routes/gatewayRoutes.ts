// api-gateway/src/routes/gatewayRoutes.ts

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Create a router instance
const router = express.Router();

// Define proxies for microservices
const authServiceProxy = createProxyMiddleware({
  target: 'http://auth-service:5000', // Adjust the target URL as needed
  changeOrigin: true,
  pathRewrite: {
    '^/api/auth': '/', // Rewrite path if necessary
  },
});

router.use('/auth', authServiceProxy);

// Add additional proxies for other microservices
// Example: 
// const userServiceProxy = createProxyMiddleware({
//   target: 'http://user-service:5000',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/api/user': '/',
//   },
// });
// router.use('/user', userServiceProxy);

export default router;
