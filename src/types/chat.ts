// src/types/chat.ts

export interface ChatHistory {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface Message {
  id: number | string;
  text: string;
  sender: 'user' | 'bot';
}

export interface ChatRequest {
  message: string;
  history: ChatHistory[];
}

export interface ChatResponse {
  reply: string;
}