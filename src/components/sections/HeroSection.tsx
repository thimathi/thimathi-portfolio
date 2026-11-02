"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  BookOpen,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const portraitVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
  },
};

const roles = [
  "Software Engineer",
  "Data Engineer",
  "Product Designer",
  "AI Researcher",
];

const socialLinks = [
  {
    href: "https://lk.linkedin.com/in/thimathi",
    label: "LinkedIn profile",
    icon: Linkedin,
  },
  {
    href: "https://github.com/thimathi",
    label: "GitHub profile",
    icon: Github,
  },
  {
    href: "https://www.researchgate.net/profile/Thimathi-Dissanayake",
    label: "ResearchGate profile",
    icon: BookOpen,
  },
  {
    href: "mailto:manaharatd@gmail.com",
    label: "Primary email",
    icon: Mail,
  },
];

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-secondary/[0.04] blur-[120px]" />
        <div className="absolute -bottom-20 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div className="mb-6" variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-accent-soft text-accent border border-accent/10">
                <Sparkles className="w-3.5 h-3.5" />
                {profile.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] tracking-tight text-foreground leading-[1.08] mb-5"
              variants={itemVariants}
            >
              {profile.name}
            </motion.h1>

            {/* Role Badges */}
            <motion.div className="flex flex-wrap gap-2 mb-6" variants={itemVariants}>
              {roles.map((role, idx) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface-card text-muted-foreground border border-surface-border hover:border-accent/30 hover:text-accent transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-display font-semibold tracking-tight mb-5 text-gradient"
              variants={itemVariants}
            >
              {profile.tagline}
            </motion.p>

            {/* Intro paragraph */}
            <motion.p
              className="text-base sm:text-[17px] text-muted leading-relaxed max-w-xl mb-8"
              variants={itemVariants}
            >
              {profile.intro}
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
              variants={itemVariants}
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span>{profile.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-10"
              variants={itemVariants}
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-sm shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-transparent text-foreground font-semibold text-sm border border-surface-border hover:border-accent/40 hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-2.5"
              variants={itemVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-card hover:bg-surface-hover border border-surface-border hover:border-accent/30 text-muted-foreground hover:text-accent transition-all duration-200"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Decorative gradient glow behind portrait */}
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/15 via-accent/5 to-secondary/10 blur-2xl opacity-60"
                aria-hidden="true"
              />

              {/* Card container */}
              <div className="relative rounded-2xl overflow-hidden bg-surface-card border border-surface-border shadow-card">
                {/* Portrait Image */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={profile.portrait}
                    alt={`${profile.name} — Professional Portrait`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-[center_12%]"
                  />
                  {/* Subtle bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 text-sm font-medium">
                      {profile.name}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating status card — top right */}
              <motion.div
                className="absolute -top-3 -right-3 px-3 py-2 rounded-xl bg-surface-card border border-surface-border shadow-card"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
