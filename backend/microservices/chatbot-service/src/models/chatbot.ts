import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { saveChatMessage } from '../services/chatbotService';

dotenv.config();

const router = express.Router();
const apiBaseUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Adjust if necessary
const apiKey = process.env.OPENAI_API_KEY;

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      apiBaseUrl,
      {
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const botResponse = response.data.choices[0].text.trim();

    // Save the chat message to the database
    await saveChatMessage(message, botResponse);

    res.json({ reply: botResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
