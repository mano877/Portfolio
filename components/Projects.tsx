import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="min-h-screen text-white px-6 py-20">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Work</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
