"use client";

import React from "react";
import {
  Brain,
  BookOpen,
  ExternalLink,
  Layers,
  MessageSquare,
  Mic,
  HeartPulse,
  Cpu,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Network,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ResearchSection() {
  const { research } = portfolioData;

  const getInterestIcon = (name: string) => {
    switch (name) {
      case "Layers":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case "Mic":
        return <Mic className="w-5 h-5 text-indigo-400" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-teal-400" />;
      default:
        return <Brain className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-indigo-600/15 w-[500px] h-[500px] top-1/3 -left-20" />
      <div className="ambient-glow bg-cyan-600/10 w-[500px] h-[500px] bottom-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Applied AI & Affective Computing Research</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Aurevia: Multimodal AI for Burnout Detection & Emotional Monitoring
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Investigating affective computing frameworks by combining linguistic transformers and acoustic convolutional representations.
          </p>
        </div>

        {/* Lead Research Highlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1424] dark:bg-[#0e1424] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-2xl mb-12">
          {/* Paper Title & Status */}
          <div className="pb-6 mb-6 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 text-xs font-semibold">
                {research.status}
              </span>
              <span className="text-xs font-medium text-slate-400">
                Lead Author: {research.leadAuthor}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white dark:text-white light:text-slate-900 leading-snug">
              &ldquo;{research.title}&rdquo;
            </h3>
          </div>

          {/* Overview */}
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-8">
            {research.overview}
          </p>

          {/* Methodology Pillars / Accuracy Benchmarks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* BERT Text NLP */}
            <div className="p-5 rounded-2xl bg-[#131a30] dark:bg-[#131a30] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Text Modality (NLP)
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  78% Acc
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-3">
                {research.methodology.textProcessing}
              </p>
              <div className="text-[11px] text-slate-400 font-mono">
                Model: BERT Transformer
              </div>
            </div>

            {/* Speech Emotion CNN */}
            <div className="p-5 rounded-2xl bg-[#131a30] dark:bg-[#131a30] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Speech Modality (SER)
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  83% Acc
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-3">
                {research.methodology.speechProcessing}
              </p>
              <div className="text-[11px] text-slate-400 font-mono">
                Model: CNN on Mel-Spectrograms
              </div>
            </div>

            {/* Multimodal Fusion */}
            <div className="p-5 rounded-2xl bg-[#131a30] dark:bg-[#131a30] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  Multimodal Fusion
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  85% Acc
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-3">
                {research.methodology.multimodalFusion}
              </p>
              <div className="text-[11px] text-slate-400 font-mono">
                Fusion: Late / Intermediate Integration
              </div>
            </div>
          </div>

          {/* Research Datasets & Stack Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1">
                Evaluated Datasets:
              </span>
              {research.methodology.datasets.map((dataset) => (
                <span
                  key={dataset}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 text-xs font-mono text-cyan-300 dark:text-cyan-300 light:text-cyan-700"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-cyan-500/15"
              >
                <span>Read on ResearchGate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={research.researchGateProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 text-xs font-medium"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Author Profile</span>
              </a>
            </div>
          </div>

          {/* Ethical & Clinical Disclaimer */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-amber-50 border border-amber-500/20 text-xs text-slate-400 dark:text-slate-400 light:text-amber-800 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{research.disclaimer}</span>
          </div>
        </div>

        {/* Broader Research Interests */}
        <div>
          <h3 className="font-display font-semibold text-xl text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Core Research & Investigation Interests</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {research.interests.map((interest) => (
              <div
                key={interest.title}
                className="p-6 rounded-2xl bg-[#0f1422] dark:bg-[#0f1422] light:bg-white border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 hover:border-indigo-500/40 transition-all duration-300 shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getInterestIcon(interest.icon)}
                </div>
                <h4 className="font-display font-semibold text-base text-white dark:text-white light:text-slate-900 mb-2">
                  {interest.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
