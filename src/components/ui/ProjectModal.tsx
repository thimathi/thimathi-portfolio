"use client";

import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  BookOpen,
  CheckCircle,
  Layers,
  Server,
  Smartphone,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101c] dark:bg-[#0c101c] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 rounded-3xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#0c101c]/95 dark:bg-[#0c101c]/95 light:bg-white/95 backdrop-blur-md border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-medium">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 id="modal-title" className="font-display font-bold text-2xl sm:text-3xl text-white dark:text-white light:text-slate-900">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 hover:bg-white/[0.1] border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-300 dark:text-slate-300 light:text-slate-700">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
              System Overview
            </h4>
            <p className="text-base sm:text-lg leading-relaxed text-slate-200 dark:text-slate-200 light:text-slate-800">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Technical Architecture Breakdown */}
          {project.architecture && (
            <div className="p-6 rounded-2xl bg-[#111728] dark:bg-[#111728] light:bg-slate-50 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
              <h4 className="font-display font-semibold text-lg text-white dark:text-white light:text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Technical Architecture & Infrastructure</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.architecture.frontend && (
                  <div>
                    <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider block mb-2">
                      Frontend & Client Tier
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.frontend.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.backend && (
                  <div>
                    <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block mb-2">
                      Backend, Cloud & Database
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.backend.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 flex items-start gap-2">
                          <Server className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.aiMl && (
                  <div className="md:col-span-2">
                    <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider block mb-2">
                      AI & Affective Computing Pipeline
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.aiMl.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 flex items-start gap-2">
                          <Cpu className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.devops && (
                  <div className="md:col-span-2">
                    <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider block mb-2">
                      Administrative & Realtime Services
                    </span>
                    <ul className="space-y-1.5">
                      {project.architecture.devops.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
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
            <div className="space-y-5">
              {project.featureGroups.map((group, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                  <h5 className="font-display font-semibold text-base text-white dark:text-white light:text-slate-900 mb-3">
                    {group.groupName}
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Business Model if present */}
          {project.businessModel && (
            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-1">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Commercial & Partnership Model</span>
              </span>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                {project.businessModel}
              </p>
            </div>
          )}

          {/* Notes / Disclaimer */}
          {project.notes && (
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-300/90 dark:text-amber-300/90 light:text-amber-800 leading-relaxed">
                {project.notes}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with External Links */}
        <div className="p-6 bg-[#090d16] dark:bg-[#090d16] light:bg-slate-50 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Project documentation & verified capabilities
          </div>
          <div className="flex items-center gap-3">
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-cyan-500/15"
              >
                <span>Open Project Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.paperLink && (
              <a
                href={project.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 text-xs font-semibold"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>ResearchGate Publication</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
