import React from "react";
import {
  ExternalLink,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";
import { portfolioData, Experience } from "@/data/portfolioData";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  const getDisplayDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return "website";
    }
  };

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <span>EXPERIENCE & PROFESSIONAL TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14] font-display mb-4">
            Professional Experience & Parallel Specializations
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            A verified track record spanning enterprise cloud data pipelines, statistical modeling, user interface systems, and full-stack software delivery.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-10 sm:space-y-12">
          {experiences.map((exp: Experience, idx: number) => {
            const isCurrent = exp.period.includes("Present");

            return (
              <div key={exp.id} className="relative group">
                
                {/* Minimal Timeline Node on Spine */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                    isCurrent || exp.isParallel
                      ? "bg-neutral-900 dark:bg-neutral-100 border-white dark:border-[#121314]"
                      : "bg-neutral-300 dark:bg-neutral-700 border-white dark:border-[#121314]"
                  }`}
                  aria-hidden="true"
                />

                {/* Experience Card */}
                <div
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-xs"
                >
                  {/* Card Header: Role Title, Badges, Period & Location */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 mb-5 border-b border-neutral-100 dark:border-neutral-800/80">
                    <div>
                      {/* Role & Clean Status Badges (Neutral, No AI Colors) */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        <span className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                          0{idx + 1} //
                        </span>
                        
                        <h3 className="font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50 tracking-tight font-display">
                          {exp.role}
                        </h3>

                        {/* Parallel Role Indicator - Clean Editorial Neutral Badge */}
                        {exp.isParallel && (
                          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80 font-mono text-[10px] font-medium uppercase tracking-wider">
                            {exp.parallelNote || "Parallel Specialization"}
                          </span>
                        )}

                        {/* Current Primary Role Indicator - Clean Minimal Badge */}
                        {isCurrent && !exp.isParallel && (
                          <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-mono text-[10px] font-semibold uppercase tracking-wider">
                            Active Primary Position
                          </span>
                        )}
                      </div>

                      {/* Company Name & Verified Links */}
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 font-semibold text-neutral-800 dark:text-neutral-200">
                          <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{exp.company}</span>
                        </div>

                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-mono text-[11px] transition-colors"
                          >
                            <span>{getDisplayDomain(exp.website)}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {exp.linkedin && (
                          <a
                            href={exp.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-mono text-[11px] transition-colors"
                          >
                            <span>LinkedIn Page</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Timeline & Coordinates */}
                    <div className="flex flex-col sm:items-end text-xs font-mono text-neutral-500 dark:text-neutral-400 space-y-1.5 flex-shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                        <span>{exp.period}</span>
                      </div>
                      
                      {exp.location && (
                        <div className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* High-Level Overview Summary */}
                  <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                    {exp.summary}
                  </p>

                  {/* Core Technical Workflows & Impact */}
                  <div className="mb-6 p-4 sm:p-5 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-3">
                      KEY WORKFLOWS & TECHNICAL CONTRIBUTIONS //
                    </span>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIdx) => {
                        const parts = resp.split(":");
                        const hasColon = parts.length > 1;
                        const label = hasColon ? parts[0] : "";
                        const detail = hasColon ? parts.slice(1).join(":") : resp;

                        return (
                          <li
                            key={respIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-2 flex-shrink-0" />
                            <div>
                              {hasColon ? (
                                <>
                                  <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">
                                    {label.trim()}:
                                  </strong>{" "}
                                  <span>{detail.trim()}</span>
                                </>
                              ) : (
                                <span>{resp}</span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Applied Technologies / Skills Strip */}
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mr-1 font-semibold">
                      APPLIED STACK //
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
