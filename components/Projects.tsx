"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects, type FilterCategory } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

const FILTERS = ["All", "Web Development", "AI", "Automation"] as const;
type Filter = (typeof FILTERS)[number];

function matchesFilter(categories: FilterCategory[], filter: Filter) {
  return filter === "All" || categories.includes(filter);
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const visible = projects.filter((p) => matchesFilter(p.filterCategories, active));

  return (
    <section id="work" className="min-h-screen text-foreground px-6 py-20">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work built around real problems.
        </h2>
        <p className="text-muted text-center mb-10 max-w-xl mx-auto">
          Every project starts somewhere: a problem, a bottleneck, an opportunity, or simply
          a better way of doing things.
        </p>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full border text-sm transition-colors ${
              active === f
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">More {active} work is on the way.</p>
      )}
    </section>
  );
}
