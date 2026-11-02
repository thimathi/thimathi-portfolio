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
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function ResearchSection() {
  const { research } = portfolioData;

  const getInterestIcon = (name: string) => {
    const cls = "w-5 h-5 text-accent";
    switch (name) {
      case "Layers":
        return <Layers className={cls} />;
      case "MessageSquare":
        return <MessageSquare className={cls} />;
      case "Mic":
        return <Mic className={cls} />;
      case "HeartPulse":
        return <HeartPulse className={cls} />;
      default:
        return <Brain className={cls} />;
    }
  };

  return (
    <section id="research" className="py-24 sm:py-32 bg-surface-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          custom={0}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide">
              Research
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight mb-3 max-w-3xl">
            Multimodal AI for Burnout Detection & Emotional Monitoring
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            Investigating affective computing frameworks by combining linguistic transformers and acoustic convolutional representations.
          </p>
        </motion.div>

        {/* Lead Research Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          custom={1}
          className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8 shadow-card mb-12"
        >
          {/* Paper Header */}
          <div className="pb-6 mb-6 border-b border-surface-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-surface-muted border border-surface-border p-1.5 shadow-sm flex-shrink-0">
                  <Image
                    src="/aurevia.png"
                    alt="Aurevia Research Framework"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-soft text-accent text-xs font-medium mb-1">
                    <BookOpen className="w-3 h-3" />
                    Lead Author
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {research.leadAuthor} · {research.affiliation}
                  </p>
                </div>
              </div>

              <span className="text-sm text-muted-foreground font-medium">
                CIRS 2026
              </span>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground leading-snug">
              &ldquo;{research.title}&rdquo;
            </h3>
          </div>

          {/* Overview */}
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-8">
            {research.overview}
          </p>

          {/* Methodology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Text NLP */}
            <div className="p-5 bg-surface-raised rounded-xl border border-surface-border/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">
                  Text (NLP)
                </span>
                <span className="px-2.5 py-1 rounded-full bg-accent-soft text-accent text-xs font-bold">
                  78%
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {research.methodology.textProcessing}
              </p>
              <span className="text-[11px] text-muted-foreground font-medium">
                BERT Transformer
              </span>
            </div>

            {/* Speech CNN */}
            <div className="p-5 bg-surface-raised rounded-xl border border-surface-border/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">
                  Speech (SER)
                </span>
                <span className="px-2.5 py-1 rounded-full bg-accent-soft text-accent text-xs font-bold">
                  83%
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {research.methodology.speechProcessing}
              </p>
              <span className="text-[11px] text-muted-foreground font-medium">
                CNN Mel-Spectrograms
              </span>
            </div>

            {/* Multimodal Fusion */}
            <div className="p-5 bg-surface-raised rounded-xl border border-surface-border/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">
                  Multimodal Fusion
                </span>
                <span className="px-2.5 py-1 rounded-full bg-secondary-soft text-secondary text-xs font-bold">
                  85%
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {research.methodology.multimodalFusion}
              </p>
              <span className="text-[11px] text-muted-foreground font-medium">
                Late & Intermediate Fusion
              </span>
            </div>
          </div>

          {/* Datasets & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-surface-border">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground mr-1">
                Datasets:
              </span>
              {research.methodology.datasets.map((dataset) => (
                <span
                  key={dataset}
                  className="px-2.5 py-1 rounded-lg bg-surface-muted border border-surface-border text-xs font-medium text-foreground"
                >
                  {dataset}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={research.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground text-sm font-medium transition-colors"
              >
                <span>Read Paper</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={research.researchGateProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-foreground text-sm font-medium transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Author Profile</span>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 rounded-xl bg-surface-muted/50 border border-surface-border/60 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              {research.disclaimer}
            </p>
          </div>
        </motion.div>

        {/* Research Interests Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          custom={2}
        >
          <h3 className="text-lg font-display font-semibold text-foreground mb-6">
            Research Interests
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {research.interests.map((interest, idx) => (
              <motion.div
                key={interest.title}
                variants={fadeInUp}
                custom={idx + 3}
                className="group p-5 bg-surface border border-surface-border rounded-2xl hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  {getInterestIcon(interest.icon)}
                </div>
                <h4 className="font-display font-semibold text-sm text-foreground mb-2">
                  {interest.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
