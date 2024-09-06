import React from 'react';
import './ChatbotWindow.css';
import ChatbotMessage from './ChatbotMessage';

interface ChatbotWindowProps {
  messages: { role: 'user' | 'bot'; text: string; timestamp: string }[];
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  isLoading: boolean;
  toggleChatbot: () => void;
}

const ChatbotWindow: React.FC<ChatbotWindowProps> = ({
  messages,
  inputValue,
  onInputChange,
  onSend,
  isLoading,
  toggleChatbot,
}) => {
  return (
    <div className="chatbot-window">
      <div className="chatbot-window-header">
        <button
          className="chatbot-close-button"
          onClick={toggleChatbot}
          aria-label="Close Chatbot"
        >
          &#x2715; {/* Close Icon */}
        </button>
        <span>Chatbot</span>
      </div>
      <div className="chatbot-window-messages">
        {messages.map((msg, index) => (
          <ChatbotMessage
            key={index}
            role={msg.sender}
            message={msg.text}
            timestamp={msg.timestamp}
          />
        ))}
        {isLoading && <div className="loading-indicator">Typing...</div>}
      </div>
      <div className="chatbot-window-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={onInputChange}
          disabled={isLoading}
        />
        <button onClick={onSend} disabled={isLoading} aria-label="Send Message">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotWindow;
