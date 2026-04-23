import SectionVariant from "./layout/section";
import { Homepage } from "./pages/homepage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-text-main dark:text-text-main-dark transition-colors">
      <Homepage />
      <SectionVariant />
    </div>
  )
}