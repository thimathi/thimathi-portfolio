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
  Sparkles,
  Download,
  Terminal,
  Database,
  Cpu,
  Layers,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="ambient-glow bg-cyan-500/20 w-[500px] h-[500px] -top-32 -left-20 animate-pulse-slow" />
      <div className="ambient-glow bg-blue-600/15 w-[600px] h-[600px] top-1/3 -right-32 animate-pulse-slow" />
      <div className="ambient-glow bg-indigo-600/10 w-[450px] h-[450px] -bottom-20 left-1/3" />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/25 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-medium tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Software & Data Engineer · AI Researcher</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1] mb-4">
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            </h1>

            {/* Multidisciplinary headline */}
            <div className="text-lg sm:text-xl font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-cyan-400 font-semibold">Software Engineer</span>
              <span className="text-slate-500">•</span>
              <span className="text-blue-400 font-semibold">Data Engineer</span>
              <span className="text-slate-500">•</span>
              <span className="text-teal-400 font-semibold">Product Designer</span>
              <span className="text-slate-500">•</span>
              <span className="text-indigo-400 font-semibold">AI Researcher</span>
            </div>

            {/* Suggested Headline */}
            <p className="font-display text-xl sm:text-2xl font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 tracking-tight mb-4">
              {profile.tagline}
            </p>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mb-8">
              {profile.intro}
            </p>

            {/* Core Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200/70 hover:bg-white/[0.1] dark:hover:bg-white/[0.1] light:hover:bg-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm tracking-wide border border-white/[0.1] dark:border-white/[0.1] light:border-slate-300 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Shortcuts & Profiles */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://lk.linkedin.com/in/thimathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile of Thimathi Dissanayake"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/thimathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile of Thimathi Dissanayake"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ResearchGate profile of Thimathi Dissanayake"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
                <a
                  href="mailto:manaharatd@gmail.com"
                  aria-label="Email Thimathi Dissanayake"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait & Interactive Technology Badge (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1.5 rounded-[2.25rem] bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 opacity-60 blur-md transition duration-1000 group-hover:opacity-100 animate-glow" />

              {/* Portrait container card */}
              <div className="relative rounded-[2rem] overflow-hidden bg-[#0e1320] dark:bg-[#0e1320] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 shadow-2xl">
                <div className="relative w-full h-[460px] sm:h-[500px]">
                  <Image
                    src={profile.portrait}
                    alt={`${profile.name} - Professional Portrait`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-[center_12%]"
                  />
                  {/* Subtle dark gradient overlay at bottom of portrait for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent opacity-85 dark:opacity-85 light:opacity-50" />

                  {/* Floating Tech Badges on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e1524]/90 dark:bg-[#0e1524]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900">
                          Verified Credentials
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 font-medium">
                        First-Class Hons (72%)
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
                      <div className="flex flex-col items-center text-center">
                        <Terminal className="w-4 h-4 text-cyan-400 mb-0.5" />
                        <span className="text-[10px] text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">Software</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Database className="w-4 h-4 text-blue-400 mb-0.5" />
                        <span className="text-[10px] text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">Data Eng</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Cpu className="w-4 h-4 text-indigo-400 mb-0.5" />
                        <span className="text-[10px] text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">AI / NLP</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Layers className="w-4 h-4 text-teal-400 mb-0.5" />
                        <span className="text-[10px] text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">Design</span>
                      </div>
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
