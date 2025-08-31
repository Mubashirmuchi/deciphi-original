import Herosection from "@/components/solutionsPage/herosection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions | Custom Security Solutions for Qatar Businesses | Deciphi",
  description: "Tailored cybersecurity solutions for businesses in Qatar. Custom security architectures, threat intelligence, incident response, and managed security services designed for your needs.",
  keywords: [
    "cybersecurity solutions Qatar",
    "custom security solutions",
    "managed security services",
    "threat intelligence Qatar",
    "incident response Qatar",
    "security architecture Qatar",
    "enterprise cybersecurity",
    "business security solutions",
    "cybersecurity consulting",
    "security strategy Qatar"
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
    url: "https://deciphi.com/solutions",
    siteName: "Deciphi Cybersecurity",
    title: "Cybersecurity Solutions | Custom Security Solutions for Qatar Businesses | Deciphi",
    description: "Tailored cybersecurity solutions for businesses in Qatar. Custom security architectures, threat intelligence, and managed security services.",
    images: [
      {
        url: "/images/img_secure_database.png",
        width: 1200,
        height: 630,
        alt: "Deciphi Cybersecurity Solutions for Qatar Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deciphi",
    title: "Cybersecurity Solutions | Deciphi Qatar",
    description: "Tailored cybersecurity solutions for businesses in Qatar. Custom security architectures and managed security services.",
    images: ["/images/img_secure_database.png"],
  },
  alternates: {
    canonical: "https://deciphi.com/solutions",
  },
};

const Solutions = () => {
  // JSON-LD structured data for solutions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cybersecurity Solutions",
    description: "Tailored cybersecurity solutions including custom security architectures, threat intelligence, and managed security services for businesses in Qatar.",
    brand: {
      "@type": "Brand",
      name: "Deciphi Cybersecurity"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Deciphi Cybersecurity",
      url: "https://deciphi.com"
    },
    category: "Cybersecurity Solutions",
    audience: {
      "@type": "BusinessAudience",
      name: "Qatar Businesses"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Herosection />
      </main>
    </>
  );
};

export default Solutions;
