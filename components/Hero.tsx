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
      className="relative min-h-screen overflow-hidden text-foreground flex flex-col items-center justify-center text-center px-6"
    >
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight"
        >
          Turning business challenges into intelligent digital solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-muted text-lg max-w-2xl leading-relaxed"
        >
          Web experiences, AI solutions, and automation built around the way businesses actually work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mt-6 text-sm font-medium text-accent"
        >
          <span>AI Solutions</span>
          <span className="text-border">•</span>
          <span>Automation</span>
          <span className="text-border">•</span>
          <span>Web Development</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <MagneticButton
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-foreground text-background rounded-lg font-medium"
          >
            Explore the Work
          </MagneticButton>

          <MagneticButton
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-foreground/15 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
          >
            Book a Consultation
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
