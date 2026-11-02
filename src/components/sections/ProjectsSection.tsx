"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowUpRight,
  Layers,
  BookOpen,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <span>CASE STUDIES & ENGINEERING SYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14] font-display mb-4">
            Featured Software, Mobile & Research Systems
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            Direct production implementations demonstrating full-stack architecture, cross-platform mobile engineering, and multimodal AI pipelines.
          </p>
        </div>

        {/* Projects Grid — Elevated Engineering Dossiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-sm flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Dossier Header Strip */}
                <div className="flex items-center justify-between px-6 py-4 bg-neutral-50/80 dark:bg-neutral-800/50 border-b border-neutral-100 dark:border-neutral-800 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-400 dark:text-neutral-500">
                      0{idx + 1} //
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium uppercase tracking-wider">
                      {project.category.split("·")[0].trim()}
                    </span>
                  </div>

                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-200/60 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-300 text-[10px] uppercase font-medium tracking-wider">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Main Card Header with Authentic Logo */}
                <div className="p-6 sm:p-8 border-b border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-extrabold text-2xl text-neutral-900 dark:text-neutral-50 mb-1.5 tracking-tight">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {project.image && (
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 p-2 shadow-2xs flex-shrink-0 flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Description & Capabilities */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights Box */}
                  {project.featureGroups && project.featureGroups[0] && (
                    <div className="p-4 sm:p-5 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-3">
                        {project.featureGroups[0].groupName.toUpperCase()} //
                      </span>
                      <ul className="space-y-2.5">
                        {project.featureGroups[0].items.slice(0, 3).map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technology Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-xs font-mono text-neutral-700 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dossier Footer Actions */}
              <div className="px-6 sm:px-8 py-5 bg-neutral-50/60 dark:bg-neutral-800/40 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-medium text-xs tracking-wide transition-colors shadow-2xs"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Specs</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/60 dark:border-neutral-700/60 text-xs font-medium text-neutral-800 dark:text-neutral-200 transition-colors"
                    >
                      <span>{project.id === "aurevia" ? "Research Paper" : "Product Link"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.id === "aurevia" && (
                    <Link
                      href="#research"
                      className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      <span>Research Section</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
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
