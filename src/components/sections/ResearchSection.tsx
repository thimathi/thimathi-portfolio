"use client";

import React from "react";
import Image from "next/image";
import {
  BookOpen,
  ExternalLink,
  Layers,
  MessageSquare,
  Mic,
  HeartPulse,
  Brain,
  ShieldAlert,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ResearchSection() {
  const { research } = portfolioData;

  const getInterestIcon = (name: string) => {
    switch (name) {
      case "Layers":
        return <Layers className="w-4 h-4 text-racing-red" />;
      case "MessageSquare":
        return <MessageSquare className="w-4 h-4 text-racing-red" />;
      case "Mic":
        return <Mic className="w-4 h-4 text-racing-red" />;
      case "HeartPulse":
        return <HeartPulse className="w-4 h-4 text-racing-red" />;
      default:
        return <Brain className="w-4 h-4 text-racing-red" />;
    }
  };

  return (
    <section id="research" className="py-20 sm:py-24 border-b border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
          <span className="w-2 h-2 bg-racing-red rounded-xs" />
          <span>SECTOR 05 // APPLIED AI RESEARCH & AFFECTIVE COMPUTING</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground tracking-tight mb-3">
            Aurevia: Multimodal AI for Burnout Detection & Emotional Monitoring
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Investigating affective computing frameworks by combining linguistic transformers and acoustic convolutional representations.
          </p>
        </div>

        {/* Lead Research Highlight Card */}
        <div className="bg-surface border border-surface-border rounded-xs p-6 sm:p-9 shadow-sm mb-12">
          {/* Paper Title & Status */}
          <div className="pb-6 mb-6 border-b border-surface-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xs overflow-hidden bg-surface-muted border border-surface-border p-1 shadow-sm flex-shrink-0">
                  <Image
                    src="/aurevia.png"
                    alt="Aurevia Research Framework"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-xs bg-racing-red-soft text-racing-red border border-racing-red/20 font-mono text-[10px] font-semibold uppercase tracking-wider">
                    {research.status}
                  </span>
                  <div className="font-mono text-[11px] text-muted-foreground mt-1">
                    Lead Author: {research.leadAuthor}
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-muted-foreground">
                VENUE // CIRS 2026
              </div>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground leading-snug">
              &ldquo;{research.title}&rdquo;
            </h3>
          </div>

          {/* Overview */}
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-8">
            {research.overview}
          </p>

          {/* Methodology Pillars / Accuracy Telemetry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* BERT Text NLP */}
            <div className="p-4 bg-surface-raised border border-surface-border rounded-xs">
              <div className="flex items-center justify-between mb-2 font-mono text-xs">
                <span className="font-semibold text-foreground uppercase">
                  Text Modality (NLP)
                </span>
                <span className="px-1.5 py-0.5 rounded-xs bg-surface border border-surface-border text-racing-red font-bold">
                  78% ACC
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {research.methodology.textProcessing}
              </p>
              <div className="font-mono text-[10px] text-muted-foreground">
                ARCHITECTURE // BERT TRANSFORMER
              </div>
            </div>

            {/* Speech Emotion CNN */}
            <div className="p-4 bg-surface-raised border border-surface-border rounded-xs">
              <div className="flex items-center justify-between mb-2 font-mono text-xs">
                <span className="font-semibold text-foreground uppercase">
                  Speech Modality (SER)
                </span>
                <span className="px-1.5 py-0.5 rounded-xs bg-surface border border-surface-border text-racing-red font-bold">
                  83% ACC
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {research.methodology.speechProcessing}
              </p>
              <div className="font-mono text-[10px] text-muted-foreground">
                ARCHITECTURE // CNN MEL-SPECTROGRAMS
              </div>
            </div>

            {/* Multimodal Fusion */}
            <div className="p-4 bg-surface-raised border border-surface-border rounded-xs">
              <div className="flex items-center justify-between mb-2 font-mono text-xs">
                <span className="font-semibold text-foreground uppercase">
                  Multimodal Fusion
                </span>
                <span className="px-1.5 py-0.5 rounded-xs bg-surface border border-surface-border text-racing-red font-bold">
                  85% ACC
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {research.methodology.multimodalFusion}
              </p>
              <div className="font-mono text-[10px] text-muted-foreground">
                INTEGRATION // LATE & INTERMEDIATE
              </div>
            </div>
          </div>

          {/* Research Datasets & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-surface-border">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mr-1">
                EVALUATED DATASETS:
              </span>
              {research.methodology.datasets.map((dataset) => (
                <span
                  key={dataset}
                  className="px-2 py-0.5 rounded-xs bg-surface-muted border border-surface-border font-mono text-[11px] text-foreground"
                >
                  {dataset}
                </span>
              ))}
            </div>

            {/* Direct Research Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={research.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs bg-foreground text-background hover:bg-racing-red hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Read on ResearchGate</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={research.researchGateProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border text-foreground font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <BookOpen className="w-3 h-3 text-racing-red" />
                <span>Author Profile</span>
              </a>
            </div>
          </div>

          {/* Responsible Ethical Boundary / Clinical Scope Note */}
          <div className="mt-6 p-4 rounded-xs bg-surface-muted border border-surface-border flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-racing-red flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              {research.disclaimer}
            </p>
          </div>
        </div>

        {/* Broader Research Interests Grid */}
        <div>
          <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-5">
            INVESTIGATION VECTORS // 4 CORE RESEARCH INTERESTS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {research.interests.map((interest, idx) => (
              <div
                key={interest.title}
                className="p-5 bg-surface border border-surface-border hover:border-racing-red/60 transition-colors rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-surface-border/60">
                    <span className="font-mono text-[10px] text-muted-foreground font-semibold">
                      // RES 0{idx + 1}
                    </span>
                    <div className="p-1 rounded-xs bg-surface-raised">
                      {getInterestIcon(interest.icon)}
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {interest.description}
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
