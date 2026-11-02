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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px]">
              <span className="text-[#3B7266] dark:text-[#52998B] font-semibold uppercase">
                {project.category}
              </span>
              {project.badge && (
                <>
                  <span className="text-neutral-300 dark:text-neutral-700">/</span>
                  <span className="text-neutral-500 dark:text-neutral-400 uppercase">
                    {project.badge}
                  </span>
                </>
              )}
            </div>
            <h3 id="modal-title" className="font-display font-bold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <span>ESC</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-7 text-neutral-800 dark:text-neutral-200">
          {/* Overview & Authentic Logo */}
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
            {project.image && (
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 p-2 shadow-sm flex-shrink-0 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={`${project.title} branding`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            )}
            <div className="flex-1">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-2">
                SYSTEM OVERVIEW //
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.longDescription || project.description}
              </p>
            </div>
          </div>

          {/* Technical Architecture Breakdown */}
          {project.architecture && (
            <div className="p-5 sm:p-6 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60">
              <h4 className="font-mono text-xs font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#3B7266] dark:text-[#52998B]" />
                <span>TECHNICAL ARCHITECTURE & SPECIFICATIONS</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.architecture.frontend && (
                  <div>
                    <span className="font-mono text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                      Client & Mobile Tier
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.frontend.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#3B7266] dark:text-[#52998B] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.backend && (
                  <div>
                    <span className="font-mono text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                      Cloud & Infrastructure
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.backend.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2">
                          <Server className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.aiMl && (
                  <div className="md:col-span-2 pt-3 border-t border-neutral-200/60 dark:border-neutral-700/60">
                    <span className="font-mono text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                      Affective AI & Inference Pipeline
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.aiMl.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2">
                          <Cpu className="w-3.5 h-3.5 text-[#3B7266] dark:text-[#52998B] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.devops && (
                  <div className="md:col-span-2 pt-3 border-t border-neutral-200/60 dark:border-neutral-700/60">
                    <span className="font-mono text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                      Administration & Services
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.devops.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 mt-0.5 flex-shrink-0" />
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
                <div key={groupIdx} className="p-4 sm:p-5 rounded-xl bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60">
                  <h5 className="font-mono text-xs font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-2.5">
                    {group.groupName}
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-1.5 flex-shrink-0" />
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
            <div className="p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold flex items-center gap-1.5 mb-1">
                <ShoppingBag className="w-3.5 h-3.5 text-[#3B7266] dark:text-[#52998B]" />
                <span>Commercial & Partnership Model:</span>
              </span>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.businessModel}
              </p>
            </div>
          )}

          {/* Notes / Disclaimer */}
          {project.notes && (
            <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/70 dark:border-neutral-700/70 flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              <ShieldAlert className="w-4 h-4 text-neutral-500 dark:text-neutral-400 flex-shrink-0 mt-0.5" />
              <span>{project.notes}</span>
            </div>
          )}

          {/* Tech Stack List */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold block mb-2">
              APPLIED TECHNOLOGIES //
            </span>
            <div className="flex flex-wrap gap-1.5">
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

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-neutral-50/80 dark:bg-neutral-800/50 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
            SYSTEM ARCHIVE // VERIFIED CAPABILITIES
          </div>
          <div className="flex items-center gap-3">
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs"
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <BookOpen className="w-3 h-3 text-[#3B7266] dark:text-[#52998B]" />
                <span>Publication</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
