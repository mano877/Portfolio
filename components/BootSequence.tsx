"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const lines = [
  "Initializing AI Systems...",
  "Loading Knowledge Base...",
  "Connecting Vector Database...",
  "Portfolio Ready.",
];

export default function BootSequence() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step < lines.length) {
      const t = setTimeout(() => setStep(step + 1), 500);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setDone(true), 400);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black text-green-400 font-mono flex flex-col items-center justify-center gap-2 text-sm md:text-base"
        >
          {lines.slice(0, step).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}