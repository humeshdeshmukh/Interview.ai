"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import types
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const awilix_1 = require("awilix");
const awilix_express_1 = require("awilix-express");
const winston_1 = __importDefault(require("winston"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const interviewRoutes_1 = __importDefault(require("./routes/interviewRoutes"));
const questionRoutes_1 = __importDefault(require("./routes/questionRoutes"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const validateEnvVars_1 = __importDefault(require("./config/validateEnvVars")); // Changed import to default
const database_1 = __importDefault(require("./config/database")); // Changed import to default
// Load environment variables
dotenv_1.default.config();
// Initialize the express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
// Logging with winston
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'combined.log' }),
    ],
});
// Log HTTP requests using morgan (only in development)
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
// Rate limiting for security
const limiter = (0, express_rate_limit_1.default)({
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
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// CORS configuration
const allowedOrigins = ['http://localhost:3000'];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
// Dependency Injection (using awilix)
const container = (0, awilix_1.createContainer)();
container.register({
    authService: (0, awilix_1.asClass)(require('./services/authService')).scoped(),
    interviewService: (0, awilix_1.asClass)(require('./services/interviewService')).scoped(),
    questionService: (0, awilix_1.asClass)(require('./services/questionService')).scoped(),
});
app.use((0, awilix_express_1.scopePerRequest)(container));
// Set up routes (validateRequest only for routes where it's needed)
app.use('/api/auth', authRoutes_1.default); // `validateRequest` applied at route level
app.use('/api/interview', interviewRoutes_1.default);
app.use('/api/questions', questionRoutes_1.default);
app.use('/api/feedback', feedbackRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
// Custom error handling middleware
app.use((err, _req, res, _next) => {
    if (err instanceof Error) {
        logger.error(err.message, { stack: err.stack });
        res.status(500).json({ error: err.message });
    }
    else {
        logger.error('Unknown error', { error: String(err) });
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Start the server with retries on MongoDB connection
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, validateEnvVars_1.default)();
        yield (0, database_1.default)(logger); // Retry connection in case of failure
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    }
    catch (err) {
        if (err instanceof Error) {
            logger.error('Error starting server:', err.message);
        }
        else {
            logger.error('Error starting server:', String(err));
        }
        process.exit(1); // Exit with failure code if the server can't start
    }
});
// Graceful shutdown for the server
const shutdown = () => __awaiter(void 0, void 0, void 0, function* () {
    logger.info('Shutting down server...');
    yield mongoose_1.default.connection.close();
    process.exit(0);
});
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
// Start the server
startServer();
