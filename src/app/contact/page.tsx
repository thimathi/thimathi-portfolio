import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact Thimathi Dissanayake | Software Engineer & AI Consultant",
  description:
    "Get in touch with Thimathi Dissanayake for software engineering roles, data engineering contracts, AI research collaborations, or technical consultations.",
  alternates: {
    canonical: "https://www.thimathi.online/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact & Collaboration — Thimathi Dissanayake",
    description:
      "Direct channels for software engineering roles, enterprise data initiatives, and AI research inquiries with Thimathi Dissanayake.",
    url: "https://www.thimathi.online/contact",
    images: [
      {
        url: "/thimathi-portrait.png",
        width: 1152,
        height: 1536,
        alt: "Contact Thimathi Dissanayake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Thimathi Dissanayake",
    description:
      "Professional communication channels and collaboration inquiries.",
    images: ["/thimathi-portrait.png"],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.thimathi.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.thimathi.online/contact",
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.thimathi.online/contact/#contactpage",
    url: "https://www.thimathi.online/contact",
    name: "Contact Thimathi Dissanayake",
    description:
      "Direct communication and consultation inquiry page for Thimathi Dissanayake.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.thimathi.online/#website",
      name: "Thimathi Dissanayake Portfolio",
      url: "https://www.thimathi.online",
    },
    mainEntity: {
      "@type": "Person",
      "@id": "https://www.thimathi.online/#person",
      name: portfolioData.profile.name,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "professional inquiries",
        email: "thimathid@hotmail.com",
        telephone: "+94719531023",
        availableLanguage: ["English", "Sinhala"],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900">
      <Navbar />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        {/* Breadcrumb Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900 dark:text-neutral-200 font-semibold">
                Contact
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9CB1AE] dark:text-[#9CB1AE] font-semibold">
              COMMUNICATION & INQUIRIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 mb-4">
              Contact & Professional Inquiries
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Available for full-time software engineering roles, enterprise data
              engineering contracts, and AI research collaborations. Reach out directly
              via email or through the verified channels below.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
