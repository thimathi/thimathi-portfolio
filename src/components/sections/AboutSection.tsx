"use client";

import React from "react";
import {
  Code2,
  Database,
  Cpu,
  Layout,
  Check,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const { aboutPillars } = portfolioData;

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-racing-red" />;
      case "Database":
        return <Database className="w-5 h-5 text-racing-red" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-racing-red" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-racing-red" />;
      default:
        return <Code2 className="w-5 h-5 text-racing-red" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
          <span className="w-2 h-2 bg-racing-red rounded-xs" />
          <span>SECTOR 02 // PROFILE & MULTIDISCIPLINARY BACKGROUND</span>
        </div>

        {/* Section Headline */}
        <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground tracking-tight max-w-3xl mb-12">
          Bridging software engineering, enterprise data pipelines, and intelligent interfaces.
        </h2>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-foreground/90 text-sm sm:text-base leading-relaxed">
            <p>
              I am a technology professional working across{" "}
              <strong className="text-foreground font-semibold">
                software engineering, data engineering, product design, and artificial intelligence research
              </strong>
              . My focus is on building practical, scalable digital solutions that integrate reliable system architecture, useful data pipelines, and thoughtful user experiences.
            </p>
            <p className="text-muted leading-relaxed">
              In production environments, I manage relational and cloud datasets across PostgreSQL, MySQL, Snowflake, and cloud infrastructure, building automated reporting workflows, statistical models, and reliable schema transformations.
            </p>
            <p className="text-muted leading-relaxed">
              Alongside backend and data engineering, my academic research investigates affective computing and multimodal machine learning—exploring how textual transformer representations (BERT) and acoustic speech emotion models (CNNs) can be fused to detect burnout-related indicators responsibly.
            </p>

            {/* Verified Academic & Professional Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 bg-surface border border-surface-border rounded-xs flex items-center gap-3">
                <div className="w-5 h-5 rounded-xs bg-racing-red-soft flex items-center justify-center flex-shrink-0 text-racing-red">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-medium text-foreground">
                  First-Class Honours (72%) — UoW
                </span>
              </div>

              <div className="p-3 bg-surface border border-surface-border rounded-xs flex items-center gap-3">
                <div className="w-5 h-5 rounded-xs bg-racing-red-soft flex items-center justify-center flex-shrink-0 text-racing-red">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-medium text-foreground">
                  Lead Author: CIRS 2026 Research
                </span>
              </div>

              <div className="p-3 bg-surface border border-surface-border rounded-xs flex items-center gap-3">
                <div className="w-5 h-5 rounded-xs bg-racing-red-soft flex items-center justify-center flex-shrink-0 text-racing-red">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-medium text-foreground">
                  Data Engineer @ CreativeX Technology
                </span>
              </div>

              <div className="p-3 bg-surface border border-surface-border rounded-xs flex items-center gap-3">
                <div className="w-5 h-5 rounded-xs bg-racing-red-soft flex items-center justify-center flex-shrink-0 text-racing-red">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-medium text-foreground">
                  Product Designer @ NONO AI
                </span>
              </div>
            </div>
          </div>

          {/* Core Technical Philosophy Card (5 cols) */}
          <div className="lg:col-span-5 bg-surface border border-surface-border rounded-xs p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-border font-mono text-xs">
              <span className="font-semibold text-foreground uppercase tracking-wider">
                CORE TECHNICAL PHILOSOPHY
              </span>
              <span className="text-racing-red font-mono">CODE // PRINCIPLES</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 bg-surface-raised border-l-2 border-racing-red rounded-xs">
                <span className="font-mono text-xs font-semibold text-foreground block mb-1 uppercase tracking-wide">
                  01 // Reliable Systems Over Complexity
                </span>
                <p className="text-muted leading-relaxed">
                  Prioritizing clean schema models, automated checks, and type-safety to eliminate runtime fragility.
                </p>
              </div>

              <div className="p-3.5 bg-surface-raised border-l-2 border-racing-red rounded-xs">
                <span className="font-mono text-xs font-semibold text-foreground block mb-1 uppercase tracking-wide">
                  02 // Evidence-Based Data Engineering
                </span>
                <p className="text-muted leading-relaxed">
                  Extracting, validating, and translating enterprise metrics into actionable data schemas that support high-stakes decisions.
                </p>
              </div>

              <div className="p-3.5 bg-surface-raised border-l-2 border-racing-red rounded-xs">
                <span className="font-mono text-xs font-semibold text-foreground block mb-1 uppercase tracking-wide">
                  03 // Ethical, Multimodal AI
                </span>
                <p className="text-muted leading-relaxed">
                  Investigating affective computing with rigor, acknowledging boundaries between emotional modeling and clinical diagnoses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Matrix */}
        <div className="pt-8 border-t border-surface-border">
          <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-6">
            CAPABILITY DOMAINS // 4 CORE PILLARS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 bg-surface border border-surface-border hover:border-racing-red/60 transition-colors rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-surface-border/60">
                    <span className="font-mono text-[10px] text-muted-foreground font-semibold">
                      // PILLAR 0{idx + 1}
                    </span>
                    <div className="p-1.5 rounded-xs bg-surface-raised">
                      {getPillarIcon(pillar.icon)}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
