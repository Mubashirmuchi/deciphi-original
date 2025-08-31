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
  title: "Deciphi – Cybersecurity Experts in Qatar",
  description: "Securing your network with expert-led cybersecurity solutions.",
  metadataBase: new URL("https://deciphi.vercel.app"), // ✅ Replace with your domain
  openGraph: {
    title: "Deciphi – Cybersecurity Experts",
    description: "Stay ahead of evolving cyber risks with Deciphi.",
    url: "https://deciphi.vercel.app",
    siteName: "Deciphi",
    images: [
      {
        url: "https://deciphi.vercel.app/og-image.png", // full absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deciphi – Cybersecurity Experts",
    description: "Stay ahead of evolving cyber risks with Deciphi.",
    images: ["https://deciphi.vercel.app/og-image.png"], // full absolute URL
  },
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
