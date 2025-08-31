import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Expert Cybersecurity Consultation | Deciphi Qatar",
  description: "Contact Deciphi's cybersecurity experts in Qatar. Get professional consultation for network security, assessments, OT security, and cloud services. Secure your business today.",
  keywords: [
    "contact cybersecurity Qatar",
    "cybersecurity consultation Qatar",
    "network security contact",
    "cybersecurity assessment Qatar",
    "OT security Qatar",
    "cloud security services",
    "cybersecurity experts Qatar",
    "security consultation",
    "cyber threat assessment",
    "business security Qatar"
  ],
  openGraph: {
    title: "Contact Us | Deciphi Cybersecurity Qatar",
    description: "Get expert cybersecurity consultation in Qatar. Contact us for network security, assessments, and cloud services.",
    type: "website",
    url: "https://deciphi.com/contact",
  },
  alternates: {
    canonical: "https://deciphi.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
