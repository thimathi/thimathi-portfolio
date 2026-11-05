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
    alternateName: portfolioData.profile.preferredName,
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
    name: "Thimathi Dissanayake — Engineering, Data & AI Research Portfolio",
    description: portfolioData.profile.metaDescription,
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
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
    "@graph": [personEntity, websiteEntity, profilePageEntity],
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
