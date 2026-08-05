export type Project = {
  slug: string;
  emoji: string;
  title: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "restobot",
    emoji: "🍽️",
    title: "AI Restaurant Assistant",
    features: [
      "Natural-language ordering via chat",
      "Role-based access (admin/customer)",
      "JWT Authentication",
      "GST bill generation",
      "Pinecone RAG",
      "18 API endpoints",
    ],
  },
  {
    slug: "dr-aria",
    emoji: "🩺",
    title: "Medical AI Assistant (Dr. Aria)",
    features: [
      "Pinecone RAG",
      "Groq LLM",
      "Multi-conversation chat",
      "JWT Authentication",
      "14 API endpoints",
    ],
  },
  {
    slug: "task-manager",
    emoji: "✅",
    title: "Task Manager API",
    features: [
      "20 API endpoints",
      "JWT Authentication",
      "Alembic migrations",
      "Rate limiting (slowapi)",
      "Dockerized",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
