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
exports.AuthService = void 0;
const User_1 = require("../models/User");
class AuthService {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if the user already exists
            const existingUser = yield User_1.User.findOne({ email: data.email });
            if (existingUser) {
                throw new Error('User already exists');
            }
            // Create new user
            const user = new User_1.User(data);
            yield user.save();
            return user;
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ email: data.email });
            if (!user || !(yield user.comparePassword(data.password))) {
                throw new Error('Invalid email or password');
            }
            return user;
        });
    }
}
exports.AuthService = AuthService;
