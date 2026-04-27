import { HeroSection } from '../components/HeroSection';
import { SkillsSection } from '../components/SkillsSection';
import { CTASection } from '../components/CTASection';

// Homepage is the landing page for the portfolio.
// It includes hero content, featured skills, an about section, and a call-to-action.
export function Homepage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <CTASection />
    </>
  );
}