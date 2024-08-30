"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express_1.default.json());
// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Example route
app.get('/api/test', (req, res) => {
    res.json({ message: 'This is a test route' });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
