import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Terminal } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export default function PortfolioChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Dominic's virtual assistant. Want to know about his experience with React or Python?",
      sender: 'bot',
    },
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock Response
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: "That's a great question about my stack! Feel free to check the 'engineer_profile.ts' card for the full list.",
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-60 font-mono">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-500px bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl shadow-emerald-500/10 flex flex-col overflow-hidden transition-all animate-in slide-in-from-bottom-5">
          
          {/* Header - Matching your VS Code card style */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-slate-800/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-400 uppercase tracking-widest">Assistant.exe</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input - The "Terminal" Look */}
          <div className="p-4 bg-slate-950 border-t border-slate-800">
            <div className="flex items-center gap-2 bg-slate-900 rounded-xl px-3 py-1 border border-transparent focus-within:border-emerald-500/50 transition-all">
              <Terminal size={14} className="text-emerald-500" />
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a command..."
                className="flex-1 bg-transparent border-none py-2 text-sm text-slate-200 focus:outline-none placeholder:text-slate-600"
              />
              <button onClick={handleSend} className="text-emerald-500 hover:text-emerald-400 p-1">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Matching your Status Badge Pulse */}
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