"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed left-0 top-0 z-40 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3EB8A9]/10 blur-3xl transition-opacity duration-300"
    />
  );
}