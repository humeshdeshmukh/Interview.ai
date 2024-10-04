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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
    const user = yield User_1.default.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
    return user;
});
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email: data.email });
    // Check if user exists and if password is defined before comparison
    if (!user || !user.password || !(yield bcrypt_1.default.compare(data.password, user.password))) {
        throw new Error('Invalid credentials');
    }
    // Ensure the JWT_SECRET environment variable is defined
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT Secret is not defined');
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
    return token;
});
exports.default = {
    register,
    login,
};
