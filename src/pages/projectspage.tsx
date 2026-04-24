import { projectsData } from '../data/projects';

// ProjectsPage renders the project showcase using data from the projects data file.
export function ProjectsPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            My <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-xl text-slate-300">
            Explore the projects I've built and contributed to
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-emerald-900 to-slate-950 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <p className="text-5xl mb-2">📱</p>
                    <p className="text-sm text-slate-300">{project.year}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition duration-300 ease-out hover:-translate-y-0.5"
                    >
                      Live
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-sm font-medium rounded-lg transition duration-300 ease-out hover:-translate-y-0.5"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add More CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              More projects coming soon...
            </p>
            <button className="bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Me for Custom Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
