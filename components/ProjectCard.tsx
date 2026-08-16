import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ChefHat, Stethoscope, ListChecks, Headset, Check, ArrowRight } from "lucide-react";

const ICONS = {
  restobot: ChefHat,
  "dr-aria": Stethoscope,
  "task-manager": ListChecks,
  "customer-care": Headset,
} as const;

const MAX_VISIBLE_FEATURES = 4;

export function ProjectCard({ project }: { project: Project }) {
  const Icon = ICONS[project.emoji];
  const fit = project.cardImageFit ?? "cover";
  const visibleFeatures = project.features.slice(0, MAX_VISIBLE_FEATURES);
  const remaining = project.features.length - visibleFeatures.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_-12px_rgba(62,184,169,0.35)]"
    >
      <div className={`relative shrink-0 aspect-video overflow-hidden ${fit === "contain" ? "bg-[#050505]" : ""}`}>
        <Image
          src={`/projects/${project.slug}/${project.image}`}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`transition-transform duration-500 group-hover:scale-[1.02] ${
            fit === "contain" ? "object-contain" : "object-cover object-center"
          }`}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
            <Icon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {project.category}
          </span>
          {project.secondaryCapability && (
            <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
              {project.secondaryCapability}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-white/70 mb-4">{project.outcome}</p>

        <ul className="space-y-1.5 text-sm text-white/80 mb-4">
          {visibleFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="line-clamp-1">{f}</span>
            </li>
          ))}
          {remaining > 0 && <li className="text-xs text-white/40 pl-6">+{remaining} more</li>}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-white/70 group-hover:text-accent transition-colors w-fit">
          View Details
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
