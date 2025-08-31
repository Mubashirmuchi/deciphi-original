import ChooseUsSection from "@/components/homepage/why-choose-us-section";
import HeroSection from "@/components/servicePage/heroSection";
import ProvideSection from "@/components/servicePage/provide-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Services | Network Security & Data Protection | Deciphi Qatar",
  description: "Comprehensive cybersecurity services in Qatar including network security, data protection, penetration testing, compliance audits, and cloud security solutions. Protect your business today.",
  keywords: [
    "cybersecurity services Qatar",
    "network security services",
    "data protection services",
    "penetration testing Qatar",
    "security compliance Qatar",
    "cloud security services",
    "cybersecurity consulting Qatar",
    "information security services",
    "cyber threat assessment",
    "security audit services"
  ],
  authors: [{ name: "Deciphi Cybersecurity Team" }],
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
    url: "https://deciphi.com/services",
    siteName: "Deciphi Cybersecurity",
    title: "Cybersecurity Services | Network Security & Data Protection | Deciphi Qatar",
    description: "Comprehensive cybersecurity services in Qatar including network security, data protection, penetration testing, and compliance solutions.",
    images: [
      {
        url: "/images/img_cybersecurity_1.png",
        width: 1200,
        height: 630,
        alt: "Deciphi Cybersecurity Services in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deciphi",
    title: "Cybersecurity Services | Deciphi Qatar",
    description: "Comprehensive cybersecurity services including network security, data protection, and penetration testing in Qatar.",
    images: ["/images/img_cybersecurity_1.png"],
  },
  alternates: {
    canonical: "https://deciphi.com/services",
  },
};

const Services = () => {
  // JSON-LD structured data for services
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cybersecurity Services",
    description: "Comprehensive cybersecurity services including network security, data protection, penetration testing, and compliance solutions.",
    provider: {
      "@type": "Organization",
      name: "Deciphi Cybersecurity",
      url: "https://deciphi.com"
    },
    areaServed: {
      "@type": "Country",
      name: "Qatar"
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
            description: "Advanced network security solutions including firewall management, intrusion detection, and network monitoring."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Data Protection",
            description: "Comprehensive data protection services including encryption, backup solutions, and privacy compliance."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Penetration Testing", 
            description: "Professional penetration testing to identify vulnerabilities and strengthen security posture."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security Compliance",
            description: "Compliance audits and consulting for industry standards and regulations."
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroSection />
        <ProvideSection/>
        <ChooseUsSection/>
      </main>
    </>
  );
};

export default Services;
