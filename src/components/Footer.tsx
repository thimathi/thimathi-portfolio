"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Github,
  BookOpen,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ArrowUp,
  Heart,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070b] dark:bg-[#05070b] light:bg-slate-100 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
          {/* Col 1: Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/30 bg-[#080c16] p-0.5 shadow-md flex-shrink-0">
                <Image
                  src="/thimathi-logo.png"
                  alt="Thimathi Dissanayake Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="font-display font-bold text-lg text-white dark:text-white light:text-slate-900">
                {profile.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-sm">
              Software Engineer, Data Engineer, Product Designer, and AI Researcher dedicated to building reliable digital infrastructure and human-centered intelligent systems.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                First-Class Honours (72%)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                CIRS 2026 Academic Author
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-cyan-400 transition-colors">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects (Baby Mine)
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-cyan-400 transition-colors">
                  AI Research (Aurevia)
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-cyan-400 transition-colors">
                  Education & Qualifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Socials & Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 block mb-2">
              Verified Profiles & Channels
            </span>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://lk.linkedin.com/in/thimathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/thimathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ResearchGate"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thimathiii?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/thimathiii/?locale=ca_ES"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:manaharatd@gmail.com"
                aria-label="Primary Email"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+94719531023"
                aria-label="Direct Phone"
                className="w-10 h-10 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-slate-200 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Primary: <a href="mailto:manaharatd@gmail.com" className="text-cyan-400 font-mono">manaharatd@gmail.com</a></div>
              <div>Alt: <a href="mailto:thimathid@hotmail.com" className="text-slate-300 font-mono">thimathid@hotmail.com</a></div>
              <div>Phone: <a href="tel:+94719531023" className="text-slate-300 font-mono">+94 71 953 1023</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {profile.name}. Designed & Built with Next.js & TypeScript.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
