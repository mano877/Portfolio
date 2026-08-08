import Reveal from "@/components/Reveal";

const points = [
  { title:"Fast Delivery", desc: "Delivering high-quality solutions quickly without compromising reliability, maintainability, or attention to detail." },
  { title: "Clean & Scalable Code", desc: "Writing well-structured, readable, and maintainable code that is easy to extend, debug, and collaborate on." },
  { title: "Business Oriented Development", desc: "Building solutions with business goals in mind focusing on user experience, scalability, performance, and long-term value rather than just writing code.." },
  { title: "AI & Backend Experties", desc: "Experienced in building AI-powered applications, REST APIs, RAG systems, automation workflows, and scalable backend architectures." }, 
  { title: "Clear Communication", desc: "Providing consistent updates, discussing ideas proactively, and ensuring transparent communication throughout the project lifecycle." },
  { title: "Scalable by Design", desc: "Building reliable architectures that support growth without sacrificing performance." },
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