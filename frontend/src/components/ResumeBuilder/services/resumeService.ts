// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\services\resumeService.ts

const RESUME_API_URL = '/api/resumes'; // Adjust the API URL according to your backend

// Function to fetch resumes
export const fetchResumes = async () => {
  const response = await fetch(RESUME_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch resumes');
  }
  return response.json();
};

// Function to save a new resume
export const saveResume = async (resumeData: any) => {
  const response = await fetch(RESUME_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to save resume');
  }
  return response.json();
};

// Function to update an existing resume
export const updateResume = async (id: string, resumeData: any) => {
  const response = await fetch(`${RESUME_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData),
  });

  if (!response.ok) {
    throw new Error('Failed to update resume');
  }
  return response.json();
};

// Function to delete a resume
export const deleteResume = async (id: string) => {
  const response = await fetch(`${RESUME_API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete resume');
  }
};
