import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Database, BookOpen, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About Thimathi Dissanayake | Software & Data Engineer Sri Lanka",
  description:
    "Learn about Thimathi Dissanayake: First-Class BSc (Hons) Computer Science graduate, Software Engineer at CreativeX Technology, and Lead AI Researcher for CIRS 2026.",
  alternates: {
    canonical: "https://www.thimathi.online/about",
  },
  openGraph: {
    type: "profile",
    title: "About Thimathi Dissanayake — Software Engineer & AI Researcher",
    description:
      "First-Class BSc (Hons) Computer Science graduate from University of Wolverhampton, Software & Data Engineer at CreativeX Technology, and Lead Author at CIRS 2026.",
    url: "https://www.thimathi.online/about",
    images: [
      {
        url: "/thimathi-portrait.png",
        width: 1152,
        height: 1536,
        alt: "Thimathi Dissanayake — Software Engineer & Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Thimathi Dissanayake | Software & Data Engineer",
    description:
      "First-Class BSc (Hons) Computer Science graduate, Software & Data Engineer at CreativeX Technology, and Lead AI Researcher at CIRS 2026.",
    images: ["/thimathi-portrait.png"],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.thimathi.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.thimathi.online/about",
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.thimathi.online/about/#aboutpage",
    url: "https://www.thimathi.online/about",
    name: "About Thimathi Dissanayake",
    description:
      "Professional biography, educational credentials, and engineering philosophy of Thimathi Dissanayake.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.thimathi.online/#website",
      name: "Thimathi Dissanayake Portfolio",
      url: "https://www.thimathi.online",
    },
    mainEntity: {
      "@type": "Person",
      "@id": "https://www.thimathi.online/#person",
      name: portfolioData.profile.name,
      jobTitle: [
        "Software Engineer",
        "Data Engineer",
        "Product Designer",
        "AI Researcher",
      ],
      alumniOf: "University of Wolverhampton",
      worksFor: "CreativeX Technology",
    },
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900">
      <Navbar />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900 dark:text-neutral-200 font-semibold">
                About
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9CB1AE] dark:text-[#9CB1AE] font-semibold">
              PROFESSIONAL BIOGRAPHY
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-4">
              About Thimathi Dissanayake
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Software Engineer, Data Engineer, and AI Researcher dedicated to
              architecting resilient distributed systems, enterprise data pipelines,
              and ethical affective computing algorithms.
            </p>
          </div>
        </div>

        {/* Core Profile & Pillars Section */}
        <AboutSection />

        {/* Skills & Technical Competencies */}
        <SkillsSection />

        {/* Education & Academic Rigor */}
        <EducationSection />

        {/* Sitelink Next Actions */}
        <section className="py-12 bg-neutral-50 dark:bg-neutral-900/40 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 font-mono">
              Explore Further
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/projects"
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <Code2 className="w-5 h-5 text-[#9CB1AE]" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white text-base mb-1">
                  Featured Projects
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Case studies for Baby Mine, Aurevia, and full-stack software applications.
                </p>
              </Link>

              <Link
                href="/research"
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <BookOpen className="w-5 h-5 text-[#9CB1AE]" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white text-base mb-1">
                  CIRS 2026 AI Research
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Multimodal affective computing, BERT NLP, and speech emotion recognition.
                </p>
              </Link>

              <Link
                href="/contact"
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <Mail className="w-5 h-5 text-[#9CB1AE]" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white text-base mb-1">
                  Get In Touch
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Discuss software development roles, data consulting, or research collaborations.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
