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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-surface-border rounded-xs shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-surface/98 backdrop-blur-md border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px]">
              <span className="text-racing-red font-semibold uppercase">
                {project.category}
              </span>
              {project.badge && (
                <>
                  <span className="text-surface-border">/</span>
                  <span className="text-muted-foreground uppercase">
                    {project.badge}
                  </span>
                </>
              )}
            </div>
            <h3 id="modal-title" className="font-display font-bold text-xl sm:text-2xl text-foreground">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="font-mono text-xs text-muted-foreground mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="px-2.5 py-1.5 rounded-xs bg-surface-muted hover:bg-surface-hover border border-surface-border text-foreground text-xs font-mono flex items-center gap-1 transition-colors"
          >
            <span>ESC</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-7 text-foreground/90">
          {/* Overview & Authentic Logo */}
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-6 border-b border-surface-border/70">
            {project.image && (
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xs overflow-hidden bg-surface-muted border border-surface-border p-2 shadow-sm flex-shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} branding`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            )}
            <div className="flex-1">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                SYSTEM OVERVIEW //
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                {project.longDescription || project.description}
              </p>
            </div>
          </div>

          {/* Technical Architecture Breakdown */}
          {project.architecture && (
            <div className="p-5 sm:p-6 rounded-xs bg-surface-muted border border-surface-border">
              <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-racing-red" />
                <span>TECHNICAL ARCHITECTURE & SPECIFICATIONS</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.architecture.frontend && (
                  <div>
                    <span className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                      Client & Mobile Tier
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.frontend.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-racing-red mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.backend && (
                  <div>
                    <span className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                      Cloud & Infrastructure
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.backend.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                          <Server className="w-3.5 h-3.5 text-foreground mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.aiMl && (
                  <div className="md:col-span-2 pt-2 border-t border-surface-border/50">
                    <span className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                      Affective AI & Inference Pipeline
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.aiMl.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                          <Cpu className="w-3.5 h-3.5 text-racing-red mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.devops && (
                  <div className="md:col-span-2 pt-2 border-t border-surface-border/50">
                    <span className="font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                      Administration & Services
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.devops.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-foreground mt-0.5 flex-shrink-0" />
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
                <div key={groupIdx} className="p-4 rounded-xs bg-surface-raised border border-surface-border">
                  <h5 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2.5">
                    {group.groupName}
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-xs bg-racing-red mt-1.5 flex-shrink-0" />
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
            <div className="p-3.5 rounded-xs bg-surface-muted border border-surface-border">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5 mb-1">
                <ShoppingBag className="w-3.5 h-3.5 text-racing-red" />
                <span>Commercial & Partnership Model:</span>
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed">
                {project.businessModel}
              </p>
            </div>
          )}

          {/* Notes / Disclaimer */}
          {project.notes && (
            <div className="p-3 rounded-xs bg-surface border border-surface-border flex items-start gap-2.5 text-xs text-muted">
              <ShieldAlert className="w-4 h-4 text-racing-red flex-shrink-0 mt-0.5" />
              <span>{project.notes}</span>
            </div>
          )}

          {/* Tech Stack List */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-2">
              APPLIED TECHNOLOGIES //
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-xs bg-surface-muted border border-surface-border text-xs font-mono text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-surface-muted border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-muted-foreground">
            DOSSIER ARCHIVE // VERIFIED CAPABILITIES
          </div>
          <div className="flex items-center gap-3">
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-foreground text-background hover:bg-racing-red hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Open Project Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.paperLink && (
              <a
                href={project.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border text-foreground font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <BookOpen className="w-3 h-3 text-racing-red" />
                <span>Publication</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
