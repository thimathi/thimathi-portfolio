import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Single-Page Portfolio Content */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Full-Featured Footer */}
      <Footer />
    </div>
  );
}
