import React, { createContext, useState, ReactNode } from 'react';

interface ChatbotContextType {
  isOpen: boolean;
  toggleChatbot: () => void;
}

export const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChatbotContext.Provider value={{ isOpen, toggleChatbot }}>
      {children}
    </ChatbotContext.Provider>
  );
};
