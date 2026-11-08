import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Database, Wrench, Layers } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkillsSection } from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Technical Skills & Engineering Stack | Thimathi Dissanayake",
  description:
    "Comprehensive technical skill matrix and engineering stack of Thimathi Dissanayake: Full-Stack Development, Artificial Intelligence, Machine Learning, Data Engineering, and UI/UX Systems.",
  alternates: {
    canonical: "https://www.thimathi.online/skills",
  },
  openGraph: {
    type: "website",
    title: "Technical Skills & Engineering Stack — Thimathi Dissanayake",
    description:
      "Explore the verified technical proficiencies, frameworks, programming languages, and cloud tools mastered by Thimathi Dissanayake.",
    url: "https://www.thimathi.online/skills",
    images: [
      {
        url: "/thimathi-portrait.png",
        width: 1152,
        height: 1536,
        alt: "Thimathi Dissanayake Technical Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills & Architecture | Thimathi Dissanayake",
    description:
      "Frontend, Backend, AI & Machine Learning, Data & Cloud tools.",
    images: ["/thimathi-portrait.png"],
  },
};

export default function SkillsPage() {
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
        name: "Skills",
        item: "https://www.thimathi.online/skills",
      },
    ],
  };

  const skillsPageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": "https://www.thimathi.online/skills/#skillspage",
    url: "https://www.thimathi.online/skills",
    name: "Technical Skills & Engineering Competencies",
    description:
      "Verified engineering capabilities, languages, frameworks, and architecture tools of Thimathi Dissanayake.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.thimathi.online/#website",
    },
    about: {
      "@id": "https://www.thimathi.online/#person",
    },
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900">
      {/* Schema.org Breadcrumbs & Page Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Top Navbar */}
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Breadcrumb Navigation Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-semibold">SKILLS & ARCHITECTURE</span>
          </nav>
        </div>

        {/* Primary Skills Component */}
        <SkillsSection />

        {/* Cross-Link Callout to Projects and Experience */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/projects"
              className="p-8 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">PROJECT APPLICATIONS</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-900 dark:group-hover:text-white transition-all" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-100 mb-2">
                Explore Project Case Studies
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                See these skills deployed across live healthcare systems, mobile apps, and machine learning models.
              </p>
            </Link>

            <Link
              href="/experience"
              className="p-8 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">CAREER TIMELINE</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-900 dark:group-hover:text-white transition-all" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-100 mb-2">
                Work Experience & Employment
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Review software and data engineering roles held at CreativeX Technology and client delivery teams.
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

