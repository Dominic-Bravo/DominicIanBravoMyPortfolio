import { useState } from "react";
import { Homepage } from "./pages/homepage";
import { ProjectsPage } from "./pages/projectspage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {currentPage === "home" && <Homepage currentPage={currentPage} onNavigate={handleNavigate} />}
      {currentPage === "projects" && (
        <>
          <HomePage_Navbar currentPage={currentPage} onNavigate={handleNavigate} />
          <ProjectsPage />
        </>
      )}
      {currentPage === "experience" && (
        <>
          <HomePage_Navbar currentPage={currentPage} onNavigate={handleNavigate} />
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl text-slate-600 dark:text-slate-400">Experience page coming soon...</p>
          </div>
        </>
      )}
      {currentPage === "contact" && (
        <>
          <HomePage_Navbar currentPage={currentPage} onNavigate={handleNavigate} />
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl text-slate-600 dark:text-slate-400">Contact page coming soon...</p>
          </div>
        </>
      )}
    </div>
  )
}

// Navbar component for non-home pages
import { Navbar } from "./layout/header";

function HomePage_Navbar({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) {
  return <Navbar currentPage={currentPage} onNavigate={onNavigate} />;
}