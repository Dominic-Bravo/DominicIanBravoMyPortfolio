import { useState } from "react";
import { Homepage } from "./pages/homepage";
import { ProjectsPage } from "./pages/projectspage";
import { Navbar } from "./layout/header";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === "home" && <Homepage />}
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "experience" && (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <p className="text-2xl text-slate-600">Experience page coming soon...</p>
        </div>
      )}
      {currentPage === "contact" && (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <p className="text-2xl text-slate-600">Contact page coming soon...</p>
        </div>
      )}
    </div>
  );
}