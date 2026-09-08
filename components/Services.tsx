import Link from "next/link";
import { Code2, Bot, LayoutDashboard, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

const ICONS = {
  "web-development": Code2,
  "ai-solutions": Bot,
  "automation-integration": LayoutDashboard,
} as const;

const MAX_TAGS = 4;

export default function Services() {
  return (
    <section id="services" className="text-foreground px-6 py-24">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          From the first problem to the final solution.
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          Every solution starts with a real problem, then the right combination of web, AI,
          and automation to solve it.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          const tags = service.features.slice(0, MAX_TAGS);
          return (
            <Reveal key={service.slug} delay={i * 0.1} className="h-full">
              <div className="h-full flex flex-col border border-border bg-card rounded-xl p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/[0.06] hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-accent font-mono text-sm">{service.number}</span>
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10">
                    <Icon className="w-[18px] h-[18px] text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted mb-5">{service.shortDescription}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full border border-border bg-background text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-end pt-5 border-t border-border">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-accent transition-colors w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
