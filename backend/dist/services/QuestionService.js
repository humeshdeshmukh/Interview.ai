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
const Question_1 = __importDefault(require("../models/Question"));
// Custom Error class for handling question-related errors
class QuestionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'QuestionError';
    }
}
// Function to create a new question with validation, error handling, and logging
const createQuestion = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate required fields
        if (!data.title || !data.description || !data.options || !data.correctAnswer) {
            throw new QuestionError('Missing required fields: title, description, options, or correctAnswer');
        }
        // Ensure correctAnswer is within the options provided
        if (!data.options.includes(data.correctAnswer)) {
            throw new QuestionError('Correct answer must be one of the provided options');
        }
        // Log the question creation attempt
        console.log('Creating a new question with title:', data.title);
        // Create the question record in the database
        const question = yield Question_1.default.create(data);
        // Log success
        console.log('Question created successfully:', question);
        return question;
    }
    catch (error) {
        // Log the error and throw a user-friendly message
        if (error instanceof Error) {
            console.error('Error creating question:', error.message);
            throw new Error('Failed to create question: ' + error.message); // Pass the original error message
        }
        else {
            console.error('Unexpected error:', error);
            throw new Error('Failed to create question due to an unexpected error.');
        }
    }
});
// Default export of all functions
exports.default = {
    createQuestion
};
