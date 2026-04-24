// Navbar renders the top site navigation.
// It receives the current active page and a callback to switch pages.
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links used in both desktop and mobile layouts.
  const navItems = [
    { label: "Home", page: "home" },
    { label: "Projects", page: "projects" },
    { label: "Experience", page: "experience" },
    { label: "Contact", page: "contact" }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate("home")}
            className="font-bold text-emerald-400 text-lg sm:text-xl hover:opacity-80 transition-opacity"
          >
            DOMINIC IAN BRAVO
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-slate-200 font-medium">
              {navItems.map((item) => (
                <li key={item.page}>
                  <button 
                    onClick={() => onNavigate(item.page)}
                    className={`transition-colors text-sm lg:text-base ${
                      currentPage === item.page 
                        ? "text-emerald-300" 
                        : "hover:text-emerald-300"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onNavigate('contact')}
              className="bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:opacity-90 text-sm lg:text-base"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-lg p-2 text-slate-200 hover:bg-slate-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    currentPage === item.page 
                      ? "bg-emerald-600 text-white" 
                      : "text-slate-200 hover:bg-slate-800 hover:text-emerald-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};