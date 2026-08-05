import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen text-white px-6 py-20">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1}>
            <Link
              href={`/projects/${p.slug}`}
              className="block border border-gray-800 rounded-xl p-6 h-full hover:border-gray-500 transition"
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
              <ul className="space-y-1 text-sm text-gray-400 mb-4">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <span className="text-sm text-gray-300 underline underline-offset-4">
                View Details →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
