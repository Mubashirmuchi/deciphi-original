import type { Metadata } from "next";
import { Geist, Rethink_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Navbar.";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/loading";
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

// export const metadata: Metadata = {
//   title: "Deciphi | Cybersecurity Experts in Qatar",
//   description:
//     "Deciphi is a Qatar-based cybersecurity company helping businesses protect against evolving digital threats. We provide expert-led services to secure your network, safeguard data, and ensure business resilience.",
//   keywords: [
//     "cybersecurity",
//     "Qatar",
//     "network security",
//     "data protection",
//     "cybersecurity consulting",
//   ],
//   openGraph: {
//     title: "Deciphi | Cybersecurity Experts in Qatar",
//     description:
//       "Deciphi is a Qatar-based cybersecurity company helping businesses protect against evolving digital threats. We provide expert-led services to secure your network, safeguard data, and ensure business resilience.",
//     url: "https://www.deciphi.com",
//     type: "website",
//     images: [
//       {
//         url: "/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Deciphi Cybersecurity",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Deciphi | Cybersecurity Experts in Qatar",
//     description:
//       "Deciphi is a Qatar-based cybersecurity company helping businesses protect against evolving digital threats. We provide expert-led services to secure your network, safeguard data, and ensure business resilience.",
//     images: ["/images/twitter-image.png"],
//   },
//   icons: {
//     icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
//   },
// };

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
  console.log("object");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${rethinkSans.variable} antialiased bg-black`}
      >
        <Header />
        <SplashScreen>
          <main className="bg-white">{children}</main>
        </SplashScreen>

        <Footer />
      </body>
    </html>
  );
}
