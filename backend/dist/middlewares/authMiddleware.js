"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env")); // Importing your environment config
const authMiddleware = (req, res, next) => {
    var _a;
    // Get the token from the authorization header
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, env_1.default.JWT_SECRET);
        // Attach the user ID to the request object
        req.user = decoded.id;
        next(); // Proceed to the next middleware or route
    }
    catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ message: 'Token is not valid' });
    }
};
exports.default = authMiddleware;
