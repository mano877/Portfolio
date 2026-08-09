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
  title: "Eman Full-Stack AI Developer",
  description:
    "Full-stack developer specializing in AI-integrated backend systems: RAG pipelines, LLM agents, FastAPI, and production-ready APIs.",
  keywords: [
    "Eman",
    "Full-Stack Developer",
    "FastAPI",
    "RAG",
    "LangChain",
    "Pinecone",
    "AI Engineer",
    "Backend Developer",
  ],
  openGraph: {
    title: "Eman Full-Stack AI Developer",
    description:
      "I build AI systems that actually work. RAG pipelines, LLM agents, and production-ready APIs.",
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
