"use client";

import React from "react";
import {
  Code2,
  Database,
  Cpu,
  Layout,
  Check,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const highlights = [
  "First-Class Honours (72%) — UoW",
  "Lead Author: CIRS 2026 Research",
  "Data Engineer @ CreativeX Technology",
  "Product Designer @ NONO AI",
];

const philosophy = [
  {
    title: "Reliable Systems Over Complexity",
    description:
      "Prioritizing clean schema models, automated checks, and type-safety to eliminate runtime fragility.",
  },
  {
    title: "Evidence-Based Data Engineering",
    description:
      "Extracting, validating, and translating enterprise metrics into actionable data schemas that support high-stakes decisions.",
  },
  {
    title: "Ethical, Multimodal AI",
    description:
      "Investigating affective computing with rigor, acknowledging boundaries between emotional modeling and clinical diagnoses.",
  },
];

export function AboutSection() {
  const { aboutPillars } = portfolioData;

  const getPillarIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-accent";
    switch (name) {
      case "Code2":
        return <Code2 className={iconClass} />;
      case "Database":
        return <Database className={iconClass} />;
      case "Cpu":
        return <Cpu className={iconClass} />;
      case "Layout":
        return <Layout className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-surface-card relative overflow-hidden"
    >
      {/* Subtle background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

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
              <User className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide">
              About Me
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight max-w-3xl leading-[1.15]">
            Bridging software engineering, enterprise data pipelines, and
            intelligent interfaces.
          </h2>
        </motion.div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Main Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-5"
          >
            <motion.p
              variants={fadeInUp}
              custom={0}
              className="text-foreground/90 text-base sm:text-lg leading-relaxed"
            >
              I am a technology professional working across{" "}
              <strong className="text-foreground font-semibold">
                software engineering, data engineering, product design, and
                artificial intelligence research
              </strong>
              . My focus is on building practical, scalable digital solutions
              that integrate reliable system architecture, useful data
              pipelines, and thoughtful user experiences.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-muted text-base leading-relaxed"
            >
              In production environments, I manage relational and cloud datasets
              across PostgreSQL, MySQL, Snowflake, and cloud infrastructure,
              building automated reporting workflows, statistical models, and
              reliable schema transformations.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-muted text-base leading-relaxed"
            >
              Alongside backend and data engineering, my academic research
              investigates affective computing and multimodal machine
              learning—exploring how textual transformer representations (BERT)
              and acoustic speech emotion models (CNNs) can be fused to detect
              burnout-related indicators responsibly.
            </motion.p>

            {/* Achievement Badges */}
            <motion.div
              variants={fadeInUp}
              custom={3}
              className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 bg-accent-soft border border-accent/10 rounded-xl flex items-center gap-3 transition-colors hover:bg-accent/[0.08]"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Core Philosophy Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={1}
            className="lg:col-span-5"
          >
            <div className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-7 shadow-card">
              <h3 className="font-display font-semibold text-lg text-foreground mb-5">
                Core Philosophy
              </h3>

              <div className="space-y-4">
                {philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="group relative rounded-xl bg-surface-raised/50 p-4 transition-all duration-300 hover:bg-surface-hover"
                  >
                    {/* Accent dot */}
                    <div className="absolute left-4 top-[1.35rem] w-1.5 h-1.5 rounded-full bg-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="pl-5">
                      <span className="text-sm font-semibold text-foreground block mb-1">
                        {item.title}
                      </span>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillar Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} custom={0} className="mb-8">
            <h3 className="text-lg font-display font-semibold text-foreground">
              Core Domains
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                custom={idx + 1}
                className="group relative bg-surface border border-surface-border rounded-2xl p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-accent/20"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center mb-5 transition-colors group-hover:bg-accent/15">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="font-display font-semibold text-base text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
