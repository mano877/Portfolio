"use client";

import { motion } from "motion/react";
import { Server, Container, TestTube2, Brain, Database, Layout, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  { label: "Backend Development", icon: Server },
  { label: "Docker", icon: Container },
  { label: "Testing & CI/CD", icon: TestTube2 },
  { label: "AI Integration", icon: Brain },
  { label: "Vector Databases (RAG)", icon: Database },
  { label: "Frontend (React)", icon: Layout },
  { label: "Full-Stack AI Products", icon: Sparkles },
];

export default function Timeline() {
  return (
    <section className="text-white px-6 py-20 overflow-x-auto">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My Journey
        </h2>
      </Reveal>

      <div className="relative flex items-start justify-between min-w-[900px] max-w-5xl mx-auto px-4">
        {/* connecting line */}
        <div className="absolute top-6 left-0 right-0 h-px bg-gray-700" />

        {steps.map((step, i) => {
          const Icon = step.icon;
          const isTop = i % 2 === 0;
          return (
            <Reveal key={step.label} delay={i * 0.08} y={12} className="relative flex flex-col items-center flex-1">
              {isTop && (
                <p className="absolute -top-8 text-xs text-gray-400 w-24 text-center">
                  {step.label}
                </p>
              )}

              <div className="relative z-10 h-12 w-12 rounded-full border border-gray-700 bg-black flex items-center justify-center">
                <Icon size={18} className="text-[#3EB8A9]" />
                <motion.div
                  className="absolute inset-0 rounded-full border border-green-400"
                  animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>

              {!isTop && (
                <p className="absolute top-16 text-xs text-gray-400 w-24 text-center">
                  {step.label}
                </p>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}