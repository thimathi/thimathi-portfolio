"use client";

import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Server,
  Database,
  Brain,
  Wrench,
  Sparkles,
  Layers,
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export function SkillsSection() {
  const { skillsGrouped } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-cyan-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-teal-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-blue-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-sky-400" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories =
    activeFilter === "all"
      ? skillsGrouped
      : skillsGrouped.filter((cat) => cat.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="ambient-glow bg-cyan-600/10 w-[450px] h-[450px] top-1/3 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Applied Engineering & Analytical Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            A verified, hands-on inventory of languages, frameworks, database architectures, and machine learning toolkits organized by domain.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                : "bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 hover:bg-white/[0.08] text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200"
            }`}
          >
            All Competencies
          </button>
          {skillsGrouped.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveFilter(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeFilter === cat.category
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 hover:bg-white/[0.08] text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group: SkillCategory) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-[#0e1422] dark:bg-[#0e1422] light:bg-white border border-white/[0.07] dark:border-white/[0.07] light:border-slate-200 hover:border-cyan-500/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-100 flex items-center justify-center">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-white dark:text-white light:text-slate-900">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
