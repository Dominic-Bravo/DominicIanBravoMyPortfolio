import { HeroSection } from '../components/HeroSection';
import { SkillsSection } from '../components/SkillsSection';
import { AboutSection } from '../components/AboutSection';
import { CTASection } from '../components/CTASection';
import PortfolioChatBot from '../components/PortfolioChatBot';

// Homepage is the landing page for the portfolio.
// It includes hero content, featured skills, an about section, and a call-to-action.
export function Homepage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <PortfolioChatBot />
      <CTASection />
    </>
  );
}