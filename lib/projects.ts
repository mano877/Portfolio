export type Project = {
  slug: string;
  emoji: string;
  title: string;
  features: string[];
  architecture?: string[];
  lessonsLearned?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "restobot",
    emoji: "🍽️",
    title: "AI Restaurant Assistant",
    features: [
      "Natural language ordering via chat",
      "Role-based access (admin/customer)",
      "JWT Authentication",
      "GST bill generation",
      "Pinecone RAG",
      "18 API endpoints",
    ],
    architecture: [
      "FastAPI backend handling chat, order, and billing logic",
      "Pinecone vector store for menu/RAG-based item lookup",
      "PostgreSQL for order history, users, and roles",
      "JWT-based auth separating admin and customer permissions",
      "LLM parses natural-language orders into structured line items before hitting the database",
    ],
    lessonsLearned:
      "The hardest part wasn't the AI. It was reliably turning free-form chat orders into structured, billable line items without losing accuracy. Getting role-based access right (admin vs customer) also required rethinking the auth flow more carefully than a typical CRUD API.",
    screenshots: [
  "/projects/restobot/login.png",
  "/projects/restobot/signup.png",
  "/projects/restobot/chat.png",
  "/projects/restobot/history.png",
  "/projects/restobot/menu.png",
  "/projects/restobot/orders.png",
  "/projects/restobot/recommendations.png",
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
    architecture: [
      "FastAPI backend serving chat and conversation-management endpoints",
      "Pinecone vector store for retrieval-augmented medical context",
      "Groq LLM for fast inference on retrieved context",
      "PostgreSQL to persist multi-turn conversation history per user",
      "JWT authentication to keep patient conversations isolated per account",
    ],
    lessonsLearned:
      "Maintaining coherent multi-turn context across a conversation without re-sending the entire history to the LLM every time was the biggest architectural challenge. It pushed me to think carefully about what context actually needs to persist versus what can be re-retrieved from the vector store on demand.",
    screenshots: [
  "/projects/dr-aria/login.png",
  "/projects/dr-aria/greeting.png",
  "/projects/dr-aria/chat.png",
  "/projects/dr-aria/chat-summary.png",
  "/projects/dr-aria/history.png",
  "/projects/dr-aria/delete-acc.png",
  "/projects/dr-aria/signup.png",
  "/projects/dr-aria/upload-doc.png",
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