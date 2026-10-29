"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
} from "lucide-react";
import { portfolioData, EducationEntry } from "@/data/portfolioData";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-24 border-b border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
          <span className="w-2 h-2 bg-racing-red rounded-xs" />
          <span>SECTOR 07 // ACADEMIC LEDGER & QUALIFICATIONS</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground tracking-tight mb-3">
            Education & Progressive Academic Pathway
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            A structured, verified academic journey culminating in a First-Class Honours Computer Science degree specializing in Software Engineering.
          </p>
        </div>

        {/* Education Ledger Cards */}
        <div className="space-y-6">
          {education.map((item: EducationEntry, idx: number) => (
            <div
              key={item.id}
              className="bg-surface border border-surface-border rounded-xs p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 mb-6 border-b border-surface-border">
                {/* Institution Logos & Degree Title */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xs bg-white p-2 flex items-center justify-center shadow-xs border border-surface-border">
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
                        className="hidden sm:flex w-14 h-14 sm:w-16 sm:h-16 rounded-xs bg-white p-2 items-center justify-center shadow-xs border border-surface-border"
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
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                      0{idx + 1} // {item.degreeType}
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground leading-snug">
                      {item.qualification}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-xs sm:text-sm text-muted">
                      <span className="font-semibold text-foreground">
                        {item.institution}
                      </span>
                      {item.deliveryInstitution && (
                        <>
                          <span>•</span>
                          <span>Delivered at: {item.deliveryInstitution}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Classification / Academic Merit Tags */}
                <div className="flex flex-wrap lg:flex-col lg:items-end gap-1.5 font-mono text-xs">
                  {item.classification && (
                    <span className="px-2.5 py-1 rounded-xs bg-racing-red-soft border border-racing-red/20 text-racing-red font-semibold uppercase">
                      {item.classification}
                    </span>
                  )}
                  {item.mark && (
                    <span className="px-2 py-0.5 rounded-xs bg-surface-muted border border-surface-border text-foreground font-medium">
                      {item.mark}
                    </span>
                  )}
                  {item.gpa && (
                    <span className="px-2 py-0.5 rounded-xs bg-surface-muted border border-surface-border text-foreground font-medium">
                      {item.gpa}
                    </span>
                  )}
                  {item.awardDate && (
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span>Awarded: {item.awardDate}</span>
                    </div>
                  )}
                  {item.period && (
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span>{item.period}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {item.highlights.map((highlight, highlightIdx) => (
                  <div
                    key={highlightIdx}
                    className="p-3 rounded-xs bg-surface-muted border border-surface-border/60 flex items-start gap-2.5 text-xs text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-xs bg-racing-red mt-1.5 flex-shrink-0" />
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
