import SectionVariant from '../layout/section';

// Homepage is the landing page for the portfolio.
// It includes hero content, featured skills, an about section, and a call-to-action.
export function Homepage() {
  return (
    <>
      {/* Hero Section */}
      
      {/* Hero Section */}
      <div className="bg-slate-950 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full grid gap-10 lg:grid-cols-[1.2fr_1.4fr] items-start">
          <div className="space-y-4 text-center lg:text-left">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <SectionVariant />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
                Hello, I'm <span className="text-emerald-400">Dominic Ian</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300">
                Full-Stack Developer & Tech Enthusiast
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft beautiful, performant web experiences using modern technologies.
              Specialized in React, TypeScript, and backend development with Python and Django.
            </p>
          </div>

          {/* Code profile preview card */}
          <div className="w-full">
            <div className="w-full bg-slate-950 rounded-[32px] border border-slate-800/70 overflow-hidden shadow-xl shadow-slate-950/50 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/95 border-b border-slate-800/70">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 font-mono text-xs text-slate-500">
                  engineer_profile.ts — Visual Studio Code
                </span>
              </div>
              <div className="p-6 font-mono text-sm text-slate-100 overflow-x-auto bg-slate-950">
                <div className="flex gap-4">
                  <div className="text-slate-500 text-right select-none pr-4 border-r border-slate-800/70">
                    01<br />02<br />03<br />04<br />05<br />06<br />07<br />08
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    <code>
                      <span className="text-sky-400">const</span> <span className="text-emerald-300">developer</span> = {'{'}
                      <br />
                      &nbsp;&nbsp;name: <span className="text-orange-300">"Dominic Ian Bravo"</span>,
                      <br />
                      &nbsp;&nbsp;role: <span className="text-orange-300">"Software Engineer"</span>,
                      <br />
                      &nbsp;&nbsp;mission: <span className="text-orange-300">"Architecting scalable reliability"</span>,
                      <br />
                      &nbsp;&nbsp;stack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Django"</span>, <span className="text-emerald-300">".NET"</span>],
                      <br />
                      &nbsp;&nbsp;is_coding: <span className="text-sky-400">true</span>,
                      <br />
                      &nbsp;&nbsp;contact: () =&gt; <span className="text-sky-400">connect</span>(<span className="text-orange-300">'hi@bravo.dev'</span>)
                      <br />
                      {'};'}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

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

          <div className="grid md:grid-cols-3 gap-8">
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
              </div>
            </div>

            {/* Tools Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
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
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-slate-950 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
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