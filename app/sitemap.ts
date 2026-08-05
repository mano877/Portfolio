import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      priority: 0.8,
    })),
  ];
}
