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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
// src/routes/auth.ts
const express_1 = require("express");
const authRoutes = (authService) => {
    const router = (0, express_1.Router)();
    // Test route to check connection
    router.get('/ping', (req, res) => {
        res.status(200).json({ message: 'Backend is connected!' });
    });
    // User registration route
    router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield authService.register(req.body);
            res.status(201).json({ message: 'User registered successfully', user });
        }
        catch (error) {
            // Check if the error is an instance of Error
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            }
            else {
                res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    }));
    // User login route
    router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield authService.login(req.body);
            res.status(200).json({ message: 'Login successful', user });
        }
        catch (error) {
            // Check if the error is an instance of Error
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            }
            else {
                res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    }));
    return router;
};
exports.authRoutes = authRoutes;
