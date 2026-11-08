import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { Footer } from "@/components/Footer";

// Code-split below-the-fold interactive client components to eliminate mobile TBT while keeping 100% SSR
const SkillsSection = dynamic(
  () => import("@/components/sections/SkillsSection").then((mod) => mod.SkillsSection),
  { ssr: true }
);
const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900">
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
        <FAQSection />
        <ContactSection />
      </main>

      {/* Full-Featured Footer */}
      <Footer />
    </div>
  );
}
