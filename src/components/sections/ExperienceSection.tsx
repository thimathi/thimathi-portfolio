"use client";

import React from "react";
import {
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react";
import { portfolioData, Experience } from "@/data/portfolioData";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
          <span className="w-2 h-2 bg-racing-red rounded-xs" />
          <span>SECTOR 03 // PROFESSIONAL TIMELINE & PARALLEL ROLES</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground tracking-tight mb-3">
            Professional Experience & Parallel Specializations
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            A track record spanning enterprise data pipelines, statistical modeling, user interface systems, and freelance full-stack application delivery.
          </p>
        </div>

        {/* Technical Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp: Experience, idx: number) => {
            const isCurrent = exp.period.includes("Present");

            return (
              <div
                key={exp.id}
                className={`relative bg-surface border transition-colors rounded-xs p-6 sm:p-8 ${
                  exp.isParallel
                    ? "border-surface-border border-l-4 border-l-racing-red shadow-sm"
                    : isCurrent
                    ? "border-surface-border border-l-4 border-l-foreground shadow-sm"
                    : "border-surface-border"
                }`}
              >
                {/* Header: Role, Badges, Period */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 mb-5 border-b border-surface-border">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-mono text-xs text-muted-foreground font-semibold">
                        0{idx + 1} //
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                        {exp.role}
                      </h3>

                      {/* Parallel Role Indicator */}
                      {exp.isParallel && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-racing-red-soft text-racing-red border border-racing-red/20 font-mono text-[10px] font-semibold uppercase tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
                          {exp.parallelNote || "Parallel Specialization"}
                        </span>
                      )}

                      {/* Current Role Indicator */}
                      {isCurrent && !exp.isParallel && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-surface-raised border border-surface-border font-mono text-[10px] text-foreground font-semibold uppercase tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Active Primary Position
                        </span>
                      )}
                    </div>

                    {/* Company Name & Links */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
                      <span className="font-semibold text-foreground">
                        {exp.company}
                      </span>

                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-muted-foreground hover:text-racing-red font-mono text-xs transition-colors"
                        >
                          <span>creativexlab.online</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {exp.linkedin && (
                        <a
                          href={exp.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-muted-foreground hover:text-racing-red font-mono text-xs transition-colors"
                        >
                          <span>company/nono-ai</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Period & Location Metadata */}
                  <div className="flex flex-col sm:items-end text-xs font-mono text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1.5 text-foreground font-medium">
                      <Calendar className="w-3.5 h-3.5 text-racing-red" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1 text-[11px]">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Suggested Responsibilities */}
                <div className="mb-6 bg-surface-muted p-4 border border-surface-border/50 rounded-xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                    TECHNICAL WORKFLOWS & RESPONSIBILITIES:
                  </span>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li
                        key={respIdx}
                        className="text-xs text-muted leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-xs bg-racing-red mt-1.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology / Skill Stack Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-surface-border">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mr-1">
                    APPLIED //
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-xs bg-surface-raised border border-surface-border text-[11px] font-mono text-muted-foreground hover:text-foreground hover:border-racing-red transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
