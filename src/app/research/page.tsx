import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, Cpu, Layers, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "AI Research & Publications | Thimathi Dissanayake · CIRS 2026",
  description:
    "Explore academic AI research by Thimathi Dissanayake on multimodal affective computing, speech emotion recognition (SER), and BERT sentiment analysis presented at CIRS 2026.",
  alternates: {
    canonical: "https://www.thimathi.online/research",
  },
  openGraph: {
    type: "article",
    title: "Aurevia: Multimodal AI & Emotion Research — Thimathi Dissanayake",
    description:
      "Peer-reviewed academic research on multimodal affective computing combining fine-tuned BERT NLP and 1D/2D CNN audio emotion recognition presented at CIRS 2026.",
    url: "https://www.thimathi.online/research",
    images: [
      {
        url: "/aurevia.png",
        width: 1200,
        height: 630,
        alt: "Aurevia AI Research — Thimathi Dissanayake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Research & Publications | Thimathi Dissanayake",
    description:
      "Multimodal affective computing and speech emotion recognition research presented at CIRS 2026.",
    images: ["/aurevia.png"],
  },
};

export default function ResearchPage() {
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
        name: "Research",
        item: "https://www.thimathi.online/research",
      },
    ],
  };

  const scholarlyArticleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": "https://www.thimathi.online/research/#article",
    headline:
      "Aurevia: Multimodal Affective Computing via Dual-Stream NLP & Speech Emotion Recognition",
    name: "Aurevia Affective AI Research",
    description:
      "Academic research on multimodal emotion recognition combining fine-tuned BERT NLP and audio Speech Emotion Recognition CNNs with late-fusion classification.",
    author: {
      "@type": "Person",
      "@id": "https://www.thimathi.online/#person",
      name: portfolioData.profile.name,
      url: "https://www.thimathi.online",
    },
    publisher: {
      "@type": "Organization",
      name: "CIRS 2026 Research Conference",
    },
    url: "https://www.thimathi.online/research",
    sameAs: "https://www.researchgate.net/profile/Thimathi-Dissanayake",
    about: [
      "Artificial Intelligence",
      "Affective Computing",
      "Speech Emotion Recognition",
      "Natural Language Processing",
      "Deep Learning",
    ],
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
          __html: JSON.stringify(scholarlyArticleSchema).replace(/</g, "\\u003c"),
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
                Research
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9CB1AE] dark:text-[#9CB1AE] font-semibold">
              ACADEMIC RESEARCH & PUBLICATIONS
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-4">
              Aurevia: Multimodal AI & Emotion Research
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Investigating affective computing through dual-stream neural architectures.
              Authored by Thimathi Dissanayake and scheduled for presentation at the
              International Conference on Computing and Information Research Systems (CIRS 2026).
            </p>
          </div>
        </div>

        {/* Quick Links & Paper Access Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Peer-Reviewed Preprint & Code
              </p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-0.5">
                Available on ResearchGate & GitHub
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 text-xs font-medium text-neutral-900 dark:text-white hover:border-[#9CB1AE] transition-all shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#9CB1AE]" />
                <span>ResearchGate Profile</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              <Link
                href="/projects/aurevia"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-xs font-medium text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Core Research Presentation Component */}
        <ResearchSection />

        {/* Scientific Ethics & Clinical Disclaimer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-neutral-800 dark:text-neutral-200 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-neutral-900 dark:text-white mb-1">
                Scientific Research Disclaimer
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Aurevia is an experimental academic research prototype designed to explore
                algorithmic emotion recognition through benchmark speech (RAVDESS, TESS) and text datasets.
                It is not a medical device and is not intended for clinical diagnostics or mental health assessment.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

