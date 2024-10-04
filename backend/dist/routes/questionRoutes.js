"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const QuestionController_1 = __importDefault(require("../controllers/QuestionController")); // Default import
const router = express_1.default.Router();
// Define a POST route for creating a question
router.post('/', QuestionController_1.default);
exports.default = router; // Use default export
