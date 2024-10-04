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
const Interview_1 = __importDefault(require("../models/Interview"));
// Custom Error Class for Interview Not Found
class InterviewError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InterviewError';
    }
}
// Function to create a new interview
const createInterview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validation of required fields
        if (!data.candidateName || !data.position || !data.date || !data.interviewer) {
            throw new InterviewError('Missing required fields');
        }
        // Creating the interview record
        const interview = yield Interview_1.default.create(data);
        // Log success
        console.log('Interview created successfully:', interview);
        return interview;
    }
    catch (error) {
        // Handle unknown error type
        if (error instanceof Error) {
            console.error('Error creating interview:', error.message);
            throw new Error('Failed to create interview: ' + error.message);
        }
        else {
            console.error('Unexpected error while creating interview:', error);
            throw new Error('Failed to create interview due to an unexpected error.');
        }
    }
});
// Function to fetch an interview by ID
const getInterview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetching interview from the database
        const interview = yield Interview_1.default.findById(id);
        // Check if the interview exists
        if (!interview) {
            throw new InterviewError('Interview not found');
        }
        // Log success
        console.log(`Interview found with ID: ${id}`, interview);
        return interview;
    }
    catch (error) {
        // Handle known errors
        if (error instanceof InterviewError) {
            console.error('Error fetching interview:', error.message);
            throw error;
        }
        // Handle unexpected errors
        if (error instanceof Error) {
            console.error('Unexpected error while fetching interview:', error.message);
            throw new Error('Failed to fetch interview: ' + error.message);
        }
        else {
            console.error('Unexpected error while fetching interview:', error);
            throw new Error('Failed to fetch interview due to an unexpected error.');
        }
    }
});
// Default export of all functions
exports.default = {
    createInterview,
    getInterview
};
