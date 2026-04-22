export function Navbar() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter text-zinc-50">
          DOMINI IAN BRAVO
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button className="bg-cyan-600 text-white px-6 py-2 font-semibold hover:bg-cyan-500 hover:scale-105 active:scale-95 transition-all duration-200 rounded-lg shadow-lg shadow-cyan-900/20">
          Resume
        </button>
      </div>
    </nav>
  );
}