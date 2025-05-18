
import NavBar from '@/components/custom/nav-bar';
import HeroSection from '@/components/custom/hero-section';
import AboutMeSection from '@/components/custom/about-me-section';
import YouTubeVideoPlaceholder from '@/components/custom/youtube-video-placeholder';
import SkillsSection from '@/components/custom/skills-section';
import ProjectsSection from '@/components/custom/projects-section';
import ExperienceSection from '@/components/custom/experience-section';
import AchievementsSection from '@/components/custom/achievements-section';
import ContactSection from '@/components/custom/contact-section';
import Footer from '@/components/custom/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <AboutMeSection />
        <YouTubeVideoPlaceholder />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
