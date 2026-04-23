export default function SectionVariant() {
  return (
    <div className="flex items-center gap-4 justify-center py-4 px-6 bg-slate-500 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm w-full max-w-2xl mx-auto">
  
  {/* The Pulse Dot: Adjust h-3 w-3 to make the dot bigger/smaller */}
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand dark:bg-brand-dark opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand dark:bg-brand-dark"></span>
    </span>

    {/* The Text: Adjust text-4xl to smaller (e.g., text-xl, text-2xl) */}
    <span className="font-bold text-brand dark:text-brand-dark text-2xl tracking-tight">
        AVAILABLE FOR NEW PROJECTS
    </span>
    </div>
  );
}