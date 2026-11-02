"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import { portfolioData, Experience } from "@/data/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft">
              <Briefcase className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide">
              Experience
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight mb-3">
            Professional Experience
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            A track record spanning enterprise data pipelines, statistical
            modeling, user interface systems, and freelance full-stack
            application delivery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-surface-border" />

          <div className="space-y-10">
            {experiences.map((exp: Experience, idx: number) => {
              const isCurrent = exp.period.includes("Present");

              return (
                <motion.div
                  key={exp.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={idx}
                  className="relative pl-12 sm:pl-14"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[13px] sm:left-[17px] top-7 w-3 h-3 rounded-full border-2 z-10 ${
                      isCurrent
                        ? "bg-emerald-500 border-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                        : exp.isParallel
                        ? "bg-accent border-accent/50"
                        : "bg-surface-raised border-surface-border"
                    }`}
                  />

                  {/* Experience Card */}
                  <div className="bg-surface-card rounded-2xl border border-surface-border shadow-card hover:shadow-card-hover p-6 sm:p-8 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                            {exp.role}
                          </h3>

                          {/* Parallel Role Badge */}
                          {exp.isParallel && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-soft text-accent text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {exp.parallelNote || "Parallel Role"}
                            </span>
                          )}

                          {/* Active Position Badge */}
                          {isCurrent && !exp.isParallel && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Company & Links */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="font-semibold text-foreground/80">
                            {exp.company}
                          </span>

                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-muted hover:text-accent text-xs transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Website</span>
                            </a>
                          )}

                          {exp.linkedin && (
                            <a
                              href={exp.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-muted hover:text-accent text-xs transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>LinkedIn</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-3 sm:gap-1.5 text-sm text-muted shrink-0">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-muted/60" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1.5 text-xs">
                            <MapPin className="w-3.5 h-3.5 text-muted/60" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                      {exp.summary}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li
                            key={respIdx}
                            className="text-sm text-muted leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                          >
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-surface-border/60">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-accent-soft text-accent text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
