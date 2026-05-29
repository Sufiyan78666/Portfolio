import Preloader from "../components/Preloader";
import CursorGlow from "../components/CursorGlow";
import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrainSection from "../components/BrainSection";

// import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import MajorProjectsSection from "../components/MajorProjectsSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import TerminalPortfolio from "../components/TerminalPortfolio";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-blue-500/30">
      <Preloader />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <ExperienceSection />
      <MajorProjectsSection />
      <SkillsSection />
      <EducationSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
      <TerminalPortfolio />
    </main>
  );
}
