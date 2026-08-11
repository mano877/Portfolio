import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Database,
  LayoutDashboard,
  CircleCheck,
  ArrowRight,
  Brain,
  Server,
  Container,
  Workflow,
} from "lucide-react";
import Navbar from "@/components/NavBar";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Eman",
  description:
    "AI Customer Support Chatbots, AI Knowledge Base / RAG Chatbots, and AI Dashboard & Automation — practical AI systems built to solve real business problems.",
};

const ICONS = {
  chatbot: MessageSquare,
  "knowledge-base": Database,
  "dashboard-automation": LayoutDashboard,
} as const;

const CONSULTATION_PHONE = "923124467526";

function whatsappLink(message: string) {
  return `https://wa.me/${CONSULTATION_PHONE}?text=${encodeURIComponent(message)}`;
}

const expertise = [
  {
    title: "AI & LLMs",
    icon: Brain,
    items: ["LLM Integration", "RAG", "Embeddings", "Vector Databases", "AI Applications"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["FastAPI", "REST APIs", "PostgreSQL", "Authentication", "Background Tasks"],
  },
  {
    title: "Engineering",
    icon: Container,
    items: ["Docker", "Testing", "CI/CD", "Scalable Architecture"],
  },
  {
    title: "Automation & Integration",
    icon: Workflow,
    items: ["Workflow Automation", "API Integrations", "Business Process Automation"],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
          <span className="mt-[7px] w-1 h-1 rounded-full bg-accent shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
          <CircleCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ServiceSection({ service, isLast }: { service: Service; isLast: boolean }) {
  const Icon = ICONS[service.icon];

  return (
    <section
      id={service.slug}
      className={`scroll-mt-28 py-16 ${!isLast ? "border-b border-white/10" : ""}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 mb-5">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-accent font-mono text-sm">{service.number}</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Service</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h2>
          <p className="text-accent text-lg font-medium mb-10">{service.positioning}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
          <Reveal>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Who It&apos;s For
            </h3>
            <BulletList items={service.whoItsFor} />
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Problems It Solves
            </h3>
            <BulletList items={service.problems} />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              What I Build
            </h3>
            <FeatureList items={service.features} />
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Technology
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technology.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="border border-accent/20 bg-accent/5 rounded-xl p-6 mb-10">
            <h3 className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Example</h3>
            <p className="text-gray-300 leading-relaxed text-sm">{service.example}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-semibold">{service.StartingPrice}</p>
              <p className="text-xs text-gray-500 mt-1 max-w-sm">
                Final pricing depends on features, integrations, complexity, and project requirements.
              </p>
            </div>
            <a
              href={whatsappLink(`Hi, I'd like to book a consultation about the ${service.title} service.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition w-fit"
            >
              Book a Free 30-Minute Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <section className="pt-40 pb-20 px-6 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
              Turning business challenges into intelligent digital solutions.
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              From AI applications and automation to scalable backend systems, I build practical
              technology that simplifies workflows, solves problems, and creates measurable value.
            </p>
          </Reveal>
        </section>

        {services.map((service, i) => (
          <ServiceSection key={service.slug} service={service} isLast={i === services.length - 1} />
        ))}

        <div className="px-6 pb-4">
          <Reveal>
            <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto">
              Third-party services such as AI model APIs, hosting, vector databases, and other
              infrastructure are typically billed separately based on usage.
            </p>
          </Reveal>
        </div>

        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Technical Expertise</h2>
              <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
                The technology behind the solutions — beyond the three services above.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {expertise.map(({ title, icon: Icon, items }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="h-full border border-white/10 bg-white/5 backdrop-blur rounded-xl p-6">
                    <Icon className="w-5 h-5 text-accent mb-3" />
                    <h3 className="font-semibold mb-3">{title}</h3>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="text-sm text-gray-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 text-center border-t border-white/10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a problem worth solving?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Tell me what you&apos;re trying to build, and let&apos;s figure out the right solution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink(
                  "Hi, I'd like to book a free consultation to discuss an AI solution for my business."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Book a Free 30-Minute Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
