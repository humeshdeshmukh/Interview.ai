"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const envConfig = {
    PORT: Number(process.env.PORT) || 5000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/interviewmaster',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_here',
};
exports.default = envConfig;
