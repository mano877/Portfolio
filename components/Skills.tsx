"use client";

import {
  SiFastapi, SiPostgresql, SiLangchain,
  SiOllama, SiReact, SiNextdotjs,
  SiDocker, SiJsonwebtokens, SiTailwindcss,
} from "react-icons/si";
import { GitBranch, Boxes, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";

const skills = [
  { label: "FastAPI", icon: SiFastapi, color: "#009688" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
  { label: "Pinecone", icon: Boxes, color: "#0EA5E9" },
  { label: "Groq", icon: Zap, color: "#F55036" },
  { label: "Ollama", icon: SiOllama, color: "#FFFFFF" },
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { label: "Docker", icon: SiDocker, color: "#2496ED" },
  { label: "JWT Auth", icon: SiJsonwebtokens, color: "#FB015B" },
  { label: "Alembic", icon: GitBranch, color: "#8B5CF6" }, 
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
];

export default function Skills() {
  return (
    <section className="text-white px-6 py-20">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tech Stack
        </h2>
      </Reveal>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.label} delay={i * 0.04} y={12}>
              <div className="flex flex-col items-center gap-2 border border-gray-700 rounded-xl py-4 px-2 hover:border-white/40 hover:bg-white/5 transition cursor-pointer">
                <Icon size={22} style={{ color: s.color }} />
                <span className="text-xs text-gray-300 text-center">{s.label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}