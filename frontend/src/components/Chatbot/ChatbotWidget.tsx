import React, { useState } from 'react';
import axios from 'axios';
import ChatbotMessage from './ChatbotMessage'; // Import the ChatbotMessage component
import './ChatbotWidget.css'; // Ensure this file contains your styles

const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Ensure this is correctly set in your environment variables
const apiBaseUrl = 'https://api.openai.com/v1/completions'; // Correct API endpoint for OpenAI

const ChatbotWidget: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { sender: 'user', text: input }]);

    try {
      // Send message to OpenAI API
      const response = await axios.post(
        apiBaseUrl,
        {
          model: 'text-davinci-003', // Specify the model
          prompt: input,
          max_tokens: 150,
          temperature: 0.7
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Extract the AI's response
      const aiResponse = response.data.choices[0].text.trim();

      // Add bot response to chat
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: aiResponse }]);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'Error occurred' }]);
    }
  };

  return (
    <div className="chatbot-widget">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <ChatbotMessage key={index} sender={msg.sender} message={msg.text} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotWidget;
