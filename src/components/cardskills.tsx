// components/sections/SkillCard.tsx
export const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="card hover:border-brand transition-all duration-300">
    <h3 className="font-bold text-lg mb-4 text-text-main dark:text-text-main-dark">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-brand dark:text-brand-dark rounded-full font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);