import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroSkeleton } from "@/components/ui/hero-skeleton";

// Lazy load hero section with skeleton
const HeroSection = dynamic(() => import("@/components/homepage/hero-section"), {
  loading: () => <HeroSkeleton />
});

// Lazy load below-the-fold components
const AboutSection = dynamic(() => import("@/components/homepage/about-section"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});
const ServicesSection = dynamic(() => import("@/components/homepage/services-section"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});
const ChooseUsSection = dynamic(() => import("@/components/homepage/why-choose-us-section"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});
const Solutions = dynamic(() => import("@/components/homepage/solutions-section"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});
const BlogSection = dynamic(() => import("@/components/homepage/blog-section"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

export const metadata: Metadata = {
  title: "Deciphi Cybersecurity | Protecting Businesses in Qatar",
  description:
    "Deciphi offers expert cybersecurity solutions in Qatar. Stay ahead of threats with our tailored services: network security, compliance, cloud protection, and more.",
  keywords: [
    "Cybersecurity Qatar",
    "Network Security",
    "Data Protection",
    "Cloud Security",
    "Deciphi",
  ],
  openGraph: {
    title: "Deciphi Cybersecurity | Protecting Businesses in Qatar",
    description:
      "Expert cybersecurity solutions in Qatar. Secure your network, cloud, and future with Deciphi.",
    url: "https://www.deciphi.com",
    siteName: "Deciphi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deciphi Cybersecurity Solutions in Qatar",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@deciphi",
    title: "Deciphi Cybersecurity | Protecting Businesses in Qatar",
    description:
      "Stay ahead of evolving cyber threats with Deciphi’s expert cybersecurity solutions in Qatar.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.deciphi.com",
  },
};

export default function Home() {
  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <AboutSection />
      <ServicesSection />
      <ChooseUsSection />
      <Solutions />
      <BlogSection />
    </main>
  );
}
