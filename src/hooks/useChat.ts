import { useState } from 'react';
import type { Message } from '../types/chat'; // Change this
import { getBotResponse } from '../api/chatService';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey there! I'm Dom's assistant. Ask me anything!", sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    
    setIsLoading(true);

    try {
      // Logic: You could map your 'messages' state to the 'history' format here later
      const data = await getBotResponse(text, []); 
      
      const botMsg: Message = {
        id: Date.now() + 1,
        text: data.reply,
        sender: 'bot'
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { 
        id: Date.now() + 1, 
        text: "I'm having trouble connecting to Dom's brain. Try again?", 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};