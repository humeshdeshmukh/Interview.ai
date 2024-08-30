import ChatbotMessage from '../models/chatbot';

// Function to save a chat message to the database
export const saveChatMessage = async (userMessage: string, botResponse: string) => {
  try {
    const newMessage = new ChatbotMessage({
      userMessage,
      botResponse,
    });

    await newMessage.save();
    return newMessage;
  } catch (error) {
    throw new Error('Failed to save chat message.');
  }
};

// Function to retrieve chat messages (if needed)
export const getChatMessages = async () => {
  try {
    return await ChatbotMessage.find().sort({ createdAt: -1 }).exec();
  } catch (error) {
    throw new Error('Failed to retrieve chat messages.');
  }
};
