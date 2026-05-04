import type { ChatHistory, ChatRequest, ChatResponse } from '../types/chat';

const API_URL = 'https://ai-personal-chatbot-ryy8.vercel.app/portfolio-chat';

export const getBotResponse = async (userMessage: string, history: ChatHistory[] = []): Promise<ChatResponse> => {
  const payload: ChatRequest = {
    message: userMessage,
    history: history // Currently empty per your curl example, but ready for scaling
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {  
      'Accept': 'application/json',
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};