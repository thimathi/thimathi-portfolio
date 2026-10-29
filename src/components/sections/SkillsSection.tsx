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
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export function SkillsSection() {
  const { skillsGrouped } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-4 h-4 text-racing-red" />;
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-racing-red" />;
      case "Server":
        return <Server className="w-4 h-4 text-racing-red" />;
      case "Database":
        return <Database className="w-4 h-4 text-racing-red" />;
      case "Brain":
        return <Brain className="w-4 h-4 text-racing-red" />;
      case "Wrench":
        return <Wrench className="w-4 h-4 text-racing-red" />;
      default:
        return <Layers className="w-4 h-4 text-racing-red" />;
    }
  };

  const getCategoryCode = (category: string) => {
    if (category.includes("Programming")) return "STACK // CORE";
    if (category.includes("Frontend")) return "STACK // CLIENT";
    if (category.includes("Backend")) return "STACK // SERVICES";
    if (category.includes("Data")) return "STACK // DATABASE";
    if (category.includes("AI")) return "STACK // ML-NLP";
    return "STACK // TOOLS";
  };

  const filteredCategories =
    activeFilter === "all"
      ? skillsGrouped
      : skillsGrouped.filter((cat) => cat.category === activeFilter);

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
          <span className="w-2 h-2 bg-racing-red rounded-xs" />
          <span>SECTOR 06 // TECHNICAL CAPABILITIES & TOOLING</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground tracking-tight mb-3">
            Applied Engineering & Analytical Stack
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            A verified, hands-on inventory of languages, frameworks, database architectures, and machine learning toolkits organized by domain.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-xs text-xs font-mono font-medium tracking-wide transition-colors ${
              activeFilter === "all"
                ? "bg-foreground text-background"
                : "bg-surface hover:bg-surface-hover text-muted-foreground border border-surface-border"
            }`}
          >
            ALL CAPABILITIES
          </button>
          {skillsGrouped.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveFilter(cat.category)}
              className={`px-3 py-1.5 rounded-xs text-xs font-mono font-medium tracking-wide transition-colors ${
                activeFilter === cat.category
                  ? "bg-foreground text-background"
                  : "bg-surface hover:bg-surface-hover text-muted-foreground border border-surface-border"
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
              className="bg-surface border border-surface-border hover:border-racing-red/60 transition-colors rounded-xs p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-surface-border">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-xs bg-surface-raised">
                      {getCategoryIcon(group.icon)}
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground font-semibold">
                    {getCategoryCode(group.category)}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-xs bg-surface-muted border border-surface-border text-xs font-mono text-foreground hover:border-racing-red transition-colors"
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
