import type { Project } from "@/lib/projects"; 
import Image from "next/image";
import Link from "next/link";
type ProjectCardProps = {
  project: Project;
  layout?: "column" | "row";
};

export function ProjectCard({ project, layout = "column" }: ProjectCardProps) {
  const isRow = layout === "row";

  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 overflow-hidden ${
        isRow ? "flex flex-col md:flex-row" : "flex flex-col"
      }`}
    >
      {/* Image */}
      <div
        className={`relative shrink-0 ${
          isRow ? "md:w-1/2 aspect-video md:aspect-auto" : "aspect-video"
        }`}
      >
        <Image
          src={`/projects/${project.slug}/${project.image}`}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="text-3xl mb-2">{project.emoji}</div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-emerald-400 mb-3">{project.outcome}</p>

        <ul
          className={`space-y-1.5 text-sm text-white/80 ${
            isRow ? "md:columns-2 md:gap-x-6" : ""
          }`}
        >
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 break-inside-avoid">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 text-sm underline underline-offset-4 hover:text-white"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}