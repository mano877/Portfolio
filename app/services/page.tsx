"use client";

import Link from "next/link";
import { DatabaseZap, Bot, LayoutDashboard,  Code2, Zap, Lightbulb, MessageCircle, TrendingUp } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const services = [
  {
    icon: DatabaseZap,
    tag: "KNOWLEDGE BASE",
    title: "AI Knowledge Base Chatbot",
    desc: "Turn your company documents into an assistant that actually understands them—accurate answers pulled straight from your own content.",
    includes: "RAG · Document Ingestion · Vector Search · Source Citations",
  },
  {
    icon: Bot,
    tag: "CUSTOMER SUPPORT",
    title: "AI Customer Support Chatbot",
    desc: "A support assistant that handles real conversations, resolves common questions, and hands off to a human when it matters.",
    includes: "Conversational AI · API Integration · Human Handoff · Multi-turn Chat",
  },
  {
    icon: LayoutDashboard,
    tag: "AUTOMATION",
    title: "AI Dashboard & Automation",
    desc: "Dashboards and workflows that automate the repetitive parts of your business, so your team spends time on what actually matters.",
    includes: "Workflow Automation · Data Dashboards · API Integrations · Background Tasks",
  },
];

const needBuild = [
  ["Too many support questions", "AI Customer Support Bot"],
  ["Repetitive manual work", "Automation Workflow"],
  ["Internal business tool", "Custom Web Application"],
  ["Documents full of information", "RAG Knowledge Assistant"],
  ["Unorganized backend", "Scalable API Architecture"],
  ["AI feature for your product", "Custom AI Integration"],
];

const process = [
  { n: "01", title: "Discover", desc: "Understand your business & problem." },
  { n: "02", title: "Design", desc: "Plan the solution and user experience." },
  { n: "03", title: "Build", desc: "Develop, integrate & test." },
  { n: "04", title: "Launch", desc: "Deploy and hand over a production-ready system." },
];

const whyMe = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable systems that don't become a nightmare later." },
  { icon: Zap, title: "Fast Delivery", desc: "Focused development without unnecessary complexity." },
  { icon: Lightbulb, title: "Business Understanding", desc: "I focus on why something needs to be built—not just how." },
  { icon: MessageCircle, title: "Clear Communication", desc: "You always know what's happening and what's next." },
  { icon: TrendingUp, title: "Built to Scale", desc: "Architecture that can grow with your business." },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] text-white">
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-center">
        <p className="text-sm tracking-widest text-[#3EB8A9]">SERVICES</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
          Turning business challenges into intelligent digital solutions.
        </h1>
        <p className="mt-6 text-white/60 max-w-xl mx-auto">
          From AI applications and automation to scalable backend systems, I build practical technology that simplifies workflows, solves problems, and creates measurable value.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/#work">
            <MagneticButton className="px-6 py-3 rounded-full border border-white/20 text-sm">
              View My Work
            </MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton className="px-6 py-3 rounded-full bg-[#3EB8A9] text-[#050505] text-sm font-medium">
              Let&apos;s Build Something →
            </MagneticButton>
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, tag, title, desc, includes }) => (
          <Link
            key={title}
            href="/contact"
            className="group block border border-white/10 rounded-2xl p-8 hover:border-[#3EB8A9]/40 transition-colors"
          >
            <div className="flex items-center gap-2 text-xs tracking-widest text-[#3EB8A9]">
              <Icon
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:scale-125 group-hover:text-white"
              />
              {tag}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-xl font-medium">{title}</h3>
              <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#3EB8A9]">→</span>
            </div>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">{desc}</p>
            <p className="mt-4 text-xs text-white/40">{includes}</p>
          </Link>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-medium text-center mb-10">
          Have a problem? Let&apos;s turn it into a system.
        </h2>
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          {needBuild.map(([need, build], i) => (
            <div
              key={need}
              className={`grid grid-cols-2 px-6 py-4 text-sm ${
                i !== needBuild.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="text-white/50">{need}</span>
              <span className="text-white font-medium">{build}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-medium text-center mb-16">Your process</h2>
        <div className="relative flex flex-col md:flex-row justify-between gap-10">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-white/10" />
          {process.map((step) => (
            <div key={step.n} className="relative flex-1 text-center">
              <div className="mx-auto w-10 h-10 rounded-full bg-[#050505] border border-[#3EB8A9] text-[#3EB8A9] flex items-center justify-center text-xs relative z-10">
                {step.n}
              </div>
              <h3 className="mt-4 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-medium text-center mb-4">Why work with me?</h2>
        <p className="text-center text-white/50 mb-10">Built for real business.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {whyMe.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-2.5 border border-white/10 rounded-lg p-2.5 hover:border-[#3EB8A9]/40 transition-colors"
            >
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#3EB8A9]/10 flex items-center justify-center">
                <Icon size={11} strokeWidth={1.5} className="text-[#3EB8A9]" />
              </div>
              <div>
                <h3 className="text-sm font-medium">{title}</h3>
                <p className="mt-0.5 text-xs text-white/50">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-medium">Have a problem worth solving?</h2>
        <p className="mt-4 text-white/60">
          Tell me what you&apos;re trying to build, and I&apos;ll suggest the simplest solution
          that makes sense.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <MagneticButton className="px-8 py-3 rounded-full bg-[#3EB8A9] text-[#050505] font-medium">
              Get a Free Consultation →
            </MagneticButton>
          </Link>
        </div>
      </section>
    </main>
  );
}