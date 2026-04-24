import SectionVariant from '../layout/section';

export function Homepage() {
  return (
    <>
      {/* Hero Section */}
      
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-950 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Status Badge */}
          <div className="flex justify-center">
            <SectionVariant />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Hello, I'm <span className="text-emerald-600 dark:text-emerald-400">Dominic Ian</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              Full-Stack Developer & Tech Enthusiast
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, performant web experiences using modern technologies. 
            Specialized in React, TypeScript, and backend development with Python and Django.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View My Work
            </button>
            <button className="border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Featured Skills Section */}
      <div className="bg-slate-50 dark:bg-slate-900 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Expertise across the full development stack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Card */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-emerald-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Building responsive, accessible UIs with modern frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">React</span>
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">TypeScript</span>
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Tailwind</span>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-emerald-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Designing scalable APIs and robust server-side architectures
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Python</span>
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Django</span>
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">FastAPI</span>
              </div>
            </div>

            {/* Tools Card */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-emerald-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">DevOps & Tools</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Managing deployments and optimizing development workflows
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Docker</span>
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">Git</span>
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white dark:bg-slate-950 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                About Me
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
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
              <div className="pt-4">
                <button className="bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Download Resume
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">50+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Projects Completed</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">5+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Years Experience</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">30+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Happy Clients</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">100%</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 dark:bg-emerald-900 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-emerald-100">
              Let's collaborate on your next project
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Me
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}