import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const display = Newsreader({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "Linen & Key", template: "%s · Linen & Key" },
  description: "Full estate-agency website: listings, buying, selling, neighbourhoods, valuation, fees, and the team.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
