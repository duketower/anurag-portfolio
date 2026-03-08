import type { Metadata } from "next";
import { Syne, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Anurag Tiwari — Project Coordinator & Agile PM",
  description:
    "AWS Migrations | Jira Expertise | Agile Project Manager. CSM® certified with 4+ years managing enterprise technology projects.",
  keywords: [
    "Anurag Tiwari",
    "Project Coordinator",
    "Agile",
    "CSM",
    "AWS",
    "Jira",
    "Project Manager",
  ],
  openGraph: {
    title: "Anurag Tiwari — Project Coordinator",
    description: "AWS Migrations | Jira Expertise | Agile Project Manager",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${spaceMono.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
