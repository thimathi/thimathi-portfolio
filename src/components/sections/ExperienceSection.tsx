"use client";

import React from "react";
import {
  Briefcase,
  ExternalLink,
  Calendar,
  MapPin,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { portfolioData, Experience } from "@/data/portfolioData";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="ambient-glow bg-blue-600/10 w-[500px] h-[500px] top-1/3 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Professional Experience & Parallel Specializations
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A track record spanning enterprise data pipelines, statistical modeling, user interface systems, and freelance full-stack application delivery.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-6">
          {experiences.map((exp: Experience) => (
            <div
              key={exp.id}
              className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                exp.isParallel
                  ? "bg-[#111728] dark:bg-[#111728] light:bg-indigo-50/50 border-2 border-indigo-500/40 shadow-lg shadow-indigo-500/5"
                  : "bg-[#0e1320] dark:bg-[#0e1320] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-md hover:border-cyan-500/30"
              }`}
            >
              {/* Header: Role, Badges, Dates */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white dark:text-white light:text-slate-900">
                      {exp.role}
                    </h3>

                    {/* Parallel Role Badge */}
                    {exp.isParallel && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 text-xs font-semibold">
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>{exp.parallelNote || "Parallel Role"}</span>
                      </span>
                    )}

                    {/* Current role tag */}
                    {exp.period.includes("Present") && !exp.isParallel && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current Primary Role
                      </span>
                    )}
                  </div>

                  {/* Company & Link */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                    <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {exp.company}
                    </span>

                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {exp.linkedin && (
                      <a
                        href={exp.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                      >
                        <span>LinkedIn Company Page</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Date & Location */}
                <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                {exp.summary}
              </p>

              {/* Suggested Responsibilities */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2.5">
                  Core Responsibilities & Technical Workflows:
                </span>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.04] dark:border-white/[0.04] light:border-slate-100">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
