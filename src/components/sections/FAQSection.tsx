"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    category: "Identity & Background",
    question: "Who is Thimathi Dissanayake?",
    answer:
      "Thimathi Dissanayake is a technology professional based in Sri Lanka working across software engineering, data engineering, product design, and artificial intelligence research. He graduated with First-Class Honours (72%) in Computer Science from the University of Wolverhampton and currently serves as a Data Engineer at CreativeX Technology and Product Designer at NONO AI.",
  },
  {
    category: "Specialisation",
    question: "What does Thimathi Dissanayake specialise in?",
    answer:
      "Thimathi specialises in three complementary disciplines: (1) enterprise data engineering, including relational schema architecture, cloud pipelines, and automated reporting across PostgreSQL, MySQL, Snowflake, and Supabase; (2) cross-platform software and mobile engineering with React Native, TypeScript, and FastAPI; and (3) affective computing research in multimodal AI, fusing deep contextual NLP token representations with acoustic spectrogram analysis.",
  },
  {
    category: "Tech Stack",
    question: "What core technologies and programming languages does Thimathi work with?",
    answer:
      "His technical stack spans TypeScript, Python, SQL, and JavaScript across languages; React, React Native, Next.js, FastAPI, Node.js, and PyTorch across frameworks; Supabase, PostgreSQL, MySQL, and Snowflake across databases; and Tailwind CSS, Framer Motion, and Figma for design systems and UX architecture.",
  },
  {
    category: "Projects",
    question: "What are Thimathi's major software engineering projects?",
    answer:
      "His flagship software engineering projects include Baby Mine, an all-in-one maternal and early childhood support platform built with React Native and Supabase that guides families from pregnancy through age four; and Aurevia, a multimodal AI framework designed to analyze burnout markers and emotional signals from both textual and spoken communications.",
  },
  {
    category: "Research",
    question: "What is the Aurevia AI research project?",
    answer:
      "Aurevia is an affective computing research project exploring workplace burnout detection and emotional well-being monitoring by combining BERT-based textual representations (78% benchmark accuracy) with CNN acoustic spectrogram features (83% benchmark accuracy) through a multimodal late fusion layer that achieves 85% accuracy on evaluated datasets (RAVDESS, TESS, GoEmotions). Prepared as lead author academic output for the 7th CINEC International Research Symposium (CIRS 2026). Note: Aurevia is an affective computing research prototype rather than a clinically validated diagnostic device.",
  },
  {
    category: "Education",
    question: "What are Thimathi Dissanayake's academic credentials?",
    answer:
      "Thimathi earned a Bachelor of Science (Honours) in Computer Science with First-Class Honours (72% overall aggregate) from the University of Wolverhampton (delivered via CINEC Campus). He also holds a Higher National Diploma in Software Engineering with a 3.8 GPA from the National Institute of Business Management (NIBM).",
  },
  {
    category: "Experience",
    question: "What professional industry experience does Thimathi have?",
    answer:
      "Thimathi has delivered enterprise engineering across several organizations: Data Engineer at CreativeX Technology (Pvt) Ltd (cloud data stores, SQL modeling, ETL pipelines); Product Designer at NONO AI (interface architecture, design systems, interactive prototypes); Intern Data Analytics Engineer at CreativeX Technology (data ingestion, schema cleansing, and field verification); and Freelance Full Stack Developer at E-Tech Lab Software Solutions (custom web applications and REST APIs).",
  },
  {
    category: "Collaboration",
    question: "How can engineering teams and organizations collaborate with Thimathi?",
    answer:
      "Organizations, recruiters, and technical collaborators can reach Thimathi directly by emailing thimathid@hotmail.com (primary) or manaharatd@gmail.com (alternative). He is reachable by phone at +94 71 953 1023, and connects professionally on LinkedIn (linkedin.com/in/thimathi) and GitHub (github.com/thimathi).",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#121314] border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
      aria-labelledby="faq-heading"
    >
      {/* Inject FAQ Schema for AI Search Engines & Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-wider mb-5 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#3B7266] dark:text-[#52998B]" />
            <span>KNOWLEDGE BASE // DIRECT ANSWERS</span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.14] mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Direct, verifiable answers regarding engineering specialisations, research methodology, academic credentials, and technical collaboration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-neutral-900/90 border-[#3B7266]/40 dark:border-[#52998B]/40 shadow-xs"
                    : "bg-white/60 dark:bg-neutral-900/40 border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7266]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#3B7266]/10 text-[#3B7266] dark:text-[#52998B] rotate-180"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-light border-t border-neutral-100 dark:border-neutral-800/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

