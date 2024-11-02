// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\hooks\useDownloadResume.ts

import { useCallback } from 'react';

// Function to create a blob and download it
const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Custom hook for downloading the resume
const useDownloadResume = () => {
  const downloadResume = useCallback((resumeContent: string, filename: string) => {
    const blob = new Blob([resumeContent], { type: 'text/plain' }); // Adjust MIME type as needed
    downloadBlob(blob, filename);
  }, []);

  return { downloadResume };
};

export default useDownloadResume;
