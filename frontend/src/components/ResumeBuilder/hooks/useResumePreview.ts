// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\hooks\useResumePreview.ts

import { useCallback } from 'react';
import { ResumeFormData } from './useResumeForm'; // Adjust the import based on your structure

// Custom hook for managing resume preview
const useResumePreview = (formData: ResumeFormData) => {
  const generatePreview = useCallback(() => {
    const { personalDetails, education, experience, skills, certifications, summary } = formData;

    // Create a simple preview structure (customize as needed)
    return {
      personalDetails,
      education,
      experience,
      skills,
      certifications,
      summary,
    };
  }, [formData]);

  return { generatePreview };
};

export default useResumePreview;
