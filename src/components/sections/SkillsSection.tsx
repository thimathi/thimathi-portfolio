"use client";

import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Server,
  Database,
  Brain,
  Wrench,
  Layers,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function SkillsSection() {
  const { skillsGrouped } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    const cls = "w-5 h-5 text-accent";
    switch (iconName) {
      case "Code":
        return <Code className={cls} />;
      case "Smartphone":
        return <Smartphone className={cls} />;
      case "Server":
        return <Server className={cls} />;
      case "Database":
        return <Database className={cls} />;
      case "Brain":
        return <Brain className={cls} />;
      case "Wrench":
        return <Wrench className={cls} />;
      default:
        return <Layers className={cls} />;
    }
  };

  const filteredCategories =
    activeFilter === "all"
      ? skillsGrouped
      : skillsGrouped.filter((cat) => cat.category === activeFilter);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide">
              Skills & Technologies
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight mb-3">
            Technical Toolkit
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            Languages, frameworks, databases, and machine learning tools organized by domain expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeFilter === "all"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "bg-surface-card hover:bg-surface-hover text-muted-foreground border border-surface-border"
            }`}
          >
            All
          </button>
          {skillsGrouped.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveFilter(cat.category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.category
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "bg-surface-card hover:bg-surface-hover text-muted-foreground border border-surface-border"
              }`}
            >
              {cat.category.split(" & ")[0]}
            </button>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group: SkillCategory, idx: number) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              custom={idx}
              className="group bg-surface-card border border-surface-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-surface-border/60">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  {getCategoryIcon(group.icon)}
                </div>
                <h3 className="font-display font-semibold text-base text-foreground">
                  {group.category}
                </h3>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg bg-surface-raised border border-surface-border/60 text-xs font-medium text-foreground/80 hover:border-accent/30 hover:text-accent transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
