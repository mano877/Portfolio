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
    <main className="min-h-screen text-foreground px-6 py-20">
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
              <span className="px-2.5 py-1 rounded-full border border-border bg-card text-xs text-muted">
                {project.secondaryCapability}
              </span>
            </div>
          )}
        </Reveal>

        {project.problem && (
          <Reveal delay={0.05}>
            <section className="mb-10">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">The Problem</h2>
              <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
            </section>
          </Reveal>
        )}

        {project.idea && (
          <Reveal delay={0.1}>
            <section className="mb-10">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">The Idea</h2>
              <p className="text-foreground/80 leading-relaxed">{project.idea}</p>
            </section>
          </Reveal>
        )}

        {project.solution && (
          <Reveal delay={0.15}>
            <section className="mb-10">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">The Solution</h2>
              <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
            </section>
          </Reveal>
        )}

        {project.builtWith && (
          <Reveal delay={0.2}>
            <section className="mb-12">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">Built With</h2>
              <div className="flex flex-wrap gap-2">
                {project.builtWith.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-border bg-card text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {project.screenshots && (
          <Reveal delay={0.2}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.screenshots.map((src) => (
                  <div key={src} className="relative aspect-video rounded-lg overflow-hidden border border-border">
                    <Image src={src} alt={project.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {project.resultPurpose && (
          <Reveal delay={0.25}>
            <section className="mb-12">
              <div className="border border-accent/20 bg-accent/5 rounded-xl p-6">
                <h2 className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                  Result / Purpose
                </h2>
                <p className="text-foreground/80 leading-relaxed text-sm">{project.resultPurpose}</p>
              </div>
            </section>
          </Reveal>
        )}

       {project.architecture && (
  <Reveal delay={0.2}>
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Architecture</h2>
      <ul className="space-y-2 text-foreground/80">
        {project.architecture.map((a) => (
          <li key={a} className="flex gap-2">
            <span className="text-accent">→</span>
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
      <h2 className="text-xl font-semibold mb-4">Lessons Learned</h2>
      <p className="text-foreground/80 leading-relaxed">{project.lessonsLearned}</p>
    </section>
  </Reveal>
)}

      </div>
    </main>
  );
}
