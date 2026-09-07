import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eman — AI Solutions, Automation & Web Development",
  description:
    "Web experiences, AI solutions, and automation built around the way businesses actually work.",
  keywords: [
    "Eman",
    "Web Development",
    "AI Solutions",
    "Automation",
    "FastAPI",
    "RAG",
    "React",
    "Next.js",
    "Full-Stack Developer",
  ],
  openGraph: {
    title: "Eman — AI Solutions, Automation & Web Development",
    description:
      "Web experiences, AI solutions, and automation built around the way businesses actually work.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AmbientBackground />
        <CursorGlow />
        {children}
        <Footer />
      </body>
    </html>
  );
}
