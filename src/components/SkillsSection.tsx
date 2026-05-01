import { Settings, Palette } from 'lucide-react';

export function SkillsSection() {
  const frontendSkills = ["React", "TypeScript", "Tailwind", ".Net MAUI"];
  const backendSkills = ["Python", "Django", "FastAPI", ".Net", "Asp Web Api"];

  return (
    <div className="bg-slate-900 px-6 py-20 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-xl text-slate-300">
            Expertise across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">
                  <Palette className="w-6 h-6 text-emerald-400" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Frontend</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Building responsive, accessible UIs with modern frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-sm rounded-full font-medium bg-emerald-900/30 text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">
                  <Settings className="w-6 h-6 text-emerald-400" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Backend</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Designing scalable APIs and robust server-side architectures
            </p>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-sm rounded-full font-medium bg-emerald-900/30 text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Card */}
          {/* <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">DevOps & Tools</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Managing deployments and optimizing development workflows
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Docker</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Git</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">PostgreSQL</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}