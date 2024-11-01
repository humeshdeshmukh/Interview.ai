"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./routes/auth");
const AuthService_1 = require("./services/AuthService");
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DB_CONNECTION_STRING; // Use the correct variable name
if (!MONGO_URI) {
    throw new Error("MongoDB connection string is not defined in the environment variables.");
}
// Middleware
app.use(body_parser_1.default.json());
// Initialize services
const authService = new AuthService_1.AuthService();
// Routes
app.use('/api/auth', (0, auth_1.authRoutes)(authService));
// MongoDB connection and server startup
mongoose_1.default
    .connect(MONGO_URI) // Remove options for newer versions
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.log('MongoDB connection error:', error);
});
