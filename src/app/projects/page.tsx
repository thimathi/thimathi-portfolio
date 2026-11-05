import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ExternalLink, Github, BookOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Software Engineering & AI Projects | Thimathi Dissanayake",
  description:
    "Explore production software engineering, AI architectures, and mobile applications engineered by Thimathi Dissanayake, including Baby Mine and Aurevia.",
  alternates: {
    canonical: "https://www.thimathi.online/projects",
  },
  openGraph: {
    type: "website",
    title: "Engineering Projects & Architecture — Thimathi Dissanayake",
    description:
      "Production-grade mobile apps, multimodal AI research systems, and cloud data architectures engineered by Thimathi Dissanayake.",
    url: "https://www.thimathi.online/projects",
    images: [
      {
        url: "/baby_mine.png",
        width: 1200,
        height: 630,
        alt: "Thimathi Dissanayake Software Engineering Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering Projects | Thimathi Dissanayake",
    description:
      "Production software applications, mobile platforms, and AI architectures by Thimathi Dissanayake.",
    images: ["/baby_mine.png"],
  },
};

export default function ProjectsPage() {
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
        name: "Projects",
        item: "https://www.thimathi.online/projects",
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.thimathi.online/projects/#collection",
    url: "https://www.thimathi.online/projects",
    name: "Engineering Projects & Architecture Portfolio",
    description:
      "Directory of production software, mobile applications, and AI systems engineered by Thimathi Dissanayake.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.thimathi.online/#website",
      name: "Thimathi Dissanayake Portfolio",
      url: "https://www.thimathi.online",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: portfolioData.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
        url: `https://www.thimathi.online/projects/${project.id}`,
      })),
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
          __html: JSON.stringify(collectionPageSchema).replace(/</g, "\\u003c"),
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
                Projects
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9CB1AE] dark:text-[#9CB1AE] font-semibold">
              ENGINEERING PORTFOLIO
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-4">
              Software Engineering & AI Projects
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Explore full-stack platforms, scalable cloud data architectures, and
              multimodal AI systems engineered by Thimathi Dissanayake. Each project
              represents rigorous engineering with verifiable results.
            </p>
          </div>
        </div>

        {/* Featured Case Study Deep-Dives Highlights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Baby Mine Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#9CB1AE]/15 text-[#9CB1AE] border border-[#9CB1AE]/30">
                    DEEP CASE STUDY
                  </span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    Maternal Health Platform
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  Baby Mine — Intelligent Maternal Healthcare
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Comprehensive pregnancy and child developmental tracking mobile platform
                  engineered with React Native, Supabase, and clinical-first safety workflows.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span>React Native</span> • <span>Supabase</span> • <span>PostgreSQL</span>
                </div>
                <Link
                  href="/projects/baby-mine"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Aurevia Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#9CB1AE]/15 text-[#9CB1AE] border border-[#9CB1AE]/30">
                    AI RESEARCH SPOTLIGHT
                  </span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    CIRS 2026 Presentation
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  Aurevia — Multimodal Affective AI
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Dual-stream emotion recognition pipeline combining fine-tuned BERT NLP
                  and audio Speech Emotion Recognition (SER) CNNs with late-fusion decision logic.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span>BERT NLP</span> • <span>Audio CNN</span> • <span>PyTorch</span>
                </div>
                <Link
                  href="/projects/aurevia"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Read Research Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Full Interactive Projects Grid */}
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
