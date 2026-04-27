export function SkillsSection() {
  return (
    <div className="bg-slate-900 px-6 py-20">
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
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Frontend</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Building responsive, accessible UIs with modern frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">React</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">TypeScript</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Tailwind</span>
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Backend</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Designing scalable APIs and robust server-side architectures
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Python</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Django</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">FastAPI</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">.Net</span>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">.NET MAUI</span>
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