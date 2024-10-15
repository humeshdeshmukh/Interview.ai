"use strict";
// src/routes/authRoutes.ts
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
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController"); // Assuming the functions are in authController.ts
const router = (0, express_1.Router)();
// POST /register route
router.post('/register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, AuthController_1.register)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
// POST /login route
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, AuthController_1.login)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
// POST /google-login route
router.post('/google-login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, AuthController_1.googleLogin)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
