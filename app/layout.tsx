import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mekong Analytics — Vietnam Market Intelligence Feeds",
  description:
    "Institutional-grade English translations of Vietnamese earnings calls, AGM notes, and IR materials. Real-time data feeds for funds and aggregators.",
  authors: [{ name: "Mekong Analytics" }],
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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
