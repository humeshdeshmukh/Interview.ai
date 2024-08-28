import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Define interfaces for your data models
export interface Question {
  id: number;
  questionText: string;
  answer: string;
}

export interface QuestionResponse {
  data: Question[];
}

// Fetch all questions
export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const response = await axios.get<QuestionResponse>(`${API_BASE_URL}/questions`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

// Fetch a single question by ID
export const fetchQuestionById = async (id: number): Promise<Question> => {
  try {
    const response = await axios.get<Question>(`${API_BASE_URL}/questions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching question with ID ${id}:`, error);
    throw error;
  }
};

// Add a new question
export const addQuestion = async (question: Omit<Question, 'id'>): Promise<Question> => {
  try {
    const response = await axios.post<Question>(`${API_BASE_URL}/questions`, question);
    return response.data;
  } catch (error) {
    console.error('Error adding question:', error);
    throw error;
  }
};

// Update an existing question
export const updateQuestion = async (id: number, updatedQuestion: Partial<Question>): Promise<Question> => {
  try {
    const response = await axios.put<Question>(`${API_BASE_URL}/questions/${id}`, updatedQuestion);
    return response.data;
  } catch (error) {
    console.error(`Error updating question with ID ${id}:`, error);
    throw error;
  }
};

// Delete a question
export const deleteQuestion = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/questions/${id}`);
  } catch (error) {
    console.error(`Error deleting question with ID ${id}:`, error);
    throw error;
  }
};
