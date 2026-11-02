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
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ResearchSection() {
  const { research } = portfolioData;

  const getInterestIcon = (name: string) => {
    switch (name) {
      case "Layers":
        return <Layers className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />;
      case "Mic":
        return <Mic className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />;
      case "HeartPulse":
        return <HeartPulse className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />;
      default:
        return <Brain className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />;
    }
  };

  return (
    <section
      id="research"
      className="relative py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <span>ACADEMIC RESEARCH & AI PUBLICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14] font-display mb-4">
            Aurevia: Multimodal AI for Burnout Detection & Emotional Monitoring
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            Investigating affective computing frameworks by combining linguistic transformers and acoustic convolutional representations.
          </p>
        </div>

        {/* Lead Research Highlight Card */}
        <div className="rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 shadow-xs hover:shadow-sm transition-all duration-300 mb-14">
          
          {/* Paper Title & Status Strip */}
          <div className="pb-8 mb-8 border-b border-neutral-100 dark:border-neutral-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 p-1.5 shadow-2xs flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/aurevia.png"
                    alt="Aurevia Research Framework"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80 font-mono text-[10px] font-semibold uppercase tracking-wider">
                    {research.status}
                  </span>
                  <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Lead Author: <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">{research.leadAuthor}</strong>
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 sm:text-right">
                <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60">
                  VENUE // CIRS 2026
                </span>
              </div>
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-neutral-900 dark:text-neutral-50 leading-snug tracking-tight">
              &ldquo;{research.title}&rdquo;
            </h3>
          </div>

          {/* Research Overview Narrative */}
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
            {research.overview}
          </p>

          {/* Methodology Pillars / Accuracy Benchmark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            
            {/* BERT Text NLP */}
            <div className="p-5 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-neutral-500" />
                    <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase">
                      Text Modality (NLP)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-700/60 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-bold">
                    78% ACC
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {research.methodology.textProcessing}
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 pt-2 border-t border-neutral-200/40 dark:border-neutral-700/40">
                ARCHITECTURE // BERT TRANSFORMER
              </div>
            </div>

            {/* Speech Emotion CNN */}
            <div className="p-5 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-neutral-500" />
                    <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase">
                      Speech Modality (SER)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-700/60 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-bold">
                    83% ACC
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {research.methodology.speechProcessing}
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 pt-2 border-t border-neutral-200/40 dark:border-neutral-700/40">
                ARCHITECTURE // CNN MEL-SPECTROGRAMS
              </div>
            </div>

            {/* Multimodal Fusion */}
            <div className="p-5 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neutral-500" />
                    <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase">
                      Multimodal Fusion
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-700/60 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-bold">
                    85% ACC
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {research.methodology.multimodalFusion}
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 pt-2 border-t border-neutral-200/40 dark:border-neutral-700/40">
                INTEGRATION // LATE & INTERMEDIATE
              </div>
            </div>

          </div>

          {/* Research Datasets & External ResearchGate Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-100 dark:border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mr-1">
                EVALUATED DATASETS //
              </span>
              {research.methodology.datasets.map((dataset) => (
                <span
                  key={dataset}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 font-mono text-xs text-neutral-700 dark:text-neutral-300"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-medium text-xs tracking-wide transition-colors shadow-2xs"
              >
                <span>Read on ResearchGate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={research.researchGateProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-800 dark:text-neutral-200 text-xs font-medium transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
                <span>Author Profile</span>
              </a>
            </div>
          </div>

          {/* Responsible Ethical Boundary / Clinical Scope Note */}
          <div className="mt-6 p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {research.disclaimer}
            </p>
          </div>
        </div>

        {/* Broader Research Interests Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold block mb-1">
                RESEARCH VECTORS //
              </span>
              <h3 className="font-bold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
                Four Core Investigation Interests
              </h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm">
              Long-term academic and applied research focus areas across multimodal deep learning and affective computing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {research.interests.map((interest, idx) => (
              <div
                key={interest.title}
                className="p-5 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-neutral-100 dark:border-neutral-800/80">
                    <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-semibold">
                      VECTOR 0{idx + 1} //
                    </span>
                    <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      {getInterestIcon(interest.icon)}
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
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
