import Reveal from "@/components/Reveal";

const points = [
  { title: "Production-Ready Code", desc: "Clean, tested, and built to run in real environments not just demos." },
  { title: "End-to-End Ownership", desc: "From database design to deployment, I handle the full stack." },
  { title: "AI That Actually Works", desc: "Practical RAG and LLM integrations solving real problems, not gimmicks." },
  { title: "Fast, Reliable APIs", desc: "Performance and error handling built in from the start." },
  { title: "Clear Communication", desc: "I explain technical decisions in plain language, no jargon walls." },
  { title: "Built to Scale", desc: "Architecture decisions made with growth and maintainability in mind." },
];

export default function WhyHireMe() {
  return (
    <section className="text-white px-6 py-20">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Clients Hire Me
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="border border-gray-800 rounded-lg py-5 px-4 h-full">
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}