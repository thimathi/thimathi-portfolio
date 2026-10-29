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
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-raised border-t border-surface-border pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-surface-border">
          {/* Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-xs overflow-hidden border border-surface-border bg-surface p-0.5 shadow-xs flex-shrink-0">
                <Image
                  src="/thimathi-logo.png"
                  alt="Thimathi Dissanayake Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base text-foreground">
                  {profile.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-sm">
              Software Engineer, Data Engineer, Product Designer, and AI Researcher dedicated to building reliable digital infrastructure and human-centered intelligent systems.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
              <span className="px-2 py-0.5 rounded-xs bg-surface border border-surface-border">
                UoW First-Class (72%)
              </span>
              <span className="px-2 py-0.5 rounded-xs bg-surface border border-surface-border">
                CIRS 2026 Author
              </span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground block mb-2">
              SECTOR INDEX //
            </span>
            <ul className="space-y-2 text-xs font-mono text-muted">
              <li>
                <Link href="#home" className="hover:text-racing-red transition-colors">
                  00. Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-racing-red transition-colors">
                  01. About Me
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-racing-red transition-colors">
                  02. Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-racing-red transition-colors">
                  03. Projects (Baby Mine)
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-racing-red transition-colors">
                  04. Research (Aurevia)
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-racing-red transition-colors">
                  05. Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-racing-red transition-colors">
                  06. Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-racing-red transition-colors">
                  07. Contact Channels
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels & Verified Direct Inboxes (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground block mb-2">
              VERIFIED CHANNELS //
            </span>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://lk.linkedin.com/in/thimathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-xs bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/thimathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-xs bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ResearchGate"
                className="w-8 h-8 rounded-xs bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/thimathiii?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-xs bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/thimathiii/?locale=ca_ES"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-xs bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:manaharatd@gmail.com"
                aria-label="Primary email"
                className="w-8 h-8 rounded-xs bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+94719531023"
                aria-label="Direct phone"
                className="w-8 h-8 rounded-xs bg-surface border border-surface-border hover:border-racing-red hover:text-racing-red flex items-center justify-center text-muted-foreground transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2 font-mono text-[11px] text-muted-foreground space-y-1">
              <div>PRI // <a href="mailto:manaharatd@gmail.com" className="text-foreground hover:text-racing-red">manaharatd@gmail.com</a></div>
              <div>ALT // <a href="mailto:thimathid@hotmail.com" className="text-foreground hover:text-racing-red">thimathid@hotmail.com</a></div>
              <div>TEL // <a href="tel:+94719531023" className="text-foreground hover:text-racing-red">+94 71 953 1023</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {profile.name} // ALL RIGHTS RESERVED
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border text-foreground text-xs uppercase tracking-wider transition-colors"
          >
            <span>BACK TO APEX</span>
            <ArrowUp className="w-3 h-3 text-racing-red" />
          </button>
        </div>
      </div>
    </footer>
  );
}
