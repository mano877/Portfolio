"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const PHRASE = "sudo hire eman";

export default function EasterEgg() {
  const [granted, setGranted] = useState(false);
  const keyBuffer = useRef<string[]>([]);
  const charBuffer = useRef("");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      keyBuffer.current = [...keyBuffer.current, e.key].slice(-KONAMI.length);
      if (keyBuffer.current.join(",") === KONAMI.join(",")) {
        setGranted(true);
        keyBuffer.current = [];
      }

      if (e.key.length === 1) {
        charBuffer.current = (charBuffer.current + e.key.toLowerCase()).slice(-PHRASE.length);
        if (charBuffer.current === PHRASE) {
          setGranted(true);
          charBuffer.current = "";
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!granted) return;
    const timer = setTimeout(() => setGranted(false), 3000);
    return () => clearTimeout(timer);
  }, [granted]);

  return (
    <AnimatePresence>
      {granted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setGranted(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-lg border border-green-500 bg-black px-10 py-8 text-center font-mono"
          >
            <p className="text-2xl font-bold text-green-400">Access Granted</p>
            <p className="mt-2 text-sm text-gray-400">Welcome, recruiter. Eman is hireable.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
