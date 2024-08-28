import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Define interfaces for your data models
export interface Interview {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface InterviewResponse {
  data: Interview[];
}

// Fetch all interviews
export const fetchInterviews = async (): Promise<Interview[]> => {
  try {
    const response = await axios.get<InterviewResponse>(`${API_BASE_URL}/interviews`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching interviews:', error);
    throw error;
  }
};

// Fetch a single interview by ID
export const fetchInterviewById = async (id: number): Promise<Interview> => {
  try {
    const response = await axios.get<Interview>(`${API_BASE_URL}/interviews/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching interview with ID ${id}:`, error);
    throw error;
  }
};

// Add a new interview
export const addInterview = async (interview: Omit<Interview, 'id'>): Promise<Interview> => {
  try {
    const response = await axios.post<Interview>(`${API_BASE_URL}/interviews`, interview);
    return response.data;
  } catch (error) {
    console.error('Error adding interview:', error);
    throw error;
  }
};

// Update an existing interview
export const updateInterview = async (id: number, updatedInterview: Partial<Interview>): Promise<Interview> => {
  try {
    const response = await axios.put<Interview>(`${API_BASE_URL}/interviews/${id}`, updatedInterview);
    return response.data;
  } catch (error) {
    console.error(`Error updating interview with ID ${id}:`, error);
    throw error;
  }
};

// Delete an interview
export const deleteInterview = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/interviews/${id}`);
  } catch (error) {
    console.error(`Error deleting interview with ID ${id}:`, error);
    throw error;
  }
};
