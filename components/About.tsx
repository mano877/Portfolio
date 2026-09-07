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
            Behind every project is a business trying to do something better: attract more
            customers, simplify a workflow, or build a stronger digital presence. Good
            technology is built around that need, across the whole stack: a reliable
            backend, a polished interface, structured data behind an AI assistant, and the
            automation that connects it all.
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
