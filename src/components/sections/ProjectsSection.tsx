"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  Layers,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
          <span className="w-2 h-2 bg-racing-red rounded-xs" />
          <span>SECTOR 04 // ENGINEERING SYSTEMS & CASE STUDIES</span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground tracking-tight mb-3">
            Featured Software, Mobile & Research Systems
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Direct implementations demonstrating full-stack architecture, cross-platform mobile engineering, and machine learning pipelines.
          </p>
        </div>

        {/* Projects Grid — Formatted as Engineering Dossiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-surface border border-surface-border rounded-xs flex flex-col justify-between hover:border-surface-border transition-colors shadow-sm"
            >
              <div>
                {/* Dossier Header Strip */}
                <div className="flex items-center justify-between px-5 py-3 bg-surface-muted border-b border-surface-border text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-racing-red font-bold">CASE 0{idx + 1} //</span>
                    <span className="text-muted-foreground uppercase tracking-wider">
                      {project.category.split("·")[0].trim()}
                    </span>
                  </div>
                  {project.badge && (
                    <span className="px-2 py-0.5 rounded-xs bg-surface border border-surface-border text-[10px] uppercase font-semibold text-foreground">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Main Card Header with Authentic Logo */}
                <div className="p-6 sm:p-7 border-b border-surface-border/60">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="font-mono text-xs text-muted-foreground tracking-wide">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {project.image && (
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xs overflow-hidden bg-surface-muted border border-surface-border p-1.5 shadow-sm flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={`${project.title} branding`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Description & Capabilities */}
                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  {project.featureGroups && project.featureGroups[0] && (
                    <div className="p-3.5 bg-surface-muted border border-surface-border/50 rounded-xs">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-2">
                        {project.featureGroups[0].groupName}:
                      </span>
                      <ul className="space-y-1.5">
                        {project.featureGroups[0].items.slice(0, 3).map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="text-xs text-muted leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-xs bg-racing-red mt-1.5 flex-shrink-0" />
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
                        className="px-2 py-0.5 rounded-xs bg-surface-raised border border-surface-border text-[11px] font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dossier Footer Actions */}
              <div className="px-6 py-4 bg-surface-muted border-t border-surface-border flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-foreground hover:text-racing-red transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-racing-red" />
                  <span>Architecture & Specs [ + ]</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border hover:border-racing-red text-xs font-mono text-foreground transition-colors"
                    >
                      <span>External Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.id === "aurevia" && (
                    <Link
                      href="#research"
                      className="inline-flex items-center gap-1 text-xs font-mono text-racing-red hover:underline"
                    >
                      <span>Research Section</span>
                      <ArrowRight className="w-3 h-3" />
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
