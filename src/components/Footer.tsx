"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

function ResearchGateIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-current ${className || "w-4 h-4"}`}
      style={{
        maskImage: "url('/researchgate-icon.png')",
        WebkitMaskImage: "url('/researchgate-icon.png')",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15H7v-7h3v7zM8.5 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM17 17h-3v-3.88c0-1.07-.66-1.32-1.07-1.32-.52 0-1.1.37-1.1 1.32V17h-3v-7h3v1.07c.43-.7 1.41-1.32 2.62-1.32 1.96 0 2.55 1.28 2.55 3.65V17z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (typeof window !== "undefined") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
      if (document.scrollingElement) {
        try {
          document.scrollingElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } catch {
          document.scrollingElement.scrollTop = 0;
        }
      }
    }
  };

  return (
    <footer className="relative bg-[#FAFAFA] dark:bg-[#0E0F10] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Row: Left Identity & Right Networks */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-neutral-200/80 dark:border-neutral-800/80">
          
          {/* Identity & Bio */}
          <div className="space-y-3.5 max-w-xl">
            <div>
              <Link
                href="#home"
                className="inline-flex items-center group focus:outline-none mb-2"
                aria-label="Thimathi Dissanayake Portfolio Home"
              >
                <div className="relative h-7 sm:h-8 w-auto flex items-center">
                  <Image
                    src="/thimathi-navbar-logo.png"
                    alt="TD Thimathi Dissanayake"
                    width={220}
                    height={28}
                    className="h-7 sm:h-8 w-auto object-contain dark:hidden group-hover:opacity-80 transition-opacity"
                  />
                  <Image
                    src="/thimathi-navbar-logo-white.png"
                    alt="TD Thimathi Dissanayake"
                    width={220}
                    height={28}
                    className="h-7 sm:h-8 w-auto object-contain hidden dark:block group-hover:opacity-80 transition-opacity"
                  />
                </div>
              </Link>
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                Software Engineer • Data Engineer • AI Researcher
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Dedicated to building resilient software infrastructure, enterprise data pipelines, and affective multimodal AI systems.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-neutral-700/80">
                UoW First-Class (72%)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-neutral-700/80">
                CIRS 2026 Author
              </span>
            </div>
          </div>

          {/* Social Profiles & Networks */}
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <a
              href="https://www.linkedin.com/in/thimathi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] hover:bg-[#9CB1AE]/10 transition-all font-mono text-xs text-neutral-700 dark:text-neutral-300 shadow-2xs"
            >
              <div className="w-4 h-4 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/thimathi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] hover:bg-[#9CB1AE]/10 transition-all font-mono text-xs text-neutral-700 dark:text-neutral-300 shadow-2xs"
            >
              <div className="w-4 h-4 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <GithubIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ResearchGate"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] hover:bg-[#9CB1AE]/10 transition-all font-mono text-xs text-neutral-700 dark:text-neutral-300 shadow-2xs"
            >
              <div className="w-4 h-4 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <ResearchGateIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">ResearchGate</span>
            </a>

            <a
              href="https://www.instagram.com/thimathiii?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] hover:bg-[#9CB1AE]/10 transition-all font-mono text-xs text-neutral-700 dark:text-neutral-300 shadow-2xs"
            >
              <div className="w-4 h-4 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/thimathiii/?locale=ca_ES"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-[#9CB1AE] hover:bg-[#9CB1AE]/10 transition-all font-mono text-xs text-neutral-700 dark:text-neutral-300 shadow-2xs"
            >
              <div className="w-4 h-4 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <FacebookIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">Facebook</span>
            </a>
          </div>

        </div>

        {/* Sitelinks Indexable Internal Navigation */}
        <div className="py-6 border-b border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <nav aria-label="Footer Sitelinks Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
            <Link
              href="/about"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/research"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Research
            </Link>
            <Link
              href="/experience"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700 hidden md:inline">|</span>
            <Link
              href="/projects/baby-mine"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Baby Mine
            </Link>
            <Link
              href="/projects/aurevia"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Aurevia AI
            </Link>
          </nav>
          <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
            Colombo, Sri Lanka
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {profile.name} . All rights reserved.
          </div>

          <motion.a
            href="#home"
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group relative z-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-800 dark:text-neutral-200 text-xs uppercase tracking-wider transition-all cursor-pointer shadow-2xs select-none"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-neutral-500 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
