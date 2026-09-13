import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.velorabay.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Velora Bay Resort & Spa | Luxury Beachfront Sanctuary",
    template: "%s | Velora Bay Resort & Spa",
  },
  description:
    "An intimate five-star sanctuary on a private tropical bay. Oceanfront villas, a private beach, world-class dining, and a serenity spa await at Velora Bay Resort & Spa.",
  keywords: [
    "luxury beach resort",
    "private villa resort",
    "five-star tropical resort",
    "oceanfront suites",
    "luxury spa resort",
    "Velora Bay",
  ],
  authors: [{ name: "Velora Bay Resort & Spa" }],
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Velora Bay Resort & Spa | Luxury Beachfront Sanctuary",
    description:
      "An intimate five-star sanctuary on a private tropical bay. Oceanfront villas, a private beach, and a serenity spa await.",
    siteName: "Velora Bay Resort & Spa",
    images: [{ url: "/images/aerial-resort.jpg", width: 1376, height: 768 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Bay Resort & Spa",
    description: "An intimate five-star sanctuary on a private tropical bay.",
    images: ["/images/aerial-resort.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F4C81",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
