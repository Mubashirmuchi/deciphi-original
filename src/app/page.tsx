import AboutSection from "@/components/homepage/about-section";
import HeroSection from "@/components/homepage/hero-section";
import { Metadata } from "next";

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
      <HeroSection />
      <AboutSection/>
    </main>
  );
}
