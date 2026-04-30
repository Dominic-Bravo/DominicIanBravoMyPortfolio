import { useState } from "react";
import { Homepage } from "./pages/homepage";
import { ProjectsPage } from "./pages/projectspage";
import { ExperiencePage } from "./pages/experiencepage";
import { ContactPage } from "./pages/contactpage";
import { Navbar } from "./layout/header";
import PortfolioChatBot from "./components/PortfolioChatBot";


export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === "home" && <Homepage />}
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "experience" && <ExperiencePage />}
      {currentPage === "contact" && <ContactPage />}
      <PortfolioChatBot />
    </div>
  );
}