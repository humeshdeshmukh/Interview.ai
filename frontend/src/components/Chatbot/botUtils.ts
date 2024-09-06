import axios from 'axios';

export const getBotResponse = async (userMessage: string, apiKey: string): Promise<string> => {
  const predefinedResponses = (await import('./predefinedResponses')).predefinedResponses;

  // Check for predefined responses first
  if (predefinedResponses[userMessage]) {
    return predefinedResponses[userMessage];
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: userMessage }],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content.trim();
    } else {
      console.warn('No choices returned from OpenAI API.');
      return 'I’m not sure how to answer that. Can you try asking something else?';
    }
  } catch (error) {
    console.error('Error fetching bot response:', error);
    return 'Sorry, something went wrong. Please try again later.';
  }
};
