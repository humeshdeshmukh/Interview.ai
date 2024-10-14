"use strict";
// src/config/validateEnvVars.ts
Object.defineProperty(exports, "__esModule", { value: true });
const requiredEnvVars = [
    'DB_CONNECTION_STRING',
    'PORT',
    'JWT_SECRET', // Add your required environment variables here
    // Add any other required environment variables
];
const validateEnvVars = () => {
    const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
    if (missingVars.length > 0) {
        console.error('Missing environment variables:', missingVars.join(', '));
        throw new Error('Environment variables validation failed. Please check your .env file.');
    }
    console.log('All required environment variables are set.');
};
// Export the function as default
exports.default = validateEnvVars;
