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
// Define a custom error class for handling specific feedback errors
class FeedbackError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FeedbackError';
    }
}
// Mocked function to simulate saving feedback to a database or API
const saveFeedbackToDatabase = (feedback) => __awaiter(void 0, void 0, void 0, function* () {
    // Simulate API/database interaction delay
    return new Promise((resolve) => setTimeout(resolve, 1000));
});
// Advanced feedback function with async, logging, and error handling
const giveFeedback = (feedback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Input validation
        if (!feedback.userId || !feedback.message || feedback.rating < 1 || feedback.rating > 5) {
            throw new FeedbackError('Invalid feedback data');
        }
        // Add timestamp if not provided
        if (!feedback.timestamp) {
            feedback.timestamp = new Date();
        }
        // Logging the feedback submission attempt
        console.log(`Processing feedback from user: ${feedback.userId}`);
        // Simulate saving feedback to a database
        yield saveFeedbackToDatabase(feedback);
        // Log success
        console.log(`Feedback from user ${feedback.userId} saved successfully`);
        return 'Feedback submitted successfully!';
    }
    catch (error) {
        // Handle specific feedback errors
        if (error instanceof FeedbackError) {
            console.error('Feedback submission failed:', error.message);
            throw new FeedbackError('Failed to submit feedback due to invalid data.');
        }
        // Handle other unexpected errors
        console.error('An unexpected error occurred:', error);
        throw new Error('Something went wrong while submitting feedback. Please try again later.');
    }
});
// Default export of the giveFeedback function
exports.default = giveFeedback;
