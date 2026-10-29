"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FolderGit2,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Layers,
  Sparkles,
  Smartphone,
  Cpu,
  Server,
  Activity,
  Heart,
  Baby,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-cyan-600/10 w-[500px] h-[500px] top-1/4 -left-20" />
      <div className="ambient-glow bg-indigo-600/10 w-[450px] h-[450px] bottom-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
              Featured Software, Mobile & Research Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Direct implementations demonstrating full-stack architecture, cross-platform mobile engineering, and machine learning pipelines.
            </p>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-[#0e1422] dark:bg-[#0e1422] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Card Visual Header / Banner */}
              <div className="relative h-56 sm:h-64 p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#12192e] via-[#0d1322] to-[#080d18] dark:from-[#12192e] dark:via-[#0d1322] dark:to-[#080d18] light:from-slate-100 light:to-slate-200 border-b border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                {/* Decorative abstract elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/0 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                
                {/* Top category & badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/[0.08] dark:bg-white/[0.08] light:bg-white/80 backdrop-blur-md text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300">
                    {project.category.split("·")[0].trim()}
                  </span>

                  {project.badge && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Big Visual Icon / Watermark */}
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white dark:text-white light:text-slate-900 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/[0.06] dark:bg-white/[0.06] light:bg-white/90 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
                    {project.id === "baby-mine" ? (
                      <Baby className="w-7 h-7" />
                    ) : (
                      <Cpu className="w-7 h-7" />
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights feature bullets */}
                  {project.featureGroups && project.featureGroups[0] && (
                    <div className="mb-6 space-y-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                        {project.featureGroups[0].groupName}:
                      </span>
                      {project.featureGroups[0].items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-1 rounded-md bg-white/[0.02] text-xs font-medium text-slate-400">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Technical Architecture & Breakdown</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 hover:bg-white/[0.1] dark:hover:bg-white/[0.1] light:hover:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 text-xs font-semibold text-white dark:text-white light:text-slate-800 transition-colors"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.id === "aurevia" && (
                      <Link
                        href="#research"
                        className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>Research Section</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
