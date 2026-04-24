import { useState } from 'react';
import { projectsData } from '../data/projects';

// ProjectsPage renders the project showcase using data from the projects data file.
export function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
    }
  };
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
                <button 
                  onClick={() => openModal(project)}
                  className="h-48 bg-gradient-to-br from-emerald-900 to-slate-950 flex items-center justify-center overflow-hidden hover:from-emerald-800 hover:to-slate-900 transition-colors cursor-pointer w-full"
                >
                  <div className="text-center">
                    <p className="text-5xl mb-2">📱</p>
                    <p className="text-sm text-slate-300">{project.year}</p>
                  </div>
                </button>

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

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
              <button 
                onClick={closeModal}
                className="text-slate-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="relative">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        ‹
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        ›
                      </button>
                      <div className="flex justify-center mt-4 gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-emerald-400' : 'bg-slate-600'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-6xl mb-4">📱</p>
                  <p className="text-slate-400">No screenshots available for this project</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
