import express, { Request, Response, NextFunction } from 'express'; // Import types
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { createContainer, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import winston from 'winston';
import authRoutes from './routes/authRoutes';
import interviewRoutes from './routes/interviewRoutes';
import questionRoutes from './routes/questionRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import userRoutes from './routes/userRoutes';
import validateEnvVars from './config/validateEnvVars'; // Changed import to default
import connectWithRetry from './config/database'; // Changed import to default

// Load environment variables
dotenv.config();

// Initialize the express app
const app = express();
app.use(express.json());
app.use(helmet());
app.use(compression());

// Logging with winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

// Log HTTP requests using morgan (only in development)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Rate limiting for security
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.'
});
app.use(limiter);

// Setup Swagger for API documentation
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'My API Information'
        },
        servers: [{ url: 'http://localhost:5000' }]
    },
    apis: ['./routes/*.ts'], // Location of your route files
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// CORS configuration
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Dependency Injection (using awilix)
const container = createContainer();
container.register({
    authService: asClass(require('./services/authService')).scoped(),
    interviewService: asClass(require('./services/interviewService')).scoped(),
    questionService: asClass(require('./services/questionService')).scoped(),
});
app.use(scopePerRequest(container));

// Set up routes (validateRequest only for routes where it's needed)
app.use('/api/auth', authRoutes); // `validateRequest` applied at route level
app.use('/api/interview', interviewRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/user', userRoutes);

// Custom error handling middleware
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof Error) {
        logger.error(err.message, { stack: err.stack });
        res.status(500).json({ error: err.message });
    } else {
        logger.error('Unknown error', { error: String(err) });
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server with retries on MongoDB connection
const startServer = async () => {
    try {
        validateEnvVars();
        await connectWithRetry(logger); // Retry connection in case of failure

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (err) {
        if (err instanceof Error) {
            logger.error('Error starting server:', err.message);
        } else {
            logger.error('Error starting server:', String(err));
        }
        process.exit(1); // Exit with failure code if the server can't start
    }
};

// Graceful shutdown for the server
const shutdown = async () => {
    logger.info('Shutting down server...');
    await mongoose.connection.close();
    process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Start the server
startServer();
