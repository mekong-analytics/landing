import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mekong Analytics — Vietnam Market Intelligence Feeds",
  description:
    "Institutional-grade English translations of Vietnamese earnings calls, AGM notes, and IR materials. Real-time data feeds for funds and aggregators.",
  openGraph: {
    title: "Mekong Analytics — Vietnam Market Intelligence",
    description:
      "High-fidelity translated data feeds from Vietnam's capital markets, direct from Ho Chi Minh City to your terminal.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekong Analytics — Vietnam Market Intelligence",
    description:
      "High-fidelity translated data feeds from Vietnam's capital markets, direct from Ho Chi Minh City to your terminal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
