// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\services\templateService.ts

const TEMPLATE_API_URL = '/api/templates'; // Adjust the API URL according to your backend

// Function to fetch available templates
export const fetchTemplates = async () => {
  const response = await fetch(TEMPLATE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch templates');
  }
  return response.json();
};

// Function to get a specific template by ID
export const getTemplateById = async (id: string) => {
  const response = await fetch(`${TEMPLATE_API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch template');
  }
  return response.json();
};
