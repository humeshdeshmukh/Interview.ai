import React, { useState } from 'react';
import axios from 'axios';

const ChatbotWidget: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, `You: ${input}`]);

    try {
      // Send message to chatbot
      const response = await axios.post(
        `${apiBaseUrl}/chat`, // Adjust endpoint as necessary
        { message: input },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Add bot response to chat
      setMessages([...messages, `You: ${input}`, `Bot: ${response.data.reply}`]);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
      setMessages([...messages, 'Bot: Error occurred']);
    }
  };

  return (
    <div className="chatbot-widget">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
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
