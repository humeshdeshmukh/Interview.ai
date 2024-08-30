import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const openAIKey = process.env.OPENAI_API_KEY;

// Example of using the API key in a request
const fetchOpenAIData = async () => {
  try {
    const response = await fetch('https://api.openai.com/v1/some-endpoint', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ /* your request data */ }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
  }
};

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
