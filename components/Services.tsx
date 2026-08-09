import Link from "next/link";
import { MessageSquare, Database, LayoutDashboard, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

const ICONS = {
  chatbot: MessageSquare,
  "knowledge-base": Database,
  "dashboard-automation": LayoutDashboard,
} as const;

export default function Services() {
  return (
    <section id="services" className="text-white px-6 py-24">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What I Do</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          I help businesses build AI systems that solve real problems — not just demos, but working products.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.slug} delay={i * 0.1}>
              <div className="h-full flex flex-col border border-white/10 bg-white/5 backdrop-blur rounded-xl p-6 hover:border-white/30 transition">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent font-mono text-sm">{service.number}</span>
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 flex-1">{service.shortDescription}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-accent transition-colors w-fit"
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
