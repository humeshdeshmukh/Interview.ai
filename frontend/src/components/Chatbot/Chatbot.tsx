import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import chatbotIcon from './chatbot.1.png';
import axios from 'axios';
import { Message } from './types.ts';
import ChatbotWindow from './ChatbotWindow';
import { getBotResponse } from './botUtils';
import { ChatbotContextProvider } from './chatbotContext';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = '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'; // Replace with your OpenAI API key

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
      const botReply = await getBotResponse(inputValue, apiKey);
      setIsLoading(false);

      setMessages(prevMessages => [
        ...prevMessages,
        newMessage,
        { text: botReply, sender: 'bot', timestamp },
      ]);
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

export default Chatbot;
