"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const navItems = [
  { name: "About", href: "#about", code: "01" },
  { name: "Experience", href: "#experience", code: "02" },
  { name: "Projects", href: "#projects", code: "03" },
  { name: "Research", href: "#research", code: "04" },
  { name: "Skills", href: "#skills", code: "05" },
  { name: "Education", href: "#education", code: "06" },
  { name: "Contact", href: "#contact", code: "07" },
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

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

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
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-surface-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-surface-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Brand Technical Lockup */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-racing-red p-1 rounded-sm"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-sm overflow-hidden border border-surface-border bg-surface-card p-0.5 shadow-sm group-hover:border-racing-red transition-colors flex-shrink-0">
              <Image
                src="/thimathi-logo.png"
                alt="Thimathi Dissanayake Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm tracking-tight text-foreground group-hover:text-racing-red transition-colors">
                  {portfolioData.profile.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Software · Data · AI Research
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean Editorial with Monospace Sector Codes */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors relative rounded-sm ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[10px] text-muted-foreground mr-1 opacity-70">
                    {item.code}.
                  </span>
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-racing-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster: Theme Toggle & Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme mode"
                className="w-8 h-8 rounded-sm bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>
            )}

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-foreground text-background hover:bg-racing-red hover:text-white text-xs font-mono font-medium uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Contact</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme mode"
                className="w-8 h-8 rounded-sm bg-surface border border-surface-border flex items-center justify-center text-muted-foreground"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-9 h-9 rounded-sm bg-surface border border-surface-border flex items-center justify-center text-foreground"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-xl border-t border-surface-border flex flex-col p-6 animate-in fade-in duration-150 overflow-y-auto"
        >
          <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest pb-3 border-b border-surface-border mb-4">
            Navigation Index
          </div>
          <nav className="flex flex-col gap-1 my-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 border-b border-surface-border/40 text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-racing-red font-semibold bg-surface-hover/50"
                      : "text-foreground hover:bg-surface-hover/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.code}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-racing-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-surface-border flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-sm bg-foreground text-background text-center text-xs font-mono font-medium uppercase tracking-wider hover:bg-racing-red hover:text-white transition-colors"
            >
              Initiate Contact // Send Message
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
