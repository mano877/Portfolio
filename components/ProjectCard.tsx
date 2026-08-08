import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ChefHat, Stethoscope, ListChecks, Check, ArrowRight } from "lucide-react";

const ICONS = {
  restobot: ChefHat,
  "dr-aria": Stethoscope,
  "task-manager": ListChecks,
} as const;

type ProjectCardProps = {
  project: Project;
  layout?: "column" | "row";
};

export function ProjectCard({ project, layout = "column" }: ProjectCardProps) {
  const isRow = layout === "row";
  const Icon = ICONS[project.icon];

  return (
    <div
      className={`group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-accent/40 ${
        isRow ? "flex flex-col md:flex-row" : "flex flex-col"
      }`}
    >
      {/* Image */}
      <div
        className={`relative shrink-0 overflow-hidden ${
          isRow ? "md:w-1/2 aspect-video md:aspect-auto" : "aspect-video"
        }`}
      >
        <Image
          src={`/projects/${project.slug}/${project.image}`}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 mb-4">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-accent mb-3">{project.outcome}</p>

        <ul
          className={`space-y-1.5 text-sm text-white/80 ${
            isRow ? "md:columns-2 md:gap-x-6" : ""
          }`}
        >
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 break-inside-avoid">
              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-accent transition-colors"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}