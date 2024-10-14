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
exports.connectWithRetry = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectWithRetry = (logger_1, ...args_1) => __awaiter(void 0, [logger_1, ...args_1], void 0, function* (logger, retries = 5) {
    const dbConnectionString = process.env.DB_CONNECTION_STRING;
    // Ensure that the DB connection string is defined
    if (!dbConnectionString) {
        logger.error('DB_CONNECTION_STRING is not defined in the environment variables');
        throw new Error('DB_CONNECTION_STRING is not defined');
    }
    try {
        yield mongoose_1.default.connect(dbConnectionString); // Now this is guaranteed to be a string
        logger.info('Connected to MongoDB');
    }
    catch (err) {
        if (retries === 0) {
            logger.error('Failed to connect to MongoDB after multiple attempts');
            throw new Error('Failed to connect to MongoDB');
        }
        logger.warn(`Failed to connect to MongoDB, retrying... (${retries} retries left)`);
        setTimeout(() => (0, exports.connectWithRetry)(logger, retries - 1), 5000);
    }
});
exports.connectWithRetry = connectWithRetry;
// Export the function as default
exports.default = exports.connectWithRetry;
