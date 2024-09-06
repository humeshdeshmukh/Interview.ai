export const handleApiError = (error: any): string => {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      if (error.response) {
        console.error(`API Error: ${error.response.status} - ${error.response.data}`);
        return 'There was an error with the API request. Please try again later.';
      } else if (error.request) {
        console.error('No response received:', error.request);
        return 'No response received from the server. Please try again later.';
      } else {
        console.error('Error setting up request:', error.message);
        return 'An unexpected error occurred. Please try again later.';
      }
    } else {
      console.error('Unexpected error:', error);
      return 'An unexpected error occurred. Please try again later.';
    }
  };
  