import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Building2, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Professional Experience & Career History | Thimathi Dissanayake",
  description:
    "Professional background and career timeline of Thimathi Dissanayake: Software Engineer at CreativeX Technology, Data Engineering lead, and First-Class BSc (Hons) from University of Wolverhampton.",
  alternates: {
    canonical: "https://www.thimathi.online/experience",
  },
  openGraph: {
    type: "profile",
    title: "Professional Experience & Education — Thimathi Dissanayake",
    description:
      "Work history at CreativeX Technology, enterprise data pipelines, and educational credentials from University of Wolverhampton and CINEC Campus.",
    url: "https://www.thimathi.online/experience",
    images: [
      {
        url: "/thimathi-portrait.png",
        width: 1152,
        height: 1536,
        alt: "Thimathi Dissanayake Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Experience | Thimathi Dissanayake",
    description:
      "Software & Data Engineering career timeline and academic achievements.",
    images: ["/thimathi-portrait.png"],
  },
};

export default function ExperiencePage() {
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
        name: "Experience",
        item: "https://www.thimathi.online/experience",
      },
    ],
  };

  const experiencePageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": "https://www.thimathi.online/experience/#experiencepage",
    url: "https://www.thimathi.online/experience",
    name: "Professional Experience & Education Timeline",
    description:
      "Chronological employment history and academic qualifications of Thimathi Dissanayake.",
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
          __html: JSON.stringify(experiencePageSchema).replace(/</g, "\\u003c"),
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
                Experience
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9CB1AE] dark:text-[#9CB1AE] font-semibold">
              CAREER & ACADEMIC TRACK RECORD
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-4">
              Professional Experience & Education
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A comprehensive chronicle of commercial software engineering roles,
              enterprise data initiatives at CreativeX Technology, and academic
              distinction at the University of Wolverhampton.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education & Credentials Section */}
        <EducationSection />
      </main>

      <Footer />
    </div>
  );
}
