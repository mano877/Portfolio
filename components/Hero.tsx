"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent } from "react";
import { Code2, Bot, Workflow } from "lucide-react";
import MagneticButton from "./MagneticButton";

const pillars = [
  { icon: Code2, label: "Web Development" },
  { icon: Bot, label: "AI Solutions" },
  { icon: Workflow, label: "Automation" },
];

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
      className="relative min-h-screen overflow-hidden text-foreground flex flex-col items-center justify-center text-center px-6 py-32"
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-[1.08] tracking-tight"
        >
          Turning business challenges into intelligent digital solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-8 text-muted text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Web experiences, AI solutions, and automation built around the way businesses actually work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-3 mt-9"
        >
          {pillars.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground/80 shadow-sm"
            >
              <Icon className="w-3.5 h-3.5 text-accent" />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <MagneticButton
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 bg-foreground text-background rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Explore Projects
          </MagneticButton>

          <MagneticButton
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 border border-foreground/20 rounded-lg font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-colors"
          >
            Let&apos;s Talk
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
