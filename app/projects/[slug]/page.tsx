import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";
import Image from "next/image";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Eman's Portfolio` : "Project Not Found" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/#projects" className="text-sm text-gray-400 hover:text-white">
          ← Back to projects
        </Link>

        <Reveal>
          <div className="text-5xl mt-6 mb-4">{project.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8">{project.title}</h1>
        </Reveal>
{project.screenshots && (
  <Reveal delay={0.15}>
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Screenshots</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {project.screenshots.map((src) => (
          <div key={src} className="relative aspect-video rounded-lg overflow-hidden border border-gray-800">
            <Image src={src} alt={project.title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  </Reveal>
)}
       {project.architecture && (
  <Reveal delay={0.2}>
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Architecture</h2>
      <ul className="space-y-2 text-gray-300">
        {project.architecture.map((a) => (
          <li key={a} className="flex gap-2">
            <span className="text-[#3EB8A9]">→</span>
            {a}
          </li>
        ))}
      </ul>
    </section>
  </Reveal>
)}

{project.lessonsLearned && (
  <Reveal delay={0.3}>
    <section>
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Lessons Learned</h2>
      <p className="text-gray-300 leading-relaxed">{project.lessonsLearned}</p>
    </section>
  </Reveal>
)}
      </div>
    </main>
  );
}
