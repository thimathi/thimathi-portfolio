import React from "react";
import { portfolioData } from "@/data/portfolioData";

const SITE_URL = "https://www.thimathi.online";

export function StructuredData() {
  const verifiedSocials = portfolioData.socials.map((s) => s.url.split("?")[0]);

  const personEntity = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: portfolioData.profile.name,
    givenName: "Thimathi",
    familyName: "Dissanayake",
    alternateName: [
      portfolioData.profile.preferredName,
      "Thimathi Manahara",
      "Thimathi Manahara Dissanayake",
    ],
    url: SITE_URL,
    image: `${SITE_URL}${portfolioData.profile.portrait}`,
    jobTitle: [
      "Software Engineer",
      "Data Engineer",
      "Product Designer",
      "AI Researcher",
    ],
    description: portfolioData.profile.intro,
    gender: "https://schema.org/Male",
    nationality: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    worksFor: {
      "@type": "Organization",
      name: "CreativeX Technology (Pvt) Ltd",
      url: "https://creativexlab.online/",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Wolverhampton",
        url: "https://www.wlv.ac.uk/",
      },
      {
        "@type": "EducationalOrganization",
        name: "CINEC Campus",
        url: "https://www.cinec.edu/",
      },
      {
        "@type": "EducationalOrganization",
        name: "National Institute of Business Management (NIBM)",
        url: "https://www.nibm.lk/",
      },
    ],
    knowsAbout: [
      "Software Engineering",
      "Data Engineering",
      "Multimodal Artificial Intelligence",
      "Affective Computing",
      "Natural Language Processing",
      "Speech Emotion Recognition",
      "Deep Learning",
      "React Native",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Product Design & UX Systems",
    ],
    sameAs: verifiedSocials,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: "thimathid@hotmail.com",
      telephone: "+94719531023",
      availableLanguage: ["English", "Sinhala"],
    },
  };

  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Thimathi Dissanayake",
    alternateName: [
      "Thimathi Dissanayake Portfolio",
      "Thimathi Manahara",
      "Thimathi Online",
      "Thimathi",
    ],
    description: portfolioData.profile.metaDescription,
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    hasPart: [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/about`,
        name: "About Thimathi Dissanayake",
        url: `${SITE_URL}/about`,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/projects`,
        name: "Software Engineering & AI Projects",
        url: `${SITE_URL}/projects`,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/research`,
        name: "Aurevia: Multimodal AI & Emotion Research",
        url: `${SITE_URL}/research`,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/experience`,
        name: "Professional Experience & Education",
        url: `${SITE_URL}/experience`,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/contact`,
        name: "Contact & Collaboration",
        url: `${SITE_URL}/contact`,
      },
    ],
  };

  const sitelinksNavigation = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#sitelinks`,
    name: "Primary Sitelinks Navigation",
    description: "Main sections and destinations on Thimathi Dissanayake Portfolio",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "About",
        description:
          "Professional background, engineering philosophy, and academic credentials of Thimathi Dissanayake.",
        url: `${SITE_URL}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Projects",
        description:
          "Production software applications, full-stack systems, and architectural case studies.",
        url: `${SITE_URL}/projects`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Research",
        description:
          "Aurevia multimodal AI research on speech emotion recognition and affective computing presented at CIRS 2026.",
        url: `${SITE_URL}/research`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Experience",
        description:
          "Career history at CreativeX Technology, enterprise data pipelines, and education at University of Wolverhampton.",
        url: `${SITE_URL}/experience`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Contact",
        description:
          "Direct communication channels, professional inquiries, and collaboration opportunities.",
        url: `${SITE_URL}/contact`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Baby Mine Platform",
        description:
          "Case study of the maternal healthcare companion app built with React Native and Supabase.",
        url: `${SITE_URL}/projects/baby-mine`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "Aurevia AI Research",
        description:
          "Dual-stream multimodal emotion recognition pipeline presented at CIRS 2026.",
        url: `${SITE_URL}/projects/aurevia`,
      },
    ],
  };

  const profilePageEntity = {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: "Thimathi Dissanayake | Official Portfolio & Profile",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
    dateModified: new Date().toISOString().split("T")[0],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      personEntity,
      websiteEntity,
      sitelinksNavigation,
      profilePageEntity,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
