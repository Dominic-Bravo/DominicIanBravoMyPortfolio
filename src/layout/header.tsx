import { useDarkMode } from "../hooks/useDarkMode";

// components/layout/Navbar.tsx
export const Navbar = () => {
  const toggleDarkMode = useDarkMode();

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-bold text-brand dark:text-brand-dark text-xl">
          DOMINIC IAN BRAVO
        </span>
        
        <ul className="flex gap-6 text-text-muted dark:text-text-muted-dark font-medium">
          <li className="hover:text-brand transition-colors cursor-pointer">Home</li>
          <li className="hover:text-brand transition-colors cursor-pointer">Projects</li>
          <li className="hover:text-brand transition-colors cursor-pointer">Experience</li>
          <li className="hover:text-brand transition-colors cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-text-main dark:text-white transition-all"
          >
            Toggle Theme
          </button>
          
          <button className="btn-primary">Get in Touch</button>
        </div>
      </div>
    </nav>
  );
};