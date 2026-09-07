import Link from "next/link";
import { Code2, Bot, LayoutDashboard, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

const ICONS = {
  "web-development": Code2,
  "ai-solutions": Bot,
  "automation-integration": LayoutDashboard,
} as const;

export default function Services() {
  return (
    <section id="services" className="text-foreground px-6 py-24">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          From the first problem to the final solution.
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          Every solution starts with a real problem — then the right combination of web,
          AI, and automation to solve it.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.slug} delay={i * 0.1}>
              <div className="h-full flex flex-col border border-border bg-card rounded-xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent font-mono text-sm">{service.number}</span>
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted flex-1">{service.shortDescription}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-accent transition-colors w-fit"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
