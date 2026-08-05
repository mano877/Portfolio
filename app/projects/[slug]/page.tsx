import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";

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

        <Reveal delay={0.1}>
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Key Features</h2>
            <ul className="space-y-2 text-gray-300">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section className="rounded-lg border border-dashed border-gray-700 p-6 text-gray-500 text-sm">
            Screenshots, architecture breakdown, and lessons learned for this project are being
            written up — check back soon.
          </section>
        </Reveal>
      </div>
    </main>
  );
}
