"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
// Middleware to validate request
const validateRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    // If validation errors exist, return a 400 response with the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Proceed to the next middleware or route handler if validation passes
    next();
};
exports.default = validateRequest;
