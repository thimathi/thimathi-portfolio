"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  BookOpen,
  CheckCircle,
  Layers,
  Server,
  Cpu,
  ShieldAlert,
  ShoppingBag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-surface-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-surface/95 backdrop-blur-md border-b border-surface-border">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-medium text-accent">
                  {project.category}
                </span>
                {project.badge && (
                  <>
                    <span className="text-surface-border">·</span>
                    <span className="text-xs text-muted-foreground">
                      {project.badge}
                    </span>
                  </>
                )}
              </div>
              <h3 id="modal-title" className="font-display font-bold text-xl sm:text-2xl text-foreground">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-sm text-muted-foreground mt-0.5">
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-surface-hover hover:bg-surface-muted border border-surface-border text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-7 text-foreground/90">
            {/* Overview */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pb-6 border-b border-surface-border/60">
              {project.image && (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-surface-muted border border-surface-border p-2 shadow-sm flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} branding`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Overview
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                  {project.longDescription || project.description}
                </p>
              </div>
            </div>

            {/* Architecture */}
            {project.architecture && (
              <div className="p-5 sm:p-6 rounded-xl bg-surface-raised/50 border border-surface-border/60">
                <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent" />
                  <span>Technical Architecture</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {project.architecture.frontend && (
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground block mb-2">
                        Client & Mobile
                      </span>
                      <ul className="space-y-2">
                        {project.architecture.frontend.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.architecture.backend && (
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground block mb-2">
                        Infrastructure
                      </span>
                      <ul className="space-y-2">
                        {project.architecture.backend.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                            <Server className="w-3.5 h-3.5 text-foreground/50 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.architecture.aiMl && (
                    <div className="md:col-span-2 pt-3 border-t border-surface-border/40">
                      <span className="text-xs font-semibold text-muted-foreground block mb-2">
                        AI & Inference Pipeline
                      </span>
                      <ul className="space-y-2">
                        {project.architecture.aiMl.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                            <Cpu className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.architecture.devops && (
                    <div className="md:col-span-2 pt-3 border-t border-surface-border/40">
                      <span className="text-xs font-semibold text-muted-foreground block mb-2">
                        Administration & Services
                      </span>
                      <ul className="space-y-2">
                        {project.architecture.devops.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-foreground/50 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Feature Groups */}
            {project.featureGroups && project.featureGroups.length > 0 && (
              <div className="space-y-4">
                {project.featureGroups.map((group, groupIdx) => (
                  <div key={groupIdx} className="p-5 rounded-xl bg-surface-card border border-surface-border/60">
                    <h5 className="text-sm font-semibold text-foreground mb-3">
                      {group.groupName}
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Business Model */}
            {project.businessModel && (
              <div className="p-4 rounded-xl bg-surface-muted/50 border border-surface-border/60">
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 mb-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-secondary" />
                  <span>Business Model</span>
                </span>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {project.businessModel}
                </p>
              </div>
            )}

            {/* Notes */}
            {project.notes && (
              <div className="p-4 rounded-xl bg-surface-raised/30 border border-surface-border/60 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted leading-relaxed">{project.notes}</p>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <span className="text-xs font-semibold text-foreground block mb-3">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-surface-muted border border-surface-border/60 text-xs font-medium text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 bg-surface-raised/30 border-t border-surface-border flex flex-wrap items-center justify-end gap-3">
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground text-sm font-medium transition-colors"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.paperLink && (
              <a
                href={project.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-foreground text-sm font-medium transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Publication</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
