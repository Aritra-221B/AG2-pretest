import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Google I/O 2026 Developer Portal | Agentic Gemini Era",
  description: "Learn and explore key developer announcements from Google I/O 2026, including Gemini 3.5, Gemini Omni, Gemini Spark, and Antigravity 2.0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
