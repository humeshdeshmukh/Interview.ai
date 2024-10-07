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
const cors_1 = __importDefault(require("cors")); // Import the CORS package
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const interviewRoutes_1 = __importDefault(require("./routes/interviewRoutes"));
const questionRoutes_1 = __importDefault(require("./routes/questionRoutes"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Enable CORS for all origins
app.use((0, cors_1.default)());
app.use('/auth', authRoutes_1.default);
app.use('/interview', interviewRoutes_1.default);
app.use('/questions', questionRoutes_1.default);
app.use('/feedback', feedbackRoutes_1.default);
app.use('/user', userRoutes_1.default);
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
process.on('SIGTERM', () => console.log('Shutting down server...'));
process.on('SIGINT', () => console.log('Shutting down server...'));
startServer();
