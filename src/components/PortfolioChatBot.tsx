import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Terminal } from 'lucide-react';
import { useChat } from '../hooks/useChat';
// Using 'import type' to satisfy verbatimModuleSyntax
import type { Message } from '../types/chat';

export default function PortfolioChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  // Destructure logic from our custom hook
  const { messages, sendMessage, isLoading } = useChat();
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic remains the same
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    // The hook handles adding the user message and calling the Vercel API
    await sendMessage(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-60 font-mono">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl shadow-emerald-500/10 flex flex-col overflow-hidden transition-all animate-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="flex-none flex items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-slate-800/70">
            <div className="flex items-center gap-2">
              {/* Pulse color changes based on loading state */}
              <div className={`w-2 h-2 rounded-full animate-pulse ${isLoading ? 'bg-amber-500' : 'bg-emerald-500'}`} />
              <span className="text-xs text-slate-400 uppercase tracking-widest">Assistant.exe</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800"
          >
            {messages.map((msg: Message) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed break-words ${
                  msg.sender === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Thinking Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900/50 text-slate-500 p-3 rounded-2xl rounded-tl-none border border-slate-800/50 text-xs italic animate-pulse">
                  Terminal processing...
                </div>
              </div>
            )}
          </div>

          {/* Input - Terminal Look */}
          <div className="flex-none p-4 bg-slate-950 border-t border-slate-800">
            <div className={`flex items-center gap-2 bg-slate-900 rounded-xl px-3 py-1 border transition-all ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'border-transparent focus-within:border-emerald-500/50'
            }`}>
              <Terminal size={14} className="text-emerald-500" />
              <input 
                type="text"
                value={input}
                disabled={isLoading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isLoading ? "Executing..." : "Type a command..."}
                className="flex-1 bg-transparent border-none py-2 text-sm text-slate-200 focus:outline-none placeholder:text-slate-600 disabled:cursor-not-allowed"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading}
                className="text-emerald-500 hover:text-emerald-400 p-1 disabled:text-slate-700"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 shadow-xl transition-all hover:scale-110 hover:border-emerald-500/50 active:scale-95"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-2xl bg-emerald-500/20 opacity-75"></span>
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}