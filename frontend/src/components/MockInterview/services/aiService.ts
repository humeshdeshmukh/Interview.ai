// aiService.ts

export const fetchAIResponse = async (query: string): Promise<string> => {
    // Implement API call to fetch AI response
    const response = await fetch('/api/ai', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.response;
  };
  