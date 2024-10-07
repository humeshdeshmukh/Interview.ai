import axios from 'axios';

export const getBotResponse = async (userMessage: string, apiKey: string): Promise<string> => {
  const predefinedResponses = (await import('./predefinedResponses')).predefinedResponses;

  // Check for predefined responses first
  if (predefinedResponses[userMessage]) {
    return predefinedResponses[userMessage];
  }

  try {
    // Placeholder URL for Gemini API's chat response endpoint
    const response = await axios.post(
      'https://api.gemini.com/v1/chat-response',  // Replace with the actual Gemini chat endpoint
      {
        prompt: userMessage,  // Assuming Gemini API expects a 'prompt' or 'message' field
        max_tokens: 150,      // Adjust this based on Gemini's API capabilities
        temperature: 0.7,     // Controls creativity/variation in responses
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,  // Use the Gemini API key here
          'Content-Type': 'application/json',
        },
      }
    );

    // Adjust based on Gemini's actual response format
    if (response.data && response.data.reply) {
      return response.data.reply.trim();  // Assuming 'reply' is the field containing the chatbot response
    } else {
      console.warn('No reply returned from Gemini API.');
      return 'I’m not sure how to answer that. Can you try asking something else?';
    }
  } catch (error) {
    console.error('Error fetching bot response:', error);
    if (error.response && error.response.status === 429) {
      return 'Too many requests. Please slow down and try again later.';
    }
    return 'Sorry, something went wrong. Please try again later.';
  }
};
