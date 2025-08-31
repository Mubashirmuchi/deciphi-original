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
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://deciphi.com"),
  title: {
    default: "Deciphi – Cybersecurity Experts in Qatar",
    template: "%s | Deciphi Cybersecurity"
  },
  description: "Leading cybersecurity company in Qatar providing expert network security, data protection, and compliance solutions. Secure your business with Deciphi's professional cybersecurity services.",
  applicationName: "Deciphi Cybersecurity",
  authors: [{ name: "Deciphi Cybersecurity Team", url: "https://deciphi.com" }],
  generator: "Next.js",
  keywords: [
    "cybersecurity Qatar",
    "network security",
    "data protection",
    "cybersecurity consulting",
    "penetration testing",
    "security compliance",
    "cyber threat protection"
  ],
  referrer: "origin-when-cross-origin",
  creator: "Deciphi Cybersecurity",
  publisher: "Deciphi Cybersecurity",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://deciphi.com",
    languages: {
      "en-QA": "https://deciphi.com",
      "ar-QA": "https://deciphi.com/ar",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_QA",
    url: "https://deciphi.com",
    siteName: "Deciphi Cybersecurity",
    title: "Deciphi – Cybersecurity Experts in Qatar",
    description: "Leading cybersecurity company in Qatar providing expert network security, data protection, and compliance solutions.",
    images: [
      {
        url: "/images/Rectangle42.png",
        width: 1200,
        height: 630,
        alt: "Deciphi Cybersecurity - Qatar's Leading Security Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deciphi",
    creator: "@deciphi",
    title: "Deciphi – Cybersecurity Experts in Qatar",
    description: "Leading cybersecurity company in Qatar providing expert security solutions.",
    images: ["/images/Rectangle42.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Cybersecurity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${rethinkSans.variable} antialiased bg-black`}
      >
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
