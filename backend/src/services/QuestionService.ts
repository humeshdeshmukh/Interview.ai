import Question from '../models/Question';

// Define an interface for the question data
interface QuestionData {
    title: string;
    description: string;
    options: string[]; // Assuming it's a multiple-choice question
    correctAnswer: string;
    difficulty: 'easy' | 'medium' | 'hard'; // Example difficulty levels
}

// Custom Error class for handling question-related errors
class QuestionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'QuestionError';
    }
}

// Function to create a new question with validation, error handling, and logging
const createQuestion = async (data: QuestionData) => {
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
        const question = await Question.create(data);

        // Log success
        console.log('Question created successfully:', question);

        return question;
    } catch (error: unknown) {
        // Log the error and throw a user-friendly message
        if (error instanceof Error) {
            console.error('Error creating question:', error.message);
            throw new Error('Failed to create question: ' + error.message); // Pass the original error message
        } else {
            console.error('Unexpected error:', error);
            throw new Error('Failed to create question due to an unexpected error.');
        }
    }
};

// Default export of all functions
export default {
    createQuestion
};
