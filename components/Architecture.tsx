"use client";

import { motion } from "motion/react";
import { User, Server, KeyRound, Database, Boxes, Cpu, Waves } from "lucide-react";
import Reveal from "@/components/Reveal";

function Node({ icon: Icon, label, highlight = false }: { icon: any; label: string; highlight?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm bg-black ${
        highlight ? "border-green-400 text-green-300" : "border-[#3EB8A9]/50 text-gray-200"
      }`}
    >
      <Icon size={16} />
      {label}
    </div>
  );
}

function Connector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div className={`relative ${vertical ? "h-8 w-px" : "w-8 h-px"} bg-gray-700 border-dashed`}>
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.7)]"
        animate={vertical ? { top: ["0%", "100%"] } : { left: ["0%", "100%"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="text-white px-6 py-20 text-center">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It&apos;s Built</h2>
      </Reveal>

      <div className="flex flex-col items-center gap-0 max-w-2xl mx-auto">
        <div className="flex items-center">
          <Node icon={User} label="User" />
          <Connector />
          <Node icon={Server} label="FastAPI" highlight />
          <Connector />
          <Node icon={KeyRound} label="Auth" />
        </div>

        <Connector vertical />

        <div className="flex items-center gap-8">
          <Node icon={Database} label="PostgreSQL" />
          <Node icon={Boxes} label="Pinecone" />
        </div>

        <Connector vertical />

        <div className="flex items-center">
          <Node icon={Cpu} label="LLM (Groq/Ollama)" highlight />
          <Connector />
          <Node icon={Waves} label="Streaming Response" />
        </div>
      </div>
    </section>
  );
}