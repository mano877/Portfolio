"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent } from "react";
import MagneticButton from "./MagneticButton";
import HorizonGrid from "@/components/HorizonGrid";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const blobX = useTransform(springX, (v) => v * 0.04);
  const blobY = useTransform(springY, (v) => v * 0.04);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden text-white flex flex-col items-center justify-center text-center px-6"
    >
      <HorizonGrid />

      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold max-w-3xl"
        >
          I build AI solutions that save businesses time, reduce support costs, and automate repetitive work
        </motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
  className="mt-4 text-gray-300 text-lg font-medium"
>
  AI Developer • Backend Engineer • AI Solutions Developer
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
  className="mt-2 text-gray-400 text-sm"
>
  RAG • AI Agents • FastAPI • React • Docker • PostgreSQL
</motion.p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-sm text-gray-400">
          <span><span className="text-[#3EB8A9] font-semibold">3</span> AI Products Shipped</span>
          <span><span className="text-[#3EB8A9] font-semibold">60+</span> API Endpoints</span>
          <span><span className="text-[#3EB8A9] font-semibold">3</span> RAG Pipelines in Production</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex gap-4 mt-8"
        >
          <MagneticButton
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            Book a Free Consultation
          </MagneticButton>
          
          <MagneticButton
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-white rounded-lg font-medium"
          >
            View My work
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}