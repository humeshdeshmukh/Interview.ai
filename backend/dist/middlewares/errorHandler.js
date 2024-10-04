"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging
    const statusCode = err.status || 500; // Default to 500 if no status is set
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};
exports.default = errorHandler;
