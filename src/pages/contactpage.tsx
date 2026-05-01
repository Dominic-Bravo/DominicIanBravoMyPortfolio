import { useState } from 'react';
import { contactMethods } from '../data/contact';

export function ContactPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    const cleanText = text.replace(/mailto:|https:\/\/wa.me\//, '');
    
    navigator.clipboard.writeText(cleanText);
    setCopiedId(id);
    
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-slate-950 min-h-screen px-4 sm:px-6 py-12 md:py-20 text-slate-100 font-mono">
      <div className="max-w-5xl mx-auto">
        {/* Header */} 
        <div className="text-center mb-12 md:mb-16">
          {/* Reduced tracking on mobile so it doesn't overflow or look awkward */}
          <p className="text-emerald-400 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-xs sm:text-sm font-semibold mb-3">
            Contact
          </p>
          {/* Dynamic font sizing for headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Let's Build Together
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Choose the best way to reach me and start your next project with confidence.
          </p>
        </div>

        {/* Contact Grid */}
        {/* Use grid-cols-1 by default, then sm:grid-cols-2, then lg:grid-cols-3 */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Copy Action - Changed opacity for touch devices (sm:hover) */}
              <button
                onClick={(e) => handleCopy(e, method.label, method.id)}
                className="absolute top-4 right-6 sm:top-6 sm:right-8 text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-emerald-400 transition-colors opacity-100"
              >
                {copiedId === method.id ? 'Copied!' : 'Copy Info'}
              </button>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
                {method.subtitle}
              </p>
              
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {method.title}
              </h2>
              
              <p className="text-slate-400 mb-6 text-xs sm:text-sm leading-relaxed">
                {method.description}
              </p>
              
              <p className="text-emerald-300 font-mono text-xs sm:text-sm truncate border-t border-slate-800 pt-4">
                {method.label}
              </p>
            </a>
          ))}
        </div>

        {/* Custom Message Section */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 transition duration-300 hover:border-emerald-500/30">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Want to add a custom message?
          </h2>
          <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
            You can update this section with a contact form or a scheduling link in the future.
          </p>
          
          {/* Grid for the sub-info cards */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-800 p-5 sm:p-6 border border-transparent hover:border-emerald-500/20 transition-all">
              <p className="text-slate-500 text-[10px] mb-1 uppercase tracking-wider font-bold">Email</p>
              <p className="text-emerald-300 font-semibold text-sm sm:text-base truncate">
                dominicianbravo017@gmail.com
              </p>
            </div>
            <div className="rounded-2xl bg-slate-800 p-5 sm:p-6 border border-transparent hover:border-emerald-500/20 transition-all">
              <p className="text-slate-500 text-[10px] mb-1 uppercase tracking-wider font-bold">Response Time</p>
              <p className="text-emerald-300 font-semibold text-sm sm:text-base">
                Typically 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}