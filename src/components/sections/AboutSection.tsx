"use client";

import React from "react";
import {
  Code2,
  Database,
  Cpu,
  Layout,
  Server,
  Layers,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const { aboutPillars } = portfolioData;

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case "Database":
        return <Database className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-teal-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="ambient-glow bg-cyan-600/10 w-[400px] h-[400px] top-1/4 -left-20" />
      <div className="ambient-glow bg-blue-600/10 w-[400px] h-[400px] bottom-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multidisciplinary Background</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white dark:text-white light:text-slate-900 tracking-tight">
            Bridging software engineering, enterprise data pipelines, and intelligent interfaces.
          </h2>
        </div>

        {/* Narrative & High-Level Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              I am a technology professional working across{" "}
              <strong className="text-white dark:text-white light:text-slate-900 font-semibold">
                software engineering, data engineering, product design, and artificial intelligence research
              </strong>
              . My focus is on building practical, scalable digital solutions that integrate reliable system architecture, useful data pipelines, and thoughtful user experiences.
            </p>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600">
              In production environments, I manage relational and cloud datasets across PostgreSQL, MySQL, Snowflake, and cloud infrastructure, building automated reporting workflows, statistical models, and reliable schema transformations.
            </p>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600">
              Alongside backend and data engineering, my academic research investigates affective computing and multimodal machine learning—exploring how textual transformer representations (BERT) and acoustic speech emotion models (CNNs) can be fused to detect burnout-related indicators responsibly.
            </p>

            {/* Verified Academic & Professional Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                  First-Class Honours (72%) — UoW
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                  Lead Author: CIRS 2026 Academic Research
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                  Data Engineer @ CreativeX Technology
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                  Product Designer @ NONO AI
                </span>
              </div>
            </div>
          </div>

          {/* Quick Technical Summary Card (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0d121f] dark:bg-[#0d121f] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl">
            <h3 className="font-display font-semibold text-lg text-white dark:text-white light:text-slate-900 mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" />
              <span>Core Technical Philosophy</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
              <div className="p-3.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] dark:border-white/[0.05] light:border-slate-200">
                <span className="font-semibold text-cyan-300 dark:text-cyan-300 light:text-cyan-600 block mb-1">
                  1. Reliable Systems Over Complexity
                </span>
                Prioritizing clean schema models, automated checks, and type-safety to eliminate runtime fragility.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] dark:border-white/[0.05] light:border-slate-200">
                <span className="font-semibold text-blue-300 dark:text-blue-300 light:text-blue-600 block mb-1">
                  2. Evidence-Based Data Engineering
                </span>
                Extracting, validating, and translating enterprise metrics into actionable data schemas that support high-stakes decisions.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] dark:border-white/[0.05] light:border-slate-200">
                <span className="font-semibold text-indigo-300 dark:text-indigo-300 light:text-indigo-600 block mb-1">
                  3. Ethical, Multimodal AI
                </span>
                Investigating affective computing with rigor, acknowledging boundaries between emotional modeling and clinical diagnoses.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-[#0f1422] dark:bg-[#0f1422] light:bg-white border border-white/[0.07] dark:border-white/[0.07] light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 group shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getPillarIcon(pillar.icon)}
              </div>
              <h3 className="font-display font-semibold text-lg text-white dark:text-white light:text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
