import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  BookOpen,
  Layers,
  Cpu,
  Server,
  Database,
  CheckCircle2,
  ShieldAlert,
  Calendar,
  Sparkles,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} — ${project.subtitle || project.category} | Thimathi Dissanayake`;
  const description = project.description;
  const url = `https://www.thimathi.online/projects/${project.id}`;
  const ogImage = project.image || "/thimathi-portrait.png";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioData.projects.filter((p) => p.id !== project.id);

  // Generate Project-Specific Schema
  const projectSchema =
    project.id === "aurevia"
      ? {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "@id": `https://www.thimathi.online/projects/aurevia/#article`,
          headline: project.title + ": " + (project.subtitle || ""),
          name: project.title,
          description: project.description,
          image: `https://www.thimathi.online${project.image}`,
          url: `https://www.thimathi.online/projects/aurevia`,
          author: {
            "@type": "Person",
            name: "Thimathi Dissanayake",
            url: "https://www.thimathi.online",
          },
          publisher: {
            "@type": "Organization",
            name: "CINEC Campus — 7th CINEC International Research Symposium (CIRS 2026)",
            url: "https://www.cinec.edu/",
          },
          sameAs: project.paperLink ? [project.paperLink] : [],
        }
      : {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": `https://www.thimathi.online/projects/${project.id}/#software`,
          name: project.title,
          description: project.description,
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS, Android, Web",
          image: `https://www.thimathi.online${project.image}`,
          url: `https://www.thimathi.online/projects/${project.id}`,
          author: {
            "@type": "Person",
            name: "Thimathi Dissanayake",
            url: "https://www.thimathi.online",
          },
        };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900">
      <Navbar />

      {/* Structured Data for Crawler & Rich Search Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main className="flex-1 pt-24 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <li>
                <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900 dark:text-neutral-200 font-semibold">{project.title}</li>
            </ol>
          </nav>

          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors py-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO MAIN PORTFOLIO</span>
            </Link>
          </div>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B7266]/10 text-[#2B544B] dark:text-[#6CB0A2] font-mono text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>{project.badge}</span>
                </span>
              )}
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4 leading-[1.12]">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {project.subtitle}
              </p>
            )}
          </header>

          {/* Project Featured Image */}
          {project.image && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 mb-12 shadow-sm">
              <Image
                src={project.image}
                alt={`${project.title} — Architecture & Technical Implementation`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          )}

          {/* Technology Badges */}
          <div className="mb-12 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Technologies & Infrastructure
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 text-xs font-medium border border-neutral-200/70 dark:border-neutral-700/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Executive Overview */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
              Executive Technical Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed font-light space-y-4">
              <p className="text-base sm:text-lg">{project.description}</p>
              {project.longDescription && (
                <p className="text-base sm:text-lg">{project.longDescription}</p>
              )}
            </div>
          </section>

          {/* System Architecture */}
          {project.architecture && (
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
                System Architecture & Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.architecture.frontend && (
                  <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60">
                    <div className="flex items-center gap-2 mb-3 text-neutral-900 dark:text-neutral-100 font-semibold text-sm">
                      <Layers className="w-4 h-4 text-[#3B7266] dark:text-[#52998B]" />
                      <span>Frontend & Interface Layer</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {project.architecture.frontend.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.backend && (
                  <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60">
                    <div className="flex items-center gap-2 mb-3 text-neutral-900 dark:text-neutral-100 font-semibold text-sm">
                      <Server className="w-4 h-4 text-[#3B7266] dark:text-[#52998B]" />
                      <span>Backend & Microservices</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {project.architecture.backend.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.aiMl && (
                  <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60">
                    <div className="flex items-center gap-2 mb-3 text-neutral-900 dark:text-neutral-100 font-semibold text-sm">
                      <Cpu className="w-4 h-4 text-[#3B7266] dark:text-[#52998B]" />
                      <span>AI & Machine Learning Pipeline</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {project.architecture.aiMl.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.devops && (
                  <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60">
                    <div className="flex items-center gap-2 mb-3 text-neutral-900 dark:text-neutral-100 font-semibold text-sm">
                      <Database className="w-4 h-4 text-[#3B7266] dark:text-[#52998B]" />
                      <span>Data Ingestion & DevOps Pipelines</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {project.architecture.devops.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Key Feature Groups */}
          {project.featureGroups && project.featureGroups.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
                Technical Highlights & Feature Groups
              </h2>
              <div className="space-y-6">
                {project.featureGroups.map((group, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40"
                  >
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                      {group.groupName}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-[#3B7266] dark:text-[#52998B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Research Disclaimer & Scope (Mandatory for Academic Integrity) */}
          {project.notes && (
            <div className="mb-12 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5 text-neutral-900 dark:text-neutral-100">
                  Technical & Research Scope
                </strong>
                <span>{project.notes}</span>
              </div>
            </div>
          )}

          {/* External Links & Verification */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 mb-16">
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span>{project.id === "aurevia" ? "ResearchGate Publication" : "Verified Product Post"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.paperLink && (
              <a
                href={project.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Research Paper</span>
              </a>
            )}

            {(project as Project).githubLink && (
              <a
                href={(project as Project).githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          {/* Related Case Studies Navigation */}
          {otherProjects.length > 0 && (
            <div className="pt-10 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
                Other Engineering Case Studies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherProjects.map((other) => (
                  <Link
                    key={other.id}
                    href={`/projects/${other.id}`}
                    className="group p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all bg-white dark:bg-neutral-900/40"
                  >
                    <span className="text-[11px] font-mono text-[#3B7266] dark:text-[#52998B] block mb-1">
                      {other.category}
                    </span>
                    <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 group-hover:text-[#3B7266] dark:group-hover:text-[#52998B] transition-colors flex items-center justify-between">
                      <span>{other.title}</span>
                      <span className="text-xs font-mono">→</span>
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
