import type { Metadata } from "next";
import { Geist, Rethink_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Navbar.";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Deciphi | Cybersecurity Experts in Qatar",
  description:
    "Deciphi is a Qatar-based cybersecurity company helping businesses protect against evolving digital threats. We provide expert-led services to secure your network, safeguard data, and ensure business resilience.",
  keywords: [
    "cybersecurity",
    "Qatar",
    "network security",
    "data protection",
    "cybersecurity consulting",
  ],
  openGraph: {
    title: "Deciphi | Cybersecurity Experts in Qatar",
    description:
      "Deciphi is a Qatar-based cybersecurity company helping businesses protect against evolving digital threats. We provide expert-led services to secure your network, safeguard data, and ensure business resilience.",
    url: "https://www.deciphi.com",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deciphi Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deciphi | Cybersecurity Experts in Qatar",
    description:
      "Deciphi is a Qatar-based cybersecurity company helping businesses protect against evolving digital threats. We provide expert-led services to secure your network, safeguard data, and ensure business resilience.",
    images: ["/images/twitter-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("object");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${rethinkSans.variable} antialiased`}
      >
        <Header />
       

        {children}
        <Footer />
      </body>
    </html>
  );
}
