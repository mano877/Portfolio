import { Server, Bot, Workflow, Code2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const proofPoints = [
  { icon: Server, label: "Backend Systems" },
  { icon: Bot, label: "AI Integration" },
  { icon: Workflow, label: "Automation" },
  { icon: Code2, label: "Web Development" },
];

export default function About() {
  return (
    <section id="about" className="text-foreground px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Behind the Work</h2>

          <p className="text-foreground/80 leading-relaxed text-center mb-10">
            Backend-focused, building practical AI solutions, automation, and full-stack web
            applications around real business problems. The core stack is Python, FastAPI, and
            PostgreSQL, extended with LLM integrations and retrieval-augmented (RAG) systems
            when they&apos;re the right tool for the job. The goal stays the same across every
            project: reliable APIs, automation that removes real manual work, and software
            that solves the problem it was actually built for.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {proofPoints.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div className="flex flex-col items-center gap-2 text-center border border-border bg-card rounded-xl py-5 px-3">
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-xs font-medium text-foreground/80">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
