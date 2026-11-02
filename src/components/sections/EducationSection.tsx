"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  GraduationCap,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData, EducationEntry } from "@/data/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 bg-surface-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          custom={0}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide">
              Education
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight mb-3">
            Academic Journey
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            A structured academic pathway culminating in a First-Class Honours Computer Science degree.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((item: EducationEntry, idx: number) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              custom={idx + 1}
              className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 mb-6 border-b border-surface-border/60">
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Institution Logos */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-sm border border-surface-border">
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
                        className="hidden sm:flex w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-2 items-center justify-center shadow-sm border border-surface-border"
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
                    <span className="text-xs text-muted-foreground font-medium mb-1 block">
                      {item.degreeType}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground leading-snug">
                      {item.qualification}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1.5 text-sm text-muted">
                      <span className="font-semibold text-foreground/80">
                        {item.institution}
                      </span>
                      {item.deliveryInstitution && (
                        <>
                          <span className="text-surface-border">·</span>
                          <span>{item.deliveryInstitution}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Classification Tags */}
                <div className="flex flex-wrap lg:flex-col lg:items-end gap-2">
                  {item.classification && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-soft text-secondary text-xs font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      {item.classification}
                    </span>
                  )}
                  {item.mark && (
                    <span className="px-3 py-1.5 rounded-full bg-surface-muted border border-surface-border text-xs font-medium text-foreground">
                      {item.mark}
                    </span>
                  )}
                  {item.gpa && (
                    <span className="px-3 py-1.5 rounded-full bg-surface-muted border border-surface-border text-xs font-medium text-foreground">
                      {item.gpa}
                    </span>
                  )}
                  {item.awardDate && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Awarded: {item.awardDate}</span>
                    </div>
                  )}
                  {item.period && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {item.highlights.map((highlight, highlightIdx) => (
                  <div
                    key={highlightIdx}
                    className="p-3.5 rounded-xl bg-surface-raised/50 border border-surface-border/60 flex items-start gap-2.5 text-xs text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
