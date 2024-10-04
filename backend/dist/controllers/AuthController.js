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
exports.login = exports.register = void 0;
const AuthService_1 = __importDefault(require("../services/AuthService"));
// Controller for user registration
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield AuthService_1.default.register(req.body);
        res.status(201).json(user); // Respond with the created user and status 201
    }
    catch (err) { // Use 'unknown' type for error
        if (err instanceof Error) {
            res.status(500).json({ error: err.message }); // Handle server errors
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
});
exports.register = register;
// Controller for user login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield AuthService_1.default.login(req.body);
        res.status(200).json({ token }); // Respond with the token and status 200
    }
    catch (err) { // Use 'unknown' type for error
        if (err instanceof Error) {
            res.status(401).json({ error: err.message }); // Handle invalid credentials error
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
});
exports.login = login;
