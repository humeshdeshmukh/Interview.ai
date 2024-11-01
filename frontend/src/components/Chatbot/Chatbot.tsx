import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import chatbotIcon from './chatbot.1.png';
import axios from 'axios';
import { Message } from './types';
import ChatbotWindow from './ChatbotWindow';
import { getBotResponse } from './botUtils';
import { ChatbotContextProvider } from './chatbotContext';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = 'AIzaSyCScbtR_509d61FO4yybzC-7U46fLppJsE'; // Replace with your Gemini API key

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = async () => {
    if (inputValue.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      const newMessage: Message = { text: inputValue, sender: 'user', timestamp };
      setMessages([...messages, newMessage]);
      setInputValue('');

      setIsLoading(true);

      try {
        const response = await axios.post('https://api.gemini.com/v1', {
          prompt: inputValue,
          api_key: apiKey,
        });

        const botReply = response.data.reply || 'Sorry, I could not understand that.';
        setMessages(prevMessages => [
          ...prevMessages,
          newMessage,
          { text: botReply, sender: 'bot', timestamp },
        ]);
      } catch (error) {
        console.error('Error fetching bot response:', error);
        setMessages(prevMessages => [
          ...prevMessages,
          newMessage,
          { text: 'Error getting response from the bot', sender: 'bot', timestamp },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ChatbotContextProvider>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        {isOpen ? (
          <ChatbotWindow
            messages={messages}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSend={handleSend}
            isLoading={isLoading}
            toggleChatbot={toggleChatbot}
          />
        ) : (
          <button
            className="chatbot-icon-button"
            onClick={toggleChatbot}
            aria-label="Open Chatbot"
          >
            <img src={chatbotIcon} alt="Chatbot Icon" />
          </button>
        )}
      </div>
    </ChatbotContextProvider>
  );
};

// Export the component as the default export
export default Chatbot;
