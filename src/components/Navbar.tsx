"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ArrowUpRight, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
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
        scrolled
          ? "bg-[#07090e]/85 dark:bg-[#07090e]/85 light:bg-white/85 backdrop-blur-md border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200/80 shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#090d16] dark:bg-[#090d16] light:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-sm tracking-wider text-cyan-400">
                  TD
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-base tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                {portfolioData.profile.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
                Engineer & Researcher
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101625]/60 dark:bg-[#101625]/60 light:bg-slate-100/80 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200/70 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 font-semibold"
                      : "text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/[0.05]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle visual theme"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200/80 hover:bg-white/[0.1] border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            )}

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-cyan-500/15 hover:shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle visual theme"
                className="w-9 h-9 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200/80 border border-white/[0.08] flex items-center justify-center text-slate-300 transition-all"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200/80 border border-white/[0.08] flex items-center justify-center text-slate-200 dark:text-slate-200 light:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-20 z-40 bg-[#07090e]/95 dark:bg-[#07090e]/95 light:bg-white/95 backdrop-blur-xl border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex flex-col p-6 animate-in fade-in duration-200 overflow-y-auto"
        >
          <nav className="flex flex-col gap-2 my-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20"
                      : "text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center text-sm font-semibold tracking-wide shadow-lg shadow-cyan-500/20"
            >
              Contact Thimathi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
