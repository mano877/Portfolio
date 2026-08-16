import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { ChefHat, Stethoscope, ListChecks, Headset } from "lucide-react";
import BackToProjects from "@/components/BackToWork";

const emoji = {
  restobot: ChefHat,
  "dr-aria": Stethoscope,
  "task-manager": ListChecks,
  "customer-care": Headset,
} as const;

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
  const Icon = emoji[slug as keyof typeof emoji];
  return (
    <main className="min-h-screen text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <BackToProjects />

        <Reveal>
           <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 mt-6 mb-4">
            <Icon className="w-7 h-7 text-accent" />
          </div>
          <h1 className={`text-3xl md:text-5xl font-bold ${project.secondaryCapability ? "mb-4" : "mb-8"}`}>
            {project.title}
          </h1>
          {project.secondaryCapability && (
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                {project.secondaryCapability}
              </span>
            </div>
          )}
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
