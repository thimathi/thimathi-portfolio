"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Sparkles,
  Building,
} from "lucide-react";
import { portfolioData, EducationEntry } from "@/data/portfolioData";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-cyan-600/10 w-[500px] h-[500px] top-1/4 -left-20" />
      <div className="ambient-glow bg-blue-600/10 w-[450px] h-[450px] bottom-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Education & Progressive Academic Pathway
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A structured, verified academic journey culminating in a First-Class Honours Computer Science degree specializing in Software Engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {education.map((item: EducationEntry) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0e1422] dark:bg-[#0e1422] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                {/* Left: Institution Logo & Degree Title */}
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Institution Logo Box */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-200">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                      {item.degreeType}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white dark:text-white light:text-slate-900 leading-snug">
                      {item.qualification}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-400">
                      <span className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                        {item.institution}
                      </span>
                      {item.deliveryInstitution && (
                        <>
                          <span>•</span>
                          <span className="text-slate-400">
                            Delivered at: {item.deliveryInstitution}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Academic Classification / GPA Badges */}
                <div className="flex flex-wrap lg:flex-col lg:items-end gap-2">
                  {item.classification && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>{item.classification}</span>
                    </span>
                  )}
                  {item.mark && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 dark:text-cyan-300 light:text-cyan-700 text-xs sm:text-sm font-medium">
                      {item.mark}
                    </span>
                  )}
                  {item.gpa && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 dark:text-cyan-300 light:text-cyan-700 text-xs sm:text-sm font-semibold">
                      {item.gpa}
                    </span>
                  )}
                  {item.awardDate && (
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Awarded: {item.awardDate}</span>
                    </div>
                  )}
                  {item.period && (
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {item.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] dark:border-white/[0.05] light:border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
