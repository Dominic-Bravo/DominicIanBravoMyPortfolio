import SectionVariant from '../layout/section';

export function HeroSection() {
  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-6 py-20 font-mono">
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
          <div className="w-full bg-slate-950 rounded-32px border border-slate-800/70 overflow-hidden shadow-xl shadow-slate-950/50 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
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
                    &nbsp;&nbsp;role: <span className="text-orange-300">"Software Developer"</span>,
                    <br />
                    &nbsp;&nbsp;mission: <span className="text-orange-300">"Architecting scalable reliability"</span>,
                    <br />
                    &nbsp;&nbsp;stack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Django"</span>, <span className="text-emerald-300">".NET"</span>, <span className="text-emerald-300">".Net MAUI"</span>],
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
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View My Work
          </button>
          <button className="border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors">
            Get in Touch
          </button>
        </div> */}
      </div>
    </div>
  );
}