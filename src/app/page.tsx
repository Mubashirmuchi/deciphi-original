import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroSkeleton } from "@/components/ui/hero-skeleton";

// Lazy load hero section with skeleton
const HeroSection = dynamic(
  () => import("@/components/homepage/hero-section"),
  {
    loading: () => <HeroSkeleton />,
  }
);

// Lazy load below-the-fold components
const AboutSection = dynamic(
  () => import("@/components/homepage/about-section"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);
const ServicesSection = dynamic(
  () => import("@/components/homepage/services-section"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);
const ChooseUsSection = dynamic(
  () => import("@/components/homepage/why-choose-us-section"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);
const Solutions = dynamic(
  () => import("@/components/homepage/solutions-section"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);
const BlogSection = dynamic(
  () => import("@/components/homepage/blog-section"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);

export const metadata: Metadata = {
  title: "Deciphi Cybersecurity | Expert Cybersecurity Solutions in Qatar",
  description:
    "Leading cybersecurity company in Qatar providing expert network security, data protection, cloud security, and compliance solutions. Protect your business from evolving cyber threats.",
  keywords: [
    "cybersecurity Qatar",
    "network security Qatar",
    "data protection Qatar",
    "cloud security",
    "cybersecurity consulting",
    "penetration testing Qatar",
    "security compliance",
    "cyber threat protection",
    "information security",
    "cybersecurity services",
  ],
  authors: [{ name: "Deciphi Cybersecurity Team" }],
  creator: "Deciphi",
  publisher: "Deciphi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_QA",
    url: "https://deciphi.com",
    siteName: "Deciphi Cybersecurity",
    title: "Deciphi Cybersecurity | Expert Cybersecurity Solutions in Qatar",
    description:
      "Leading cybersecurity company in Qatar providing expert network security, data protection, and compliance solutions. Protect your business from cyber threats.",
    images: [
      {
        url: "/images/Rectangle42.png",
        width: 1200,
        height: 630,
        alt: "Deciphi Cybersecurity - Protecting Businesses in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deciphi",
    creator: "@deciphi",
    title: "Deciphi Cybersecurity | Expert Solutions in Qatar",
    description:
      "Leading cybersecurity company in Qatar. Expert network security, data protection, and compliance solutions.",
    images: ["/images/Rectangle42.png"],
  },
  alternates: {
    canonical: "https://deciphi.com",
  },
};

export default function Home() {
  // JSON-LD structured data for homepage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deciphi Cybersecurity",
    description:
      "Leading cybersecurity company in Qatar providing expert network security, data protection, and compliance solutions.",
    url: "https://deciphi.com",
    logo: "https://deciphi.com/images/img_frame_38.svg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "QA",
      availableLanguage: ["English", "Arabic"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "QA",
      addressRegion: "Qatar",
    },
    sameAs: [
      "https://twitter.com/deciphi",
      "https://linkedin.com/company/deciphi",
    ],
    serviceArea: {
      "@type": "Country",
      name: "Qatar",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Network Security",
            description: "Comprehensive network security solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Protection",
            description: "Advanced data protection and privacy solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Penetration Testing",
            description: "Professional penetration testing services",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <HeroSection />
        </Suspense>
        <AboutSection />
        <ChooseUsSection />
        <ServicesSection />
        <Solutions />
        <BlogSection />
      </main>
    </>
  );
}
