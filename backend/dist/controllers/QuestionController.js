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
const QuestionService_1 = __importDefault(require("../services/QuestionService")); // Adjust the path if necessary
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield QuestionService_1.default.createQuestion(req.body);
        res.status(201).json(question); // Respond with the created question
    }
    catch (err) { // Specify the type as 'unknown'
        if (err instanceof Error) {
            // If the error is an instance of Error, access its message
            res.status(500).json({ error: err.message }); // Handle any errors
        }
        else {
            // Handle unexpected errors
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.default = createQuestion; // Use default export
