import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Time Calculator | How Long Will Your SaaS Take to Build?",
  description: "Get an honest estimate of how long your SaaS project will take to build. Select features and complexity to calculate realistic build time in hours and days.",
  openGraph: {
    title: "Build Time Calculator | How Long Will Your SaaS Take to Build?",
    description: "Get an honest estimate of how long your SaaS project will take to build. Select features and complexity to calculate realistic build time in hours and days.",
    url: "https://build-time-calc.buildtolaunch.ai",
    siteName: "Build Time Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Time Calculator | How Long Will Your SaaS Take to Build?",
    description: "Get an honest estimate of how long your SaaS project will take to build. Select features and complexity to calculate realistic build time in hours and days.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
