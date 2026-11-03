"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Custom Social Icons matching personal branding & research output
function ResearchGateIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-current ${className || "w-5 h-5"}`}
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
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
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
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15H7v-7h3v7zM8.5 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM17 17h-3v-3.88c0-1.07-.66-1.32-1.07-1.32-.52 0-1.1.37-1.1 1.32V17h-3v-7h3v1.07c.43-.7 1.41-1.32 2.62-1.32 1.96 0 2.55 1.28 2.55 3.65V17z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#FAFAFA] dark:bg-[#121314] transition-colors"
    >
      {/* Soft Ambient Diffused Lighting - Strictly Non-AI, Non-Neon, Natural Warmth */}
      <div
        className="absolute -top-16 -left-16 w-80 sm:w-[460px] h-80 sm:h-[460px] rounded-full bg-[#FCEEEA] dark:bg-[#201918] opacity-60 dark:opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-[#F5EEFA] dark:bg-[#1D1724] opacity-50 dark:opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/4 w-64 sm:w-[360px] h-64 sm:h-[360px] rounded-full bg-[#EBF4F2] dark:bg-[#15201E] opacity-40 dark:opacity-15 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Delicate Architectural Background Line Motifs */}
      <div
        className="absolute bottom-20 -left-14 sm:left-4 w-44 sm:w-60 h-64 sm:h-80 border border-neutral-300/70 dark:border-neutral-800/70 rounded-t-full border-b-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 -right-16 sm:right-6 w-52 sm:w-72 h-72 sm:h-96 border border-neutral-300/60 dark:border-neutral-800/60 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Vertical Social Channels on Left */}
      <aside
        aria-label="Social media channels"
        className="hidden md:flex absolute left-8 lg:left-14 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20"
      >
        <a
          href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ResearchGate profile"
          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 flex items-center justify-center"
        >
          <ResearchGateIcon className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/thimathi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/thimathi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/thimathiii?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/thimathiii/?locale=ca_ES"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook profile"
          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
        >
          <FacebookIcon className="w-5 h-5" />
        </a>
      </aside>

      {/* Main Center Stage: Arch, Cutout Portrait & Ribbon Wrapping */}
      <div className="relative max-w-5xl mx-auto px-4 w-full flex-1 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[540px] h-[390px] xs:h-[440px] sm:h-[490px] md:h-[530px] flex items-center justify-center">
          
          {/* 1. Muted Slate-Sage Arch Backdrop */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[270px] xs:w-[320px] sm:w-[370px] md:w-[410px] h-[330px] xs:h-[380px] sm:h-[430px] md:h-[470px] rounded-t-full bg-gradient-to-b from-[#99AEAB] via-[#9FB3B0] to-[#A3B6B3] dark:from-[#2B3936] dark:via-[#334441] dark:to-[#384845] z-0 shadow-sm"
            aria-hidden="true"
          />

          {/* 2. Ribbon SVG Layer Behind Subject */}
          <svg
            viewBox="0 0 540 540"
            fill="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="backRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#285249" />
                <stop offset="50%" stopColor="#3B7266" />
                <stop offset="100%" stopColor="#285249" />
              </linearGradient>
            </defs>

            {/* Ascending spiral on the right side connecting from hip up to badge */}
            <path
              d="M 450 380 C 470 350, 460 330, 445 300 C 430 270, 440 260, 460 230 C 480 200, 475 140, 450 95"
              stroke="#3B7266"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-[#52998B]"
            />

            {/* Back curve passing behind lower back: from (450, 380) to (130, 380) */}
            <path
              d="M 450 380 C 380 360, 200 360, 130 380"
              stroke="url(#backRibbonGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="dark:stroke-[#407B6E]"
            />

            {/* Compact flourish loop in negative space on the left */}
            <path
              d="M 130 380 C 95 385, 75 410, 85 430 C 95 448, 118 445, 130 425"
              stroke="#3B7266"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-[#52998B]"
            />

            {/* Connect back curve from right hip (435, 425) into (450, 380) */}
            <path
              d="M 435 425 C 455 410, 460 395, 450 380"
              stroke="url(#backRibbonGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="dark:stroke-[#407B6E]"
            />
          </svg>

          {/* 3. Soft Bottom Grounding Shadow */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[280px] h-12 bg-neutral-900/15 dark:bg-black/50 blur-xl rounded-full z-[1] pointer-events-none"
            aria-hidden="true"
          />

          {/* 4. High-Res Cutout Portrait of Thimathi */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] xs:w-[340px] sm:w-[400px] md:w-[440px] h-[380px] xs:h-[430px] sm:h-[490px] md:h-[530px] z-[2] pointer-events-none select-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
            }}
          >
            <Image
              src="/thimathi-hero.png"
              alt={`${profile.name} - Professional Portrait`}
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 440px"
              className="object-contain object-bottom drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* 5. Ribbon SVG Layer In Front of Subject */}
          <svg
            viewBox="0 0 540 540"
            fill="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
            aria-hidden="true"
          >
            <defs>
              <filter id="ribbonShadow" x="-20%" y="-20%" width="160%" height="180%">
                <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
              </filter>
              <linearGradient id="frontRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34685D" />
                <stop offset="30%" stopColor="#4E998A" />
                <stop offset="50%" stopColor="#5BB3A2" />
                <stop offset="70%" stopColor="#4E998A" />
                <stop offset="100%" stopColor="#34685D" />
              </linearGradient>
            </defs>

            {/* Front Curve: Smooth curve framing lower waist */}
            <path
              d="M 130 425 C 200 455, 360 455, 435 425"
              stroke="url(#frontRibbonGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              filter="url(#ribbonShadow)"
            />
          </svg>

          {/* 6. "COME ON LET'S TALK" Compact Circular Interactive Badge */}
          <Link
            href="#contact"
            aria-label="Come on let's talk - Scroll to contact form"
            className="absolute top-1 sm:top-4 right-1 sm:right-4 md:right-6 z-20 group flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite] transition-all"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="badgeTextCircle"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                </defs>
                <text className="text-[8.5px] font-sans font-bold tracking-[0.22em] fill-neutral-700 dark:fill-neutral-300 uppercase">
                  <textPath href="#badgeTextCircle" startOffset="0%">
                    COME ON LET&apos;S TALK •
                  </textPath>
                </text>
              </svg>

              {/* Center Ring Button */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 border-[#3B7266] bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-center text-[#3B7266] group-hover:bg-[#3B7266] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </div>
          </Link>
        </div>

        {/* Headline & Subtitle Typography */}
        <div className="mt-4 sm:mt-7 text-center relative z-10 px-2 sm:px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.08]">
            {profile.name}
          </h1>
          <p className="mt-2.5 sm:mt-3.5 text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.32em] uppercase text-neutral-500 dark:text-neutral-400">
            SOFTWARE ENGINEER // PRODUCT DESIGNER
          </p>
        </div>

        {/* Mobile-only social icon row */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-5 pt-3.5 border-t border-neutral-200/60 dark:border-neutral-800/60 w-full max-w-xs">
          <a
            href="https://www.researchgate.net/profile/Thimathi-Dissanayake"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
            className="p-1 -m-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center"
          >
            <ResearchGateIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/thimathi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1 -m-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/thimathi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1 -m-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/thimathiii?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-1 -m-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/thimathiii/?locale=ca_ES"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-1 -m-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Client / Partner Brand Slideshow Marquee (Infinite Left-to-Right) */}
      <div className="relative mt-6 sm:mt-8 py-3.5 sm:py-4 border-y border-neutral-200/70 dark:border-neutral-800/70 w-full overflow-hidden bg-neutral-100/40 dark:bg-neutral-900/30">
        {/* Subtle Edge Fade Masks for Smooth Infinite Loop */}
        <div className="relative w-full overflow-hidden mask-marquee">
          <div className="flex w-max items-center animate-marquee-ltr select-none">
            {/* 2 Sets of Logos (each repeated twice to create ultra-wide continuous track with zero blank spaces) */}
            {[0, 1].map((setIndex) => (
              <div
                key={`brand-set-${setIndex}`}
                aria-hidden={setIndex > 0}
                className="flex items-center gap-8 sm:gap-12 lg:gap-14 pr-8 sm:pr-12 lg:pr-14 shrink-0"
              >
                {[0, 1].map((subCycle) => (
                  <React.Fragment key={`cycle-${setIndex}-${subCycle}`}>
                    {/* 1. CreativeX Technology */}
                    <div className="transition-opacity hover:opacity-100 opacity-75 dark:opacity-60 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/creativex-logo.png"
                        alt="CreativeX Technology"
                        width={130}
                        height={34}
                        className="h-5 sm:h-6 w-auto object-contain dark:hidden"
                      />
                      <Image
                        src="/images/creativex-logo-white.png"
                        alt="CreativeX Technology"
                        width={130}
                        height={34}
                        className="h-5 sm:h-6 w-auto object-contain hidden dark:block"
                      />
                    </div>

                    {/* 2. VENTREK */}
                    <div className="transition-opacity hover:opacity-100 opacity-75 dark:opacity-60 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/ventrek-logo.png"
                        alt="VENTREK"
                        width={140}
                        height={36}
                        className="h-5 sm:h-6 w-auto object-contain dark:hidden"
                      />
                      <Image
                        src="/images/ventrek-logo-white.png"
                        alt="VENTREK"
                        width={140}
                        height={36}
                        className="h-5 sm:h-6 w-auto object-contain hidden dark:block"
                      />
                    </div>

                    {/* 3. NONO AI */}
                    <div className="transition-opacity hover:opacity-100 opacity-75 dark:opacity-60 flex items-center justify-center gap-2 shrink-0">
                      <Image
                        src="/images/nono-ai-logo.png"
                        alt="NONO AI"
                        width={26}
                        height={26}
                        className="h-5 sm:h-6 w-auto object-contain"
                      />
                      <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-neutral-800 dark:text-neutral-200">
                        NONO AI
                      </span>
                    </div>

                    {/* 4. Baby Mine */}
                    <div className="transition-opacity hover:opacity-100 opacity-75 dark:opacity-60 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/baby-mine-logo.png"
                        alt="Baby Mine"
                        width={130}
                        height={30}
                        className="h-5 sm:h-6 w-auto object-contain dark:hidden"
                      />
                      <Image
                        src="/images/baby-mine-logo-white.png"
                        alt="Baby Mine"
                        width={130}
                        height={30}
                        className="h-5 sm:h-6 w-auto object-contain hidden dark:block"
                      />
                    </div>

                    {/* 5. CarePlus Pharmacy */}
                    <div className="transition-opacity hover:opacity-100 opacity-75 dark:opacity-60 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/careplus-logo.png"
                        alt="CarePlus Pharmacy"
                        width={140}
                        height={30}
                        className="h-5 sm:h-6 w-auto object-contain dark:hidden"
                      />
                      <Image
                        src="/images/careplus-logo-white.png"
                        alt="CarePlus Pharmacy"
                        width={140}
                        height={30}
                        className="h-5 sm:h-6 w-auto object-contain hidden dark:block"
                      />
                    </div>

                    {/* 6. NovaCare */}
                    <div className="transition-opacity hover:opacity-100 opacity-75 dark:opacity-60 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/novacare-logo.png"
                        alt="NovaCare"
                        width={140}
                        height={30}
                        className="h-5 sm:h-6 w-auto object-contain dark:hidden"
                      />
                      <Image
                        src="/images/novacare-logo-white.png"
                        alt="NovaCare"
                        width={140}
                        height={30}
                        className="h-5 sm:h-6 w-auto object-contain hidden dark:block"
                      />
                    </div>

                    {/* 7. E-Tech Lab */}
                    <div className="transition-opacity hover:opacity-100 opacity-75 dark:opacity-60 flex items-center justify-center gap-2 shrink-0">
                      <Image
                        src="/images/techmark-logo.png"
                        alt="E-Tech Lab"
                        width={24}
                        height={24}
                        className="h-5 sm:h-6 w-auto object-contain"
                      />
                      <span className="font-display font-semibold text-xs sm:text-sm tracking-tight text-neutral-800 dark:text-neutral-200">
                        E-Tech Lab
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
