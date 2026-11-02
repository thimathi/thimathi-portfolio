"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

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
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          custom={0}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-accent tracking-wide">
              Contact
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            Whether you&apos;re exploring data engineering workflows, full-stack development, or AI research collaborations, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={1}
            className="lg:col-span-5 space-y-5"
          >
            {/* Email Cards */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 shadow-card space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                Email Addresses
              </h3>

              {profile.emails.map((item) => (
                <div
                  key={item.email}
                  className="p-4 bg-surface-raised/50 border border-surface-border/60 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-accent flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">
                        {item.label}
                      </span>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.email)}
                    aria-label={`Copy email address ${item.email}`}
                    className="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                  >
                    {copiedEmail === item.email ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Phone & Location */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 shadow-card space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                Phone & Location
              </h3>

              <div className="p-4 bg-surface-raised/50 border border-surface-border/60 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center text-foreground flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">
                      Direct Line
                    </span>
                    <a
                      href={`tel:${profile.phone.tel}`}
                      className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {profile.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Sri Lanka (UTC+5:30)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Email Composer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={2}
            className="lg:col-span-7 bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8 shadow-card"
          >
            <div className="pb-5 mb-6 border-b border-surface-border/60">
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                Send a Message
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                This form pre-fills your message directly into your mail client — no servers, zero delay.
              </p>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-5">
              <div>
                <label
                  htmlFor="senderName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  id="senderName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Silva"
                  className="w-full px-4 py-3 rounded-xl bg-surface-raised border border-surface-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="senderSubject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  id="senderSubject"
                  type="text"
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  placeholder="e.g. Data Pipeline Architecture Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-surface-raised border border-surface-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="senderMessage"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="senderMessage"
                  rows={5}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Share your inquiry, technical challenge, or collaboration proposal..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-raised border border-surface-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Open in Mail Client</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
