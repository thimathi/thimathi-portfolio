"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { profile } = portfolioData;

  const [senderName, setSenderName] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const topicPresets = [
    "Data Engineering & ETL",
    "Full-Stack Web / Mobile",
    "Affective AI Research",
    "Contract / Engineering Role",
  ];

  const targetEmail = profile.emails[0]?.email || "thimathid@hotmail.com";

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      senderSubject ? `[Inquiry] ${senderSubject}` : "[Inquiry] Professional Collaboration"
    );
    const body = encodeURIComponent(
      `Hello Thimathi,\n\n${senderMessage}\n\nBest regards,\n${senderName || "Website Visitor"}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <span>DIRECT INQUIRIES & COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14] font-display mb-4">
            Let&apos;s Discuss Software, Data Pipelines, or AI Research
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            Whether you are exploring enterprise data pipelines, full-stack application development, or affective AI research collaborations, I welcome your message.
          </p>
        </div>

        {/* Executive Availability Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              AVAILABILITY //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              Open to Roles
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Engineering & Research
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              RESPONSE TIME //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              &lt; 24 Hours
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Fast Turnaround
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              TIMEZONE //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              UTC +5:30
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Global Remote Flexibility
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors shadow-2xs">
            <div className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
              CHANNELS //
            </div>
            <div className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              Email • Phone
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              LinkedIn & ResearchGate
            </div>
          </div>
        </div>

        {/* Main Grid: Direct Channels (Left) & Quick Composer (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Inboxes, Phone & Social Links (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Direct Inboxes Card */}
            <div className="rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100 dark:border-neutral-800/80">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                  DIRECT INBOXES //
                </span>
                <span className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
                  GUARANTEED DELIVERY
                </span>
              </div>

              <div className="space-y-3.5">
                {profile.emails.map((item, idx) => {
                  const isPrimary = idx === 0;

                  return (
                    <a
                      key={item.email}
                      href={`mailto:${item.email}`}
                      className="group p-4 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-neutral-700/70 flex items-center justify-between gap-3 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#9CB1AE]/15 border border-[#9CB1AE]/30 flex items-center justify-center text-[#21433C] dark:text-[#9CB1AE] flex-shrink-0 group-hover:scale-105 transition-transform">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[10px] uppercase text-neutral-500 dark:text-neutral-400 font-semibold">
                              {item.label}
                            </span>
                            {isPrimary && (
                              <span className="px-1.5 py-0.2 rounded-md bg-[#9CB1AE]/20 text-[#1F453E] dark:text-[#B6CBC7] font-mono text-[9px] font-bold">
                                PRIMARY
                              </span>
                            )}
                          </div>
                          <span className="text-xs sm:text-sm font-mono font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#21433C] dark:group-hover:text-[#9CB1AE] transition-colors">
                            {item.email}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Telephony Channel Card */}
            <div className="rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-7 shadow-xs">
              <div className="pb-4 mb-4 border-b border-neutral-100 dark:border-neutral-800/80">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold block">
                  DIRECT TELEPHONY //
                </span>
              </div>

              {/* Phone Channel */}
              <div className="p-4 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-neutral-700/70 flex items-center justify-between gap-3 hover:border-[#9CB1AE]/70 dark:hover:border-[#9CB1AE]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#9CB1AE]/15 border border-[#9CB1AE]/30 flex items-center justify-center text-[#21433C] dark:text-[#9CB1AE] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-neutral-500 dark:text-neutral-400 block font-semibold">
                      DIRECT MOBILE CHANNEL
                    </span>
                    <a
                      href={`tel:${profile.phone.tel}`}
                      className="text-xs sm:text-sm font-mono font-medium text-neutral-900 dark:text-neutral-100 hover:text-[#21433C] dark:hover:text-[#9CB1AE] transition-colors"
                    >
                      {profile.phone.display}
                    </a>
                  </div>
                </div>

                <motion.a
                  whileTap={{ scale: 0.94 }}
                  href={`tel:${profile.phone.tel}`}
                  className="px-3.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-[#9CB1AE] hover:text-neutral-950 dark:hover:bg-[#9CB1AE] dark:hover:text-neutral-950 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-semibold uppercase tracking-wider transition-all"
                >
                  CALL NOW
                </motion.a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Email Composer (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-8 shadow-xs">
            <div className="pb-5 mb-5 border-b border-neutral-100 dark:border-neutral-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                  DISPATCH // QUICK COMPOSER
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#9CB1AE]/20 text-[#1F453E] dark:text-[#B6CBC7] font-mono text-[10px] font-bold">
                  ZERO SERVER DELAY
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-neutral-100 mt-2">
                Direct Dispatch to Native Mail Client
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                Pre-fills your message directly into your mail app addressed to{" "}
                <span className="font-mono font-semibold text-neutral-900 dark:text-neutral-100">{targetEmail}</span>.
              </p>
            </div>

            {/* Quick Topic Preset Pills */}
            <div className="mb-5">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-2">
                FAST TOPIC SELECTION //
              </span>
              <div className="flex flex-wrap gap-1.5">
                {topicPresets.map((preset) => (
                  <motion.button
                    key={preset}
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setSenderSubject(preset)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      senderSubject === preset
                        ? "bg-[#9CB1AE] text-neutral-950 font-bold border border-[#8CA19E] shadow-2xs"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60 hover:bg-[#9CB1AE]/20 hover:border-[#9CB1AE]/50"
                    }`}
                  >
                    {preset}
                  </motion.button>
                ))}
              </div>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4">
              <div>
                <label
                  htmlFor="senderName"
                  className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5"
                >
                  YOUR NAME & ORGANIZATION //
                </label>
                <input
                  id="senderName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Silva (Engineering Lead @ TechCorp)"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/70 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#9CB1AE] focus:ring-1 focus:ring-[#9CB1AE]/40 transition-colors font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="senderSubject"
                  className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5"
                >
                  TOPIC // SUBJECT LINE //
                </label>
                <input
                  id="senderSubject"
                  type="text"
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  placeholder="e.g. Data Pipeline Architecture Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/70 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#9CB1AE] focus:ring-1 focus:ring-[#9CB1AE]/40 transition-colors font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="senderMessage"
                  className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5"
                >
                  MESSAGE CONTENT & SCOPE //
                </label>
                <textarea
                  id="senderMessage"
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Share a brief overview of your inquiry, technical challenge, or collaboration proposal..."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/70 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#9CB1AE] focus:ring-1 focus:ring-[#9CB1AE]/40 transition-colors font-mono leading-relaxed"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-[#9CB1AE] hover:text-neutral-950 dark:hover:bg-[#9CB1AE] dark:hover:text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Email in Mail Client</span>
              </motion.button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
