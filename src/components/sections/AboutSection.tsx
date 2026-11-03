"use client";

import React from "react";
import {
  Code2,
  Database,
  Cpu,
  Layout,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const { aboutPillars } = portfolioData;

  const credentials = [
    {
      badge: "ACADEMIC EXCELLENCE",
      title: "First-Class Honours (72%)",
      subtitle: "BSc (Hons) Computer Science · University of Wolverhampton",
      icon: GraduationCap,
    },
    {
      badge: "RESEARCH AUTHORITY",
      title: "Lead Author: CIRS 2026",
      subtitle: "Multimodal AI & Speech Affective Modeling (BERT + CNN)",
      icon: BookOpen,
    },
    {
      badge: "DATA INFRASTRUCTURE",
      title: "Data Engineer",
      subtitle: "CreativeX Technology · Enterprise Cloud ETL & Snowflake",
      icon: Database,
    },
    {
      badge: "PRODUCT & SYSTEMS",
      title: "Product Designer",
      subtitle: "NONO AI · Human-Centered Design Systems & Interactive UI",
      icon: Layout,
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Reliable Systems Over Complexity",
      description:
        "Prioritizing clean schema models, automated sanity checks, and strict type-safety to eliminate runtime fragility before deployment.",
      tag: "ARCHITECTURE",
    },
    {
      number: "02",
      title: "Evidence-Based Data Engineering",
      description:
        "Extracting, validating, and translating enterprise telemetry into actionable data schemas that support mission-critical decisions.",
      tag: "DATAFLOW",
    },
    {
      number: "03",
      title: "Ethical, Multimodal AI",
      description:
        "Investigating affective computing with scientific rigor, acknowledging boundaries between emotional modeling and clinical diagnoses.",
      tag: "ETHICS & ML",
    },
  ];

  const pillarTech: Record<string, string[]> = {
    "Software & Mobile Engineering": ["React", "Next.js", "TypeScript", "React Native"],
    "Data Engineering & Analytics": ["PostgreSQL", "Snowflake", "Python", "ETL Pipelines"],
    "Multimodal AI & NLP Research": ["BERT NLP", "Speech CNNs", "PyTorch", "Affective AI"],
    "Product Design & UX Systems": ["Figma", "Design Systems", "Prototyping", "UX Strategy"],
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-[#3B7266] dark:text-[#52998B]" />;
      case "Database":
        return <Database className="w-5 h-5 text-[#3B7266] dark:text-[#52998B]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#3B7266] dark:text-[#52998B]" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-[#3B7266] dark:text-[#52998B]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#3B7266] dark:text-[#52998B]" />;
    }
  };

  return (
    <section
      id="about"
      className="relative pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <span>PROFILE & MULTIDISCIPLINARY BACKGROUND</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14]">
            Bridging software engineering, enterprise data pipelines, and intelligent interfaces.
          </h2>
        </div>

        {/* 1. Verified Core Credentials Row (4 High-Impact Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 sm:mb-16">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.title}
                className="group p-5 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#3B7266]/50 dark:hover:border-[#52998B]/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[#3B7266] dark:text-[#52998B]">
                      {cred.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#3B7266]/10 dark:bg-[#3B7266]/20 flex items-center justify-center text-[#3B7266] dark:text-[#52998B] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 mb-1">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {cred.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Main Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          
          {/* Left Column: Narrative Dossier & Stack (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Lead Narrative Callout */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-4">
              <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                I am a technology professional operating across{" "}
                <span className="text-neutral-950 dark:text-white font-semibold underline decoration-[#3B7266]/40 underline-offset-4">
                  software engineering, data engineering, product design, and artificial intelligence research
                </span>
                . My core mission is engineering scalable digital solutions that fuse resilient architecture with intuitive human experiences.
              </p>

              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3B7266]/10 dark:bg-[#3B7266]/20 flex items-center justify-center text-[#3B7266] dark:text-[#52998B] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p>
                    <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">Production Cloud & Enterprise Data:</strong>{" "}
                    Managing production datasets across PostgreSQL, MySQL, and Snowflake — deploying automated ETL reporting pipelines, schema transformations, and statistical checks that eliminate runtime fragility.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3B7266]/10 dark:bg-[#3B7266]/20 flex items-center justify-center text-[#3B7266] dark:text-[#52998B] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p>
                    <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">Multimodal AI & Affective Research:</strong>{" "}
                    Published lead author at CIRS 2026 investigating affective computing — fusing textual transformer representations (BERT) with acoustic speech emotion models (CNNs) to detect cognitive burnout indicators ethically.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Core Capabilities Pills */}
            <div className="p-5 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-3">
                PRIMARY TOOLCHAIN & TECHNOLOGIES //
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "TypeScript",
                  "React / Next.js",
                  "Python",
                  "PostgreSQL",
                  "Snowflake",
                  "BERT & PyTorch",
                  "Speech CNNs",
                  "Tailwind CSS",
                  "Figma Systems",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Core Technical Philosophy (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100 dark:border-neutral-800">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#3B7266] dark:text-[#52998B] font-semibold block">
                  FOUNDATIONAL CODE //
                </span>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                  Core Technical Philosophy
                </h3>
              </div>
              <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
                <Terminal className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-3.5">
              {principles.map((p) => (
                <div
                  key={p.number}
                  className="group p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60 hover:border-[#3B7266]/40 dark:hover:border-[#52998B]/40 hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs font-bold text-[#3B7266] dark:text-[#52998B] flex-shrink-0">
                        {p.number} //
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wide leading-snug">
                        {p.title}
                      </h4>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-5 border-l-2 border-[#3B7266]/30 dark:border-[#52998B]/30 group-hover:border-[#3B7266] transition-colors">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Capability Domains // 4 Core Pillars */}
        <div className="pt-10 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#3B7266] dark:text-[#52998B] font-semibold block mb-1">
                MULTIDISCIPLINARY SPECTRUM //
              </span>
              <h3 className="font-bold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
                Four Core Capability Domains
              </h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm">
              Integrated technical capabilities spanning user experience, cloud infrastructure, and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#3B7266]/50 dark:hover:border-[#52998B]/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                    <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-semibold tracking-wider">
                      DOMAIN 0{idx + 1} //
                    </span>
                    <div className="p-2 rounded-xl bg-[#3B7266]/10 dark:bg-[#3B7266]/20 group-hover:scale-110 transition-transform">
                      {getPillarIcon(pillar.icon)}
                    </div>
                  </div>

                  <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-[#3B7266] dark:group-hover:text-[#52998B] transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                {/* Tech Tags for Each Pillar */}
                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                  {(pillarTech[pillar.title] || []).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
