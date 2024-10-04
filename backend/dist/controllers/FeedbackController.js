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
const FeedbackService_1 = __importDefault(require("../services/FeedbackService")); // Adjust the path if necessary
const submitFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedbackData = req.body; // Assuming you are sending feedback data in the request body
        const result = yield (0, FeedbackService_1.default)(feedbackData);
        res.status(200).json({ message: result });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    }
});
exports.default = { submitFeedback };
