"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InterviewController_1 = require("../controllers/InterviewController");
const router = express_1.default.Router();
router.post('/', InterviewController_1.createInterview);
router.get('/:id', InterviewController_1.getInterview);
exports.default = router;
