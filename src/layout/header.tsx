interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const navItems = [
    { label: "Home", page: "home" },
    { label: "Projects", page: "projects" },
    { label: "Experience", page: "experience" },
    { label: "Contact", page: "contact" }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => onNavigate("home")}
          className="font-bold text-emerald-600 text-xl hover:opacity-80 transition-opacity"
        >
          DOMINIC IAN BRAVO
        </button>
        
        <ul className="flex gap-6 text-slate-600 font-medium">
          {navItems.map((item) => (
            <li key={item.page}>
              <button 
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page 
                    ? "text-emerald-600" 
                    : "hover:text-emerald-600"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:opacity-90"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};