"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Award,
  CheckCircle2,
  GraduationCap,
  Building2,
  BookOpen,
} from "lucide-react";
import { portfolioData, EducationEntry } from "@/data/portfolioData";

export function EducationSection() {
  const { education } = portfolioData;

  const getStageMeta = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          code: "STAGE 01 // TERMINAL UNDERGRADUATE DEGREE",
          badge: "PRIMARY TERMINAL QUALIFICATION",
          isFeatured: true,
        };
      case 1:
        return {
          code: "STAGE 02 // ARTICULATED HIGHER NATIONAL DIPLOMA",
          badge: "DIRECT PROGRESSION PATHWAY",
          isFeatured: false,
        };
      default:
        return {
          code: "STAGE 03 // FOUNDATIONAL COMPUTING DIPLOMA",
          badge: "ACADEMIC FOUNDATION",
          isFeatured: false,
        };
    }
  };

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <span>ACADEMIC CREDENTIALS & EDUCATION PATHWAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14] font-display mb-4">
            Education & Progressive Academic Pathway
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            A structured, verified academic journey culminating in a First-Class Honours Computer Science degree specializing in Software Engineering from the University of Wolverhampton.
          </p>
        </div>

        {/* Executive Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              TERMINAL DEGREE //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              B.Sc. (Hons)
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Software Engineering
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              MERIT CLASSIFICATION //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              First-Class
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Average 72% • UoW (UK)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              PROGRESSION //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              3-Tier Pathway
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              DSE ➔ HND ➔ B.Sc.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              INSTITUTIONS //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              UoW • CINEC • NIBM
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Accredited Partners
            </div>
          </div>
        </div>

        {/* Education Ledger Cards */}
        <div className="space-y-6">
          {education.map((item: EducationEntry, idx: number) => {
            const stage = getStageMeta(idx);

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl bg-white dark:bg-neutral-900/90 border transition-all duration-300 p-6 sm:p-8 shadow-xs hover:shadow-sm ${
                  stage.isFeatured
                    ? "border-neutral-200/90 dark:border-neutral-700/90 hover:border-[#9CB1AE] dark:hover:border-[#9CB1AE]"
                    : "border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50"
                }`}
              >
                {/* Card Header Strip: Logos, Degree Info & Academic Merits */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 mb-6 border-b border-neutral-100 dark:border-neutral-800/80">
                  
                  {/* Logos & Degree Details */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                    {/* Institution Logos in clean rounded-xl frames */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white p-2 sm:p-2.5 flex items-center justify-center shadow-2xs border border-neutral-200/80 dark:border-neutral-700/80">
                        <div className="relative w-full h-full">
                          <Image
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {item.secondaryLogo && (
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white p-2 sm:p-2.5 flex items-center justify-center shadow-2xs border border-neutral-200/80 dark:border-neutral-700/80"
                          title={item.deliveryInstitution}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={item.secondaryLogo}
                              alt={`${item.deliveryInstitution} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Stage metadata */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-semibold">
                          {stage.code}
                        </span>
                        {stage.isFeatured && (
                          <span className="px-2 py-0.5 rounded-full bg-[#9CB1AE]/20 text-[#21433C] dark:text-[#B6CBC7] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#9CB1AE]/40">
                            TERMINAL MERIT
                          </span>
                        )}
                      </div>

                      {/* Degree Title */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100 leading-snug">
                        {item.qualification}
                      </h3>

                      {/* Institutions */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                          {item.institution}
                        </span>
                        {item.deliveryInstitution && (
                          <>
                            <span className="text-neutral-300 dark:text-neutral-600">•</span>
                            <span>Delivered in partnership with: <strong className="font-semibold text-neutral-800 dark:text-neutral-300">{item.deliveryInstitution}</strong></span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Academic Merit & Completion Tags */}
                  <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 font-mono text-xs flex-shrink-0">
                    {item.classification && (
                      <span className="px-3 py-1 rounded-full bg-[#9CB1AE] text-neutral-950 font-bold uppercase tracking-wider text-xs shadow-2xs">
                        {item.classification}
                      </span>
                    )}

                    <div className="flex items-center gap-1.5">
                      {item.mark && (
                        <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-800 dark:text-neutral-200 font-semibold text-xs">
                          {item.mark}
                        </span>
                      )}

                      {item.gpa && (
                        <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-800 dark:text-neutral-200 font-semibold text-xs">
                          {item.gpa}
                        </span>
                      )}
                    </div>

                    {item.awardDate && (
                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Awarded: {item.awardDate}</span>
                      </div>
                    )}

                    {item.period && (
                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.period}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Academic Focus & Rigor Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.highlights.map((highlight, highlightIdx) => (
                    <div
                      key={highlightIdx}
                      className="p-3.5 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/60 flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed hover:border-[#9CB1AE]/50 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2B4E46] dark:text-[#9CB1AE] mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
