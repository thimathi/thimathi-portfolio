import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  metadataBase: new URL("https://thimathi-portfolio.pages.dev"),
  title: portfolioData.profile.metaTitle,
  description: portfolioData.profile.metaDescription,
  authors: [{ name: portfolioData.profile.name }],
  creator: portfolioData.profile.name,
  keywords: [
    "Thimathi Dissanayake",
    "Software Engineer",
    "Data Engineer",
    "Product Designer",
    "AI Researcher",
    "Multimodal AI",
    "Affective Computing",
    "FastAPI",
    "React Native",
    "Supabase",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thimathi-portfolio.pages.dev",
    title: portfolioData.profile.metaTitle,
    description: portfolioData.profile.metaDescription,
    siteName: `${portfolioData.profile.name} Portfolio`,
    images: [
      {
        url: "/thimathi-portrait.png",
        width: 1152,
        height: 1536,
        alt: portfolioData.profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.profile.metaTitle,
    description: portfolioData.profile.metaDescription,
    images: ["/thimathi-portrait.png"],
  },
  icons: {
    icon: "/icon",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
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
