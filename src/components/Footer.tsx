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

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  { href: "https://lk.linkedin.com/in/thimathi", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/thimathi", label: "GitHub", icon: Github },
  { href: "https://www.researchgate.net/profile/Thimathi-Dissanayake", label: "ResearchGate", icon: BookOpen },
  { href: "https://www.instagram.com/thimathiii?utm_source=qr", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/thimathiii/?locale=ca_ES", label: "Facebook", icon: Facebook },
  { href: "mailto:manaharatd@gmail.com", label: "Email", icon: Mail },
  { href: "tel:+94719531023", label: "Phone", icon: Phone },
];

export function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-card border-t border-surface-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-surface-border/60">
          {/* Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-surface-border bg-surface-card p-0.5 shadow-sm flex-shrink-0">
                <Image
                  src="/thimathi-logo.png"
                  alt="Thimathi Dissanayake Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-base text-foreground">
                {profile.name}
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Software Engineer, Data Engineer, Product Designer, and AI Researcher building reliable digital infrastructure and human-centered intelligent systems.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-medium">
                First-Class Honours
              </span>
              <span className="px-3 py-1.5 rounded-full bg-secondary-soft text-secondary text-xs font-medium">
                CIRS 2026 Author
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-sm font-semibold text-foreground block mb-3">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-sm font-semibold text-foreground block mb-3">
              Connect
            </span>

            <div className="flex flex-wrap gap-2">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") || social.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") || social.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border hover:border-accent/30 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-1.5 text-sm text-muted">
              <div>
                <a href="mailto:manaharatd@gmail.com" className="hover:text-accent transition-colors">
                  manaharatd@gmail.com
                </a>
              </div>
              <div>
                <a href="mailto:thimathid@hotmail.com" className="hover:text-accent transition-colors">
                  thimathid@hotmail.com
                </a>
              </div>
              <div>
                <a href="tel:+94719531023" className="hover:text-accent transition-colors">
                  +94 71 953 1023
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-sm font-medium text-foreground hover:text-accent transition-all duration-200"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
