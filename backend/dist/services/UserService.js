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
exports.getUser = void 0;
const User_1 = __importDefault(require("../models/User"));
// Function to get a user by ID
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
});
exports.getUser = getUser;
// You can add more user-related functions here if needed
// Default export object to allow easier import
const UserService = {
    getUser: exports.getUser,
    // Add other functions here
};
exports.default = UserService; // Default export
