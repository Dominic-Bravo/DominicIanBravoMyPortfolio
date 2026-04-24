import { experienceData } from '../data/experience';

// ExperiencePage displays a timeline of roles and work highlights.
export function ExperiencePage() {
  return (
    <div className="bg-slate-950 min-h-screen px-6 py-20 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Experience
          </p>
          <h1 className="text-5xl md:text-6xl font-bold">My Professional Journey</h1>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Explore the roles, projects, and achievements that shaped my career in development.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg shadow-emerald-500/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-emerald-500 hover:shadow-emerald-500/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{item.role}</h2>
                  <p className="text-emerald-400 font-semibold">{item.company}</p>
                </div>
                <div className="text-slate-400 text-sm">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-4">{item.description}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight, index) => (
                  <div key={index} className="rounded-2xl bg-slate-800 p-4 border border-slate-700 transition-colors duration-300 hover:bg-slate-700">
                    <p className="text-slate-300">• {highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
