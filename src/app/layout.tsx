import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { portfolioData } from "@/data/portfolioData";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thimathi.online"),
  title: {
    default: portfolioData.profile.metaTitle,
    template: "%s | Thimathi Dissanayake",
  },
  description: portfolioData.profile.metaDescription,
  authors: [{ name: portfolioData.profile.name, url: "https://www.thimathi.online" }],
  creator: portfolioData.profile.name,
  publisher: portfolioData.profile.name,
  keywords: [
    "Thimathi Dissanayake",
    "Thimathi Manahara",
    "Software Engineer Sri Lanka",
    "Data Engineer Sri Lanka",
    "AI Researcher",
    "Product Designer",
    "Multimodal AI",
    "Speech Emotion Recognition",
    "Affective Computing",
    "Baby Mine",
    "Aurevia",
    "BERT NLP",
    "FastAPI",
    "React Native",
    "Supabase",
    "PostgreSQL",
    "University of Wolverhampton",
    "CINEC Campus",
    "CreativeX Technology",
  ],
  alternates: {
    canonical: "https://www.thimathi.online",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.thimathi.online",
    title: portfolioData.profile.metaTitle,
    description: portfolioData.profile.metaDescription,
    siteName: "Thimathi Dissanayake Portfolio",
    images: [
      {
        url: "/thimathi-portrait.png",
        width: 1152,
        height: 1536,
        alt: "Thimathi Dissanayake — Software Engineer, Data Engineer & AI Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.profile.metaTitle,
    description: portfolioData.profile.metaDescription,
    images: ["/thimathi-portrait.png"],
    creator: "@thimathi",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/thimathi-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#121314" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900 font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
