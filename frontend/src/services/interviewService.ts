import API from './api';

// Fetch all interviews
export const getInterviews = async () => {
  const response = await API.get('/interviews');
  return response.data;
};

// Create a new interview
export const createInterview = async (interviewData: any) => {
  const response = await API.post('/interviews', interviewData);
  return response.data;
};
