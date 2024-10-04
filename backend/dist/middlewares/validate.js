"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = __importDefault(require("express-validator")); // Default import
// Extract validationResult from expressValidator
const { validationResult } = express_validator_1.default;
const validateRequest = (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next(); // Proceed to the next middleware or route
};
exports.default = validateRequest;
