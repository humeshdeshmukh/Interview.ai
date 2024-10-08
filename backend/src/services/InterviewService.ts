import Interview from '../models/Interview';

// Interface for Interview Data
interface InterviewData {
    candidateName: string;
    position: string;
    date: Date;
    interviewer: string;
    status?: string; // Optional field for status, e.g., 'Scheduled', 'Completed', etc.
}

// Custom Error Class for Interview Not Found
class InterviewError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InterviewError';
    }
}

// Function to create a new interview
const createInterview = async (data: InterviewData) => {
    try {
        // Validation of required fields
        if (!data.candidateName || !data.position || !data.date || !data.interviewer) {
            throw new InterviewError('Missing required fields');
        }

        // Creating the interview record
        const interview = await Interview.create(data);

        // Log success
        console.log('Interview created successfully:', interview);

        return interview;
    } catch (error: unknown) {
        // Handle unknown error type
        if (error instanceof Error) {
            console.error('Error creating interview:', error.message);
            throw new Error('Failed to create interview: ' + error.message);
        } else {
            console.error('Unexpected error while creating interview:', error);
            throw new Error('Failed to create interview due to an unexpected error.');
        }
    }
};

// Function to fetch an interview by ID
const getInterview = async (id: string) => {
    try {
        // Fetching interview from the database
        const interview = await Interview.findById(id);

        // Check if the interview exists
        if (!interview) {
            throw new InterviewError('Interview not found');
        }

        // Log success
        console.log(`Interview found with ID: ${id}`, interview);

        return interview;
    } catch (error: unknown) {
        // Handle known errors
        if (error instanceof InterviewError) {
            console.error('Error fetching interview:', error.message);
            throw error;
        }

        // Handle unexpected errors
        if (error instanceof Error) {
            console.error('Unexpected error while fetching interview:', error.message);
            throw new Error('Failed to fetch interview: ' + error.message);
        } else {
            console.error('Unexpected error while fetching interview:', error);
            throw new Error('Failed to fetch interview due to an unexpected error.');
        }
    }
};

// Default export of all functions
export default {
    createInterview,
    getInterview
};
