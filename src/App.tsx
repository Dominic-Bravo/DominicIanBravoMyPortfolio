import { SkillCard } from "./components/cardskills";
import SectionVariant from "./layout/section";
import { Homepage } from "./pages/homepage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-text-main dark:text-text-main-dark transition-colors">
      <Homepage />
      <section>
          <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard title="Frontend" skills={["React", "TypeScript", "Tailwind CSS", "Next.js"]} />
            <SkillCard title="Backend" skills={["Python", "Django", "FastAPI", "Redis"]} />
            <SkillCard title="Tools" skills={["Git", "Docker", "PostgreSQL", "uv"]} />
          </div>
        </section>
      <SectionVariant />
    </div>
  )
}