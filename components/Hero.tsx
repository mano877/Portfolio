"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent } from "react";
import MagneticButton from "./MagneticButton";

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
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full bg-white/5 blur-3xl"
      />

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative text-4xl md:text-6xl font-bold max-w-3xl"
      >
        I Build AI Systems That Actually Work.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative mt-4 text-gray-400 text-lg"
      >
        RAG • AI Agents • FastAPI • React • Docker • PostgreSQL
        &quot;Full-Stack Developer - AI-Integrated APIs&quot;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="relative flex gap-4 mt-8"
      >
        <MagneticButton
 onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
 className="px-6 py-3 bg-white text-black rounded-lg font-medium" 
>      
 View Projects
</MagneticButton>
<MagneticButton
 onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
 className="px-6 py-3 border border-white rounded-lg font-medium"
>
  Hire Me
</MagneticButton>
      </motion.div>
    </section>
  );
}
