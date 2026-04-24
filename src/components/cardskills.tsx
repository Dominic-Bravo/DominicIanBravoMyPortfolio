// components/sections/SkillCard.tsx
export const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-emerald-600 transition-all duration-300">
    <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-slate-100">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 rounded-full font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);