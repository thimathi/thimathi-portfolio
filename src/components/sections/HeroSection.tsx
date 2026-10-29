"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  BookOpen,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-surface-border tech-grid-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Telemetry / Sector Index Line */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-surface-border/70 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-racing-red rounded-xs" />
            <span className="tracking-wider uppercase font-semibold text-foreground">
              DOSSIER // 01
            </span>
            <span className="text-surface-border">/</span>
            <span className="hidden sm:inline">ENGINEERING & RESEARCH OVERVIEW</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline">SYSTEM: ACTIVE</span>
            <span className="text-surface-border hidden md:inline">/</span>
            <span className="text-foreground font-medium">SRI LANKA (IST // UTC+5:30)</span>
          </div>
        </div>

        {/* Main Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Professional Headline Track */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-5 bg-surface border border-surface-border rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {profile.title}
              </span>
            </div>

            {/* Main Name & Bold Editorial Typography */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.08] mb-4">
              {profile.name}
            </h1>

            {/* Stated Tagline */}
            <p className="font-display text-lg sm:text-xl font-medium text-foreground tracking-tight mb-5 pb-5 border-b border-surface-border/60 w-full">
              {profile.tagline}
            </p>

            {/* Preserved Exact Intro Copy */}
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mb-8">
              {profile.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xs bg-foreground text-background hover:bg-racing-red hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xs bg-surface hover:bg-surface-hover text-foreground font-mono text-xs font-semibold uppercase tracking-wider border border-surface-border transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-racing-red" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Channels Strip */}
            <div className="flex items-center gap-3 pt-6 border-t border-surface-border/70 w-full">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mr-1">
                INDEX //
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://lk.linkedin.com/in/thimathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="px-2.5 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border hover:border-racing-red text-muted-foreground hover:text-foreground text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3 h-3" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/thimathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="px-2.5 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border hover:border-racing-red text-muted-foreground hover:text-foreground text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3 h-3" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ResearchGate profile"
                  className="px-2.5 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border hover:border-racing-red text-muted-foreground hover:text-foreground text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3 h-3" />
                  <span className="hidden sm:inline">ResearchGate</span>
                </a>
                <a
                  href="mailto:manaharatd@gmail.com"
                  aria-label="Primary email"
                  className="px-2.5 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border hover:border-racing-red text-muted-foreground hover:text-foreground text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-racing-red" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Portrait & Telemetry Frame (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[390px] tech-corners bg-surface border border-surface-border p-2 rounded-xs shadow-md">
              {/* Header Telemetry strip */}
              <div className="flex items-center justify-between px-2.5 py-2 mb-2 bg-surface-muted text-[10px] font-mono text-muted-foreground border border-surface-border/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-racing-red rounded-xs" />
                  <span className="font-semibold text-foreground">REG // PORTRAIT</span>
                </div>
                <span>FIRST-CLASS HONS (72%)</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative w-full h-[430px] sm:h-[470px] overflow-hidden bg-surface-muted border border-surface-border">
                <Image
                  src={profile.portrait}
                  alt={`${profile.name} - Professional Portrait`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 390px"
                  className="object-cover object-[center_12%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {/* Bottom Technical Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-background/95 border border-surface-border rounded-xs backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-surface-border/60 font-mono text-[10px]">
                    <span className="text-muted-foreground">DISCIPLINE MATRIX</span>
                    <span className="text-racing-red font-semibold">UoW · CIRS 2026</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                    <div className="p-1.5 bg-surface-muted border border-surface-border/50">
                      <div className="text-foreground font-semibold">SW</div>
                      <div className="text-[9px] text-muted-foreground">ENGINEER</div>
                    </div>
                    <div className="p-1.5 bg-surface-muted border border-surface-border/50">
                      <div className="text-foreground font-semibold">DATA</div>
                      <div className="text-[9px] text-muted-foreground">PIPELINES</div>
                    </div>
                    <div className="p-1.5 bg-surface-muted border border-surface-border/50">
                      <div className="text-foreground font-semibold">AI/ML</div>
                      <div className="text-[9px] text-muted-foreground">AFFECTIVE</div>
                    </div>
                    <div className="p-1.5 bg-surface-muted border border-surface-border/50">
                      <div className="text-foreground font-semibold">UI/UX</div>
                      <div className="text-[9px] text-muted-foreground">DESIGN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
