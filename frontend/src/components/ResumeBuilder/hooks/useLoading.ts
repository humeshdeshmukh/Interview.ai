// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\hooks\useLoading.ts

import { useState, useCallback } from 'react';

// Custom hook for managing loading state
const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const toggleLoading = useCallback(() => {
    setLoading((prev) => !prev);
  }, []);

  return { loading, startLoading, stopLoading, toggleLoading };
};

export default useLoading;
