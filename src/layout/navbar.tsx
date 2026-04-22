export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.05)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto font-space-grotesk tracking-tight">
        <div className="text-xl font-bold tracking-tighter text-zinc-100 dark:text-zinc-100">DOMINI IAN BRAVO</div>
        <div className="hidden md:flex items-center gap-8">
            <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Home</a>
            <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-bold" href="#">Projects</a>
            <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Experience</a>
            <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Contact</a>
        </div>
        <button className="bg-primary-container text-on-primary-fixed px-6 py-2 font-bold hover:scale-105 active:scale-95 transition-all duration-200 rounded-lg">
                Resume
            </button>
        </div>
    </nav>
  );
}