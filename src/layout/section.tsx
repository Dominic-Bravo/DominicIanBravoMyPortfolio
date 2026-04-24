export default function SectionVariant() {
  return (
    <div className="flex items-center gap-4 justify-center py-4 px-6 bg-slate-500 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm w-full max-w-2xl mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 hover:bg-slate-600 dark:hover:bg-slate-700">
  
  {/* The Pulse Dot: Adjust h-3 w-3 to make the dot bigger/smaller */}
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 dark:bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600 dark:bg-emerald-400"></span>
    </span>

    {/* The Text: Adjust text-4xl to smaller (e.g., text-xl, text-2xl) */}
    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-2xl tracking-tight">
        AVAILABLE FOR NEW PROJECTS
    </span>
    </div>
  );
}