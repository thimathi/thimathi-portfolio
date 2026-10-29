"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Linkedin,
  Github,
  BookOpen,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { profile, socials } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Direct email composer state (generates mailto without pretending there is an unconfigured backend)
  const [senderName, setSenderName] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2500);
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const primary = profile.emails[0].email;
    const subject = encodeURIComponent(
      senderSubject ? `[Portfolio Inquiry] ${senderSubject}` : "[Portfolio Inquiry] Project / Collaboration"
    );
    const body = encodeURIComponent(
      `Hello Thimathi,\n\n${senderMessage}\n\nBest regards,\n${senderName || "Website Visitor"}`
    );
    window.location.href = `mailto:${primary}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-cyan-500/15 w-[500px] h-[500px] top-1/4 -right-20" />
      <div className="ambient-glow bg-blue-600/15 w-[500px] h-[500px] bottom-10 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white dark:text-white light:text-slate-900 tracking-tight mb-4">
            Let&apos;s Discuss Software, Data Pipelines, or AI Research
          </h2>
          <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
            Whether you are exploring high-scale data engineering workflows, full-stack application development, or affective AI research collaborations, I welcome your message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Methods & Direct Actions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary & Alternative Emails */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1422] dark:bg-[#0e1422] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                Direct Email Inboxes
              </span>

              {profile.emails.map((item) => (
                <div
                  key={item.email}
                  className="p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-cyan-400 block">
                        {item.label}
                      </span>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-sm sm:text-base font-mono font-medium text-white dark:text-white light:text-slate-900 hover:text-cyan-400 transition-colors"
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.email)}
                      aria-label={`Copy email address ${item.email}`}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
                    >
                      {copiedEmail === item.email ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${item.email}`}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Compose</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Phone & Location */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1422] dark:bg-[#0e1422] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                Direct Telephone & Location
              </span>

              <div className="p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-blue-400 block">
                      Direct Mobile
                    </span>
                    <a
                      href={`tel:${profile.phone.tel}`}
                      className="text-sm sm:text-base font-mono font-medium text-white dark:text-white light:text-slate-900 hover:text-cyan-400 transition-colors"
                    >
                      {profile.phone.display}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${profile.phone.tel}`}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-3 px-2 pt-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Based in Sri Lanka • Operating in Indian Standard Time (IST / UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right: Instant Mailto Composer (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#0e1422] dark:bg-[#0e1422] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                Quick Message Composer
              </span>
              <h3 className="font-display font-semibold text-xl text-white dark:text-white light:text-slate-900">
                Send Direct Email In One Click
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Pre-fills your message and launches your native email client directly to{" "}
                <span className="text-cyan-400 font-mono">manaharatd@gmail.com</span> with zero backend reliance.
              </p>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4">
              <div>
                <label
                  htmlFor="senderName"
                  className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                >
                  Your Name / Organization
                </label>
                <input
                  id="senderName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Silva"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="senderSubject"
                  className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                >
                  Topic / Subject
                </label>
                <input
                  id="senderSubject"
                  type="text"
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  placeholder="e.g. Data Engineering Architecture Discussion"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="senderMessage"
                  className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                >
                  Your Message
                </label>
                <textarea
                  id="senderMessage"
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Share a brief overview of your project, timeline, or research topic..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email in Your Mail App</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
