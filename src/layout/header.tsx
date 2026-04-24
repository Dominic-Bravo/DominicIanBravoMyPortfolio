import { useDarkMode } from "../hooks/useDarkMode";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const toggleDarkMode = useDarkMode();

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Projects", page: "projects" },
    { label: "Experience", page: "experience" },
    { label: "Contact", page: "contact" }
  ];

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => onNavigate("home")}
          className="font-bold text-emerald-600 dark:text-emerald-400 text-xl hover:opacity-80 transition-opacity"
        >
          DOMINIC IAN BRAVO
        </button>
        
        <ul className="flex gap-6 text-slate-600 dark:text-slate-400 font-medium">
          {navItems.map((item) => (
            <li key={item.page}>
              <button 
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page 
                    ? "text-emerald-600 dark:text-emerald-400" 
                    : "hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white transition-all hover:bg-slate-300 dark:hover:bg-slate-600"
          >
            🌙
          </button>
          
          <button className="bg-emerald-600 dark:bg-emerald-400 text-white dark:text-slate-900 font-semibold py-2 px-4 rounded-lg transition-colors hover:opacity-90">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};