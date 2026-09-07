import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ChefHat, Stethoscope, ListChecks, Headset, ArrowRight } from "lucide-react";

const ICONS = {
  restobot: ChefHat,
  "dr-aria": Stethoscope,
  "task-manager": ListChecks,
  "customer-care": Headset,
} as const;

const MAX_TAGS = 4;

export function ProjectCard({ project }: { project: Project }) {
  const Icon = ICONS[project.emoji];
  const fit = project.cardImageFit ?? "cover";
  const tags = (project.builtWith ?? project.features).slice(0, MAX_TAGS);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/[0.08] hover:-translate-y-1"
    >
      <div className={`relative shrink-0 aspect-video overflow-hidden ${fit === "contain" ? "bg-card" : ""}`}>
        {project.image ? (
          <Image
            src={`/projects/${project.slug}/${project.image}`}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`transition-transform duration-500 group-hover:scale-[1.03] ${
              fit === "contain" ? "object-contain" : "object-cover object-center"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-accent/5">
            <Icon className="w-12 h-12 text-accent/30" />
          </div>
        )}

        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur border border-border text-xs font-medium text-accent uppercase tracking-wide">
            <Icon className="w-3.5 h-3.5" />
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {project.secondaryCapability && (
          <span className="mb-2 w-fit px-2.5 py-1 rounded-full border border-border bg-background text-xs text-muted">
            {project.secondaryCapability}
          </span>
        )}

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-foreground/70 mb-5">{project.outcome}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 mb-5">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full border border-border bg-background text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm text-foreground/70 group-hover:text-accent transition-colors w-fit">
          View Details
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
