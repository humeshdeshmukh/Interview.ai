"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FeedbackController_1 = __importDefault(require("../controllers/FeedbackController")); // Ensure this imports your controller
const router = express_1.default.Router();
// Route for submitting feedback
router.post('/', FeedbackController_1.default.submitFeedback);
exports.default = router;
