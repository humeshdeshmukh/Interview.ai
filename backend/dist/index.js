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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const interviewRoutes_1 = __importDefault(require("./routes/interviewRoutes"));
const questionRoutes_1 = __importDefault(require("./routes/questionRoutes"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Enable CORS for specified origin
app.use((0, cors_1.default)({
    origin: 'http://localhost:5000', // Replace with your frontend URL
    credentials: true,
}));
// Set up routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/interview', interviewRoutes_1.default);
app.use('/api/questions', questionRoutes_1.default);
app.use('/api/feedback', feedbackRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
// Start the server
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbConnectionString = process.env.DB_CONNECTION_STRING;
        if (!dbConnectionString) {
            throw new Error("DB_CONNECTION_STRING is not defined in .env file");
        }
        yield mongoose_1.default.connect(dbConnectionString);
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
    catch (err) {
        console.error("Error starting server:", err);
    }
});
// Graceful shutdown for the server
const shutdown = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Shutting down server...');
    yield mongoose_1.default.connection.close();
    process.exit(0);
});
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
// Start the server
startServer();
