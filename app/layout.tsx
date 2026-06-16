import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "The Website Builders | Websites for Tradespeople",
  description:
    "Professional websites for plumbers, electricians, handymen and more. Built for $500. You don't pay until you love it.",
  metadataBase: new URL("https://thewebsitebuilders.au"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={inter.variable}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
