"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft">
              <Layers className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide">
              Projects
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight mb-3">
            Featured Work & Case Studies
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            Full-stack applications, cross-platform mobile systems, and machine learning research pipelines.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              custom={idx}
              className="group bg-surface-card border border-surface-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Card Header with Badge */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border/60">
                <div className="flex items-center gap-3">
                  {project.image && (
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-surface-muted border border-surface-border p-1 flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={`${project.title} icon`}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {project.category.split("·")[0].trim()}
                    </p>
                  </div>
                </div>
                {project.badge && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-soft text-accent text-[11px] font-medium">
                    <Sparkles className="w-3 h-3" />
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 space-y-5">
                {project.subtitle && (
                  <p className="text-sm font-medium text-foreground/80">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                {project.featureGroups && project.featureGroups[0] && (
                  <div className="p-4 bg-surface-raised/50 rounded-xl border border-surface-border/50">
                    <span className="text-xs font-semibold text-foreground/70 block mb-2.5">
                      {project.featureGroups[0].groupName}
                    </span>
                    <ul className="space-y-2">
                      {project.featureGroups[0].items.slice(0, 3).map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-xs text-muted leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-surface-muted border border-surface-border/60 text-[11px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-surface-raised/30 border-t border-surface-border/60 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  <Layers className="w-4 h-4" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-card hover:bg-surface-hover border border-surface-border text-xs font-medium text-foreground hover:text-accent transition-all duration-200"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.id === "aurevia" && (
                    <Link
                      href="#research"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
                    >
                      <span>Research</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
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
