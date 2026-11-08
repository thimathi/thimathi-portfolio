"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const navItems = [
  { name: "Services", href: "/#about" },
  { name: "Portfolio", href: "/#projects" },
  { name: "About", href: "/#experience" },
  { name: "Research", href: "/#research" },
  { name: "Contact Me", href: "/#contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "experience", "research", "contact"];
      const scrollPosition = window.scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#FAFAFA]/95 dark:bg-[#121314]/95 backdrop-blur-md border-b border-neutral-200/70 dark:border-neutral-800/70 shadow-xs"
          : "bg-[#FAFAFA]/70 dark:bg-[#121314]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-50 flex items-center justify-between h-16 sm:h-20">
          
          {/* Left Brand Lockup: Official TD Monogram + Thimathi Dissanayake */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center group focus:outline-none py-1"
            aria-label="Thimathi Dissanayake Portfolio Home"
          >
            <div className="relative h-6 sm:h-7 w-auto flex items-center">
              <Image
                src="/thimathi-navbar-logo.png"
                alt="TD Thimathi Dissanayake"
                width={210}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain dark:hidden group-hover:opacity-80 transition-opacity"
              />
              <Image
                src="/thimathi-navbar-logo-white.png"
                alt="TD Thimathi Dissanayake"
                width={210}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain hidden dark:block group-hover:opacity-80 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const target = item.href.replace("/#", "").replace("#", "");
              const isActive = activeSection === target;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs sm:text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-neutral-900 dark:text-white font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster: GitHub + LinkedIn + Theme Toggle + Pill "Download CV" Button (Desktop md+) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/thimathi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/thimathi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15H7v-7h3v7zM8.5 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM17 17h-3v-3.88c0-1.07-.66-1.32-1.07-1.32-.52 0-1.1.37-1.1 1.32V17h-3v-7h3v1.07c.43-.7 1.41-1.32 2.62-1.32 1.96 0 2.55 1.28 2.55 3.65V17z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              ) : (
                <span className="w-4 h-4 inline-block" />
              )}
            </button>

            <a
              href="mailto:thimathid@hotmail.com?subject=Request%20for%20CV%20-%20Thimathi%20Dissanayake"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs font-semibold tracking-wide transition-colors shadow-xs"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle (Visible below md) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              ) : (
                <span className="w-4 h-4 inline-block" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Collapse navigation menu" : "Expand navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 transition-all focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 stroke-[2.2]" />
              ) : (
                <Menu className="w-4 h-4 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapse Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="md:hidden overflow-hidden bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200 dark:border-neutral-800 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-4 max-h-[calc(100dvh-5rem)] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const target = item.href.replace("/#", "").replace("#", "");
                  const isActive = activeSection === target;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? "text-[#2F5E52] dark:text-[#9CB1AE] font-semibold bg-[#2F5E52]/10 dark:bg-[#9CB1AE]/10"
                          : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-neutral-400 font-mono">/</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-col gap-2.5">
                <a
                  href="mailto:thimathid@hotmail.com?subject=Request%20for%20CV%20-%20Thimathi%20Dissanayake"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center gap-2 text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-xs"
                >
                  <span>Download CV</span>
                  <Download className="w-3.5 h-3.5 stroke-[2.2]" />
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="https://github.com/thimathi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 flex items-center justify-center gap-2 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thimathi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 flex items-center justify-center gap-2 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15H7v-7h3v7zM8.5 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM17 17h-3v-3.88c0-1.07-.66-1.32-1.07-1.32-.52 0-1.1.37-1.1 1.32V17h-3v-7h3v1.07c.43-.7 1.41-1.32 2.62-1.32 1.96 0 2.55 1.28 2.55 3.65V17z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
