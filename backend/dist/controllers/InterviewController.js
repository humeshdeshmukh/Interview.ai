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
exports.getInterview = exports.createInterview = void 0;
const InterviewService_1 = __importDefault(require("../services/InterviewService"));
// Function to create a new interview
const createInterview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const interview = yield InterviewService_1.default.createInterview(req.body);
        res.status(201).json(interview);
    }
    catch (err) { // Specify the type of err as unknown
        if (err instanceof Error) {
            // If err is an instance of Error, we can safely access its message property
            res.status(500).json({ error: err.message });
        }
        else {
            // If err is not an instance of Error, return a generic error message
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.createInterview = createInterview;
// Function to get an interview by ID
const getInterview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const interview = yield InterviewService_1.default.getInterview(req.params.id);
        res.status(200).json(interview);
    }
    catch (err) { // Specify the type of err as unknown
        if (err instanceof Error) {
            res.status(404).json({ error: 'Interview not found', details: err.message });
        }
        else {
            res.status(404).json({ error: 'An unexpected error occurred while fetching the interview.' });
        }
    }
});
exports.getInterview = getInterview;
// Default export of the controller functions
exports.default = {
    createInterview: exports.createInterview,
    getInterview: exports.getInterview,
};
