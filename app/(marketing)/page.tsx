import { Metadata } from "next";
import { HeroSection } from "./_sections/Hero";
import { LogoStripSection } from "./_sections/LogoStrip";
import { HowItWorksSection } from "./_sections/HowItWorks";
import { FeaturesSection } from "./_sections/Features";
import { TestimonialsSection } from "./_sections/Testimonials";
import { PricingSection } from "./_sections/Pricing";
import { FAQSection } from "./_sections/FAQ";
import { FinalCTASection } from "./_sections/FinalCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const revalidate = 3600; // ISR - revalidate every hour

export const metadata: Metadata = {
  title: "PageForge - AI-Powered Landing Page Builder",
  description:
    "Create stunning, high-converting landing pages in minutes with AI. No design skills needed. Join 10,000+ creators.",
  keywords: [
    "landing page builder",
    "AI landing page",
    "no-code builder",
    "landing page maker",
    "conversion optimization",
  ],
  authors: [{ name: "PageForge Team" }],
  creator: "PageForge",
  publisher: "PageForge",

  // Open Graph
  openGraph: {
    type: "website",
    url: "https://pageforge.dev",
    title: "PageForge - AI-Powered Landing Page Builder",
    description:
      "Create stunning, high-converting landing pages in minutes with AI. No design skills needed.",
    siteName: "PageForge",
    images: [
      {
        url: "https://pageforge.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "PageForge Landing Page Builder",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    creator: "@pageforge",
    title: "PageForge - AI-Powered Landing Page Builder",
    description:
      "Create stunning, high-converting landing pages in minutes with AI. No design skills needed.",
    images: ["https://pageforge.dev/og-image.png"],
  },

  // Canonical
  alternates: {
    canonical: "https://pageforge.dev",
  },

  // Verification
  verification: {
    google: "google-site-verification-code",
    other: {
      "msvalidate.01": "ms-validation-code",
    },
  },
};

export default function MarketingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-white via-slate-50 to-white">
        <HeroSection />
        <LogoStripSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
