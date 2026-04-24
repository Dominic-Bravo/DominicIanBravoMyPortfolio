import { useDarkMode } from "../hooks/useDarkMode";

// components/layout/Navbar.tsx
export const Navbar = () => {
  const toggleDarkMode = useDarkMode();

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xl">
          DOMINIC IAN BRAVO
        </span>
        
        <ul className="flex gap-6 text-slate-600 dark:text-slate-400 font-medium">
          <li className="hover:text-emerald-600 transition-colors cursor-pointer">Home</li>
          <li className="hover:text-emerald-600 transition-colors cursor-pointer">Projects</li>
          <li className="hover:text-emerald-600 transition-colors cursor-pointer">Experience</li>
          <li className="hover:text-emerald-600 transition-colors cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white transition-all"
          >
            Toggle Theme
          </button>
          
          <button className="bg-emerald-600 dark:bg-emerald-400 text-white/80 font-semibold py-2 px-4 rounded-lg transition-colors hover:opacity-90">Get in Touch</button>
        </div>
      </div>
    </nav>
  );
};