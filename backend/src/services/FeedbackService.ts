// Define an interface for feedback data
interface FeedbackData {
    userId: string;
    message: string;
    rating: number; // Assume rating is between 1-5
    timestamp?: Date; // Optional, will be added by default
}

// Define a custom error class for handling specific feedback errors
class FeedbackError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FeedbackError';
    }
}

// Mocked function to simulate saving feedback to a database or API
const saveFeedbackToDatabase = async (feedback: FeedbackData): Promise<void> => {
    // Simulate API/database interaction delay
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

// Advanced feedback function with async, logging, and error handling
const giveFeedback = async (feedback: FeedbackData): Promise<string> => {
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
        await saveFeedbackToDatabase(feedback);

        // Log success
        console.log(`Feedback from user ${feedback.userId} saved successfully`);

        return 'Feedback submitted successfully!';
    } catch (error) {
        // Handle specific feedback errors
        if (error instanceof FeedbackError) {
            console.error('Feedback submission failed:', error.message);
            throw new FeedbackError('Failed to submit feedback due to invalid data.');
        }

        // Handle other unexpected errors
        console.error('An unexpected error occurred:', error);
        throw new Error('Something went wrong while submitting feedback. Please try again later.');
    }
};

// Default export of the giveFeedback function
export default giveFeedback;
