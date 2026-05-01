export function AboutSection() {
  return (
    <div className="bg-slate-950 px-6 py-20 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Me
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                I'm a passionate developer with a strong foundation in both frontend and backend technologies.
                I love solving complex problems and building applications that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the community.
              </p>
              <p>
                My goal is to create meaningful digital experiences that are fast, accessible, and delightful to use.
              </p>
            </div>
            {/* <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div> */}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10">
              <p className="text-3xl font-bold text-emerald-400">50+</p>
              <p className="text-slate-300 mt-2">Projects Completed</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10">
              <p className="text-3xl font-bold text-emerald-400">5+</p>
              <p className="text-slate-300 mt-2">Years Experience</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10">
              <p className="text-3xl font-bold text-emerald-400">30+</p>
              <p className="text-slate-300 mt-2">Happy Clients</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10">
              <p className="text-3xl font-bold text-emerald-400">100%</p>
              <p className="text-slate-300 mt-2">Satisfaction Rate</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}