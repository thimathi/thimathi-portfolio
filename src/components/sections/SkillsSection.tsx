"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Brain,
  Wrench,
  Search,
  X,
  Layers,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export function SkillsSection() {
  const { skillsGrouped } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Domain descriptions giving contextual depth to each capability
  const domainDescriptions: Record<string, string> = {
    "Programming & Core Engineering":
      "Type-safe software architectures, object-oriented systems, and algorithmic problem solving across compiled and scripted languages.",
    "Frontend & Mobile Development":
      "Component-driven client systems, state hydration, responsive layouts, and cross-platform native mobile applications.",
    "Backend, APIs & Microservices":
      "High-throughput asynchronous APIs, enterprise service frameworks, and structured microservice communication protocols.",
    "Data Engineering & Databases":
      "Relational schema modeling, cloud data warehousing, ETL transformation pipelines, and high-performance querying.",
    "AI, Machine Learning & NLP":
      "Affective computing research, acoustic speech emotion models, transformer fine-tuning, and multimodal evaluation pipelines.",
    "Cloud, Tools & Methodologies":
      "Containerized deployment, cloud infrastructure provisioning, modern version control, and agile delivery practices.",
  };

  const domainCodes: Record<string, string> = {
    "Programming & Core Engineering": "DOMAIN // CORE",
    "Frontend & Mobile Development": "DOMAIN // CLIENT",
    "Backend, APIs & Microservices": "DOMAIN // SERVICES",
    "Data Engineering & Databases": "DOMAIN // DATABASE",
    "AI, Machine Learning & NLP": "DOMAIN // ML-RESEARCH",
    "Cloud, Tools & Methodologies": "DOMAIN // DEVOPS",
  };

  const getCategoryIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 text-neutral-700 dark:text-neutral-300";
    switch (iconName) {
      case "Code":
        return <Code2 className={iconClass} />;
      case "Smartphone":
        return <Smartphone className={iconClass} />;
      case "Server":
        return <Server className={iconClass} />;
      case "Database":
        return <Database className={iconClass} />;
      case "Brain":
        return <Brain className={iconClass} />;
      case "Wrench":
        return <Wrench className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  // Filtered categories based on selected tab and active search query
  const filteredCategories = useMemo(() => {
    let result = skillsGrouped;

    if (activeFilter !== "all") {
      result = result.filter((cat) => cat.category === activeFilter);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      result = result
        .map((cat) => {
          const categoryMatches = cat.category.toLowerCase().includes(q);
          const matchingSkills = cat.skills.filter((skill) =>
            skill.name.toLowerCase().includes(q)
          );

          if (categoryMatches || matchingSkills.length > 0) {
            return {
              ...cat,
              skills: categoryMatches ? cat.skills : matchingSkills,
            };
          }
          return null;
        })
        .filter((cat): cat is SkillCategory => cat !== null);
    }

    return result;
  }, [skillsGrouped, activeFilter, searchQuery]);

  // Total count of verified skills across all categories
  const totalSkillsCount = useMemo(() => {
    return skillsGrouped.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [skillsGrouped]);

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <span>TECHNICAL PROFICIENCIES & TOOLING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14] font-display mb-4">
            Applied Engineering & Analytical Stack
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            A verified, hands-on inventory of languages, frameworks, cloud architectures, database systems, and machine learning toolkits organized by operational domain.
          </p>
        </div>

        {/* High-Level Capability Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              DOMAINS //
            </div>
            <div className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
              {skillsGrouped.length} Pillars
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Core to Specialized AI
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              TOOLCHAIN //
            </div>
            <div className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
              {totalSkillsCount}+ Tools
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Production Verified
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              PRACTICE //
            </div>
            <div className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
              Data & Full-Stack
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Industry Experience
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              RESEARCH //
            </div>
            <div className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
              Multimodal AI
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              CIRS 2026 Lead Author
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          
          {/* Animated Category Filter Pills with Sage Click Indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 w-full lg:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* "All" button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveFilter("all")}
              className="relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide transition-colors cursor-pointer select-none flex-shrink-0 sm:flex-shrink"
            >
              {activeFilter === "all" ? (
                <motion.span
                  layoutId="activeFilterBubble"
                  className="absolute inset-0 rounded-full bg-[#9CB1AE] shadow-xs border border-[#8CA19E] dark:border-[#B2C5C2]/40"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              ) : (
                <span className="absolute inset-0 rounded-full bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/90" />
              )}
              <span
                className={`relative z-10 transition-colors ${
                  activeFilter === "all"
                    ? "text-neutral-950 font-bold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                }`}
              >
                All ({totalSkillsCount})
              </span>
            </motion.button>

            {skillsGrouped.map((cat) => {
              // Compact friendly labels for responsive rendering
              const label = cat.category
                .replace("Programming & Core Engineering", "Core")
                .replace("Frontend & Mobile Development", "Frontend & Mobile")
                .replace("Backend, APIs & Microservices", "Backend & APIs")
                .replace("Data Engineering & Databases", "Data & SQL")
                .replace("AI, Machine Learning & NLP", "AI & ML")
                .replace("Cloud, Tools & Methodologies", "Cloud & Tools");

              const isSelected = activeFilter === cat.category;

              return (
                <motion.button
                  key={cat.category}
                  type="button"
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setActiveFilter(cat.category)}
                  className="relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide transition-colors cursor-pointer select-none flex-shrink-0 sm:flex-shrink"
                >
                  {isSelected ? (
                    <motion.span
                      layoutId="activeFilterBubble"
                      className="absolute inset-0 rounded-full bg-[#9CB1AE] shadow-xs border border-[#8CA19E] dark:border-[#B2C5C2]/40"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute inset-0 rounded-full bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/90" />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isSelected
                        ? "text-neutral-950 font-bold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                    }`}
                  >
                    {label} ({cat.skills.length})
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Interactive Search Field */}
          <div className="relative w-full lg:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Python, SQL)..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 text-xs text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#9CB1AE] focus:ring-1 focus:ring-[#9CB1AE]/40 transition-colors shadow-2xs font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid with Framer Motion AnimatePresence */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80">
            <Cpu className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-1">
              No matching technologies found
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
              Try searching with a different keyword or reset the filter.
            </p>
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-[#9CB1AE] text-neutral-950 font-mono text-xs font-bold hover:bg-[#8AA19E] transition-colors shadow-2xs cursor-pointer"
            >
              Reset Filters
            </motion.button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((group: SkillCategory) => {
              const description =
                domainDescriptions[group.category] ||
                "Production-tested technical capabilities and workflows.";
              const domainCode = domainCodes[group.category] || "DOMAIN // STACK";

              return (
                <div
                  key={group.category}
                  className="group rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-7 shadow-xs hover:shadow-sm hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-all duration-300 flex flex-col justify-between"
                >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-neutral-100 dark:border-neutral-800/80">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9CB1AE]/15 group-hover:border-[#9CB1AE]/40 transition-colors">
                            {getCategoryIcon(group.icon)}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-base text-neutral-900 dark:text-neutral-100 leading-snug">
                              {group.category}
                            </h3>
                          </div>
                        </div>

                        <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 font-semibold flex-shrink-0">
                          {domainCode}
                        </span>
                      </div>

                      {/* Contextual Domain Narrative */}
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                        {description}
                      </p>

                      {/* Interactive Skill Chips */}
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => {
                          const isMatch =
                            searchQuery.trim() !== "" &&
                            skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim());

                          return (
                            <motion.button
                              key={skill.name}
                              type="button"
                              whileTap={{ scale: 0.92 }}
                              onClick={() => {
                                if (searchQuery.toLowerCase() === skill.name.toLowerCase()) {
                                  setSearchQuery("");
                                } else {
                                  setSearchQuery(skill.name);
                                }
                              }}
                              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer select-none ${
                                isMatch
                                  ? "bg-[#9CB1AE] text-neutral-950 font-bold border border-[#8CA19E] shadow-2xs"
                                  : "bg-neutral-50 dark:bg-neutral-800/70 border border-neutral-200/70 dark:border-neutral-700/70 text-neutral-700 dark:text-neutral-300 hover:bg-[#9CB1AE]/15 hover:border-[#9CB1AE]/60 hover:text-neutral-950 dark:hover:text-neutral-100"
                              }`}
                              title={`Click to filter by ${skill.name}`}
                            >
                              {skill.name}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Card Bottom Ledger */}
                    <div className="flex items-center justify-between pt-5 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover:text-[#9CB1AE] transition-colors" />
                        <span>{group.skills.length} Verified Capabilities</span>
                      </div>
                      <span className="text-[10px] tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                        ACTIVE STACK
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

      </div>
    </section>
  );
}
