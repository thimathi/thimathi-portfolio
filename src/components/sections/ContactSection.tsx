"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

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
    <section id="contact" className="py-20 sm:py-24 border-b border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sector Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
          <span className="w-2 h-2 bg-racing-red rounded-xs" />
          <span>SECTOR 08 // COMMS TERMINAL & DIRECT CHANNELS</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground tracking-tight mb-3">
            Let&apos;s Discuss Software, Data Pipelines, or AI Research
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Whether you are exploring high-scale data engineering workflows, full-stack application development, or affective AI research collaborations, I welcome your message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Inboxes & Phone (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Direct Inboxes Card */}
            <div className="bg-surface border border-surface-border rounded-xs p-6 shadow-sm space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">
                DIRECT INBOXES //
              </span>

              {profile.emails.map((item) => (
                <div
                  key={item.email}
                  className="p-4 bg-surface-muted border border-surface-border/60 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xs bg-surface border border-surface-border flex items-center justify-center text-racing-red flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                        {item.label}
                      </span>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-xs sm:text-sm font-mono font-medium text-foreground hover:text-racing-red transition-colors"
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
                      className="px-2.5 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                    >
                      {copiedEmail === item.email ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-racing-red" />
                          <span className="text-racing-red font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${item.email}`}
                      className="px-2.5 py-1.5 rounded-xs bg-foreground text-background hover:bg-racing-red hover:text-white text-xs font-mono font-medium uppercase tracking-wider transition-colors"
                    >
                      <span>WRITE</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Telephone & Coordinates */}
            <div className="bg-surface border border-surface-border rounded-xs p-6 shadow-sm space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">
                TELEPHONY & LOCATION //
              </span>

              <div className="p-4 bg-surface-muted border border-surface-border/60 rounded-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xs bg-surface border border-surface-border flex items-center justify-center text-foreground flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                      Direct Mobile Channel
                    </span>
                    <a
                      href={`tel:${profile.phone.tel}`}
                      className="text-xs sm:text-sm font-mono font-medium text-foreground hover:text-racing-red transition-colors"
                    >
                      {profile.phone.display}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${profile.phone.tel}`}
                  className="px-3 py-1.5 rounded-xs bg-surface hover:bg-surface-hover border border-surface-border text-foreground text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  CALL NOW
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-racing-red" />
                <span>Base: Sri Lanka (Indian Standard Time // UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Composer (6 cols) */}
          <div className="lg:col-span-6 bg-surface border border-surface-border rounded-xs p-6 sm:p-7 shadow-sm">
            <div className="pb-4 mb-5 border-b border-surface-border">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1">
                DISPATCH // QUICK COMPOSER
              </span>
              <h3 className="font-display font-bold text-lg text-foreground">
                Direct Dispatch to Native Mail Client
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Pre-fills your message directly into your mail app directed to{" "}
                <span className="font-mono font-semibold text-foreground">manaharatd@gmail.com</span> with zero server delay.
              </p>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4">
              <div>
                <label
                  htmlFor="senderName"
                  className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1"
                >
                  NAME // ORGANIZATION
                </label>
                <input
                  id="senderName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Silva"
                  className="w-full px-3.5 py-2.5 rounded-xs bg-surface-muted border border-surface-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-racing-red transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="senderSubject"
                  className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1"
                >
                  TOPIC // SUBJECT LINE
                </label>
                <input
                  id="senderSubject"
                  type="text"
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  placeholder="e.g. Data Pipeline Architecture Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-xs bg-surface-muted border border-surface-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-racing-red transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="senderMessage"
                  className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1"
                >
                  MESSAGE CONTENT //
                </label>
                <textarea
                  id="senderMessage"
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Share a brief overview of your inquiry, technical challenge, or collaboration proposal..."
                  className="w-full px-3.5 py-2.5 rounded-xs bg-surface-muted border border-surface-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-racing-red transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xs bg-foreground text-background hover:bg-racing-red hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Email in Mail Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
