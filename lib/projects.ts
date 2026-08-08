export type Project = {
  slug: string;
  emoji: string;
  title: string;
  outcome: string;
  image: string;
  features: string[];
  architecture?: string[];
  lessonsLearned?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "restobot",
    emoji: "🍽️",
    title: "Restaurant AI Assistant",
    outcome:"Turns a simple conversation into a complete ordering experience. No menus, no hassle.",
    image: "signup.png",
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
    title: "AI Medical Document Assistant (Dr. Aria)",
    outcome: "Turns complex medical documents into an assistant that answers questions in plain language.",
    image: "signup.png",
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
  emoji: "🤖",
  title: "AI Task Management System",
  outcome: "Brings tasks, projects, AI chat, and deadline reminders together in one workspace.",
  image: "landing.png",
  features: [
    "JWT auth with bcrypt-hashed passwords and protected routes",
    "Projects (CRUD) each with their own scoped tasks",
    "My Tasks independent personal task system with status/priority/category/tags, search, filter, sort, pagination",
    "Full task lifecycle: archive → trash (soft-delete) → restore / permanent delete",
    "AI chat assistant (LangChain + Ollama) with live workspace-aware context knows what's overdue, due today, high priority",
    "Instant, LLM-free welcome banner + quick-suggestion chips via a workspace summary endpoint",
    "Dashboard with real productivity stats, due-today/overdue counts, recent activity feed",
    "Analytics completion breakdown by status and priority",
    "Settings (light/dark/system theme) and Profile pages",
    "Rate limiting (SlowAPI) on auth and chat endpoints",
    "Optional Redis caching with graceful fallback if unreachable",
    "Hourly background deadline-reminder system",
    "Alembic-managed PostgreSQL schema, Docker Compose stack, GitHub Actions CI (pytest)",
  ],
  architecture: [
    "FastAPI app layered into routers (HTTP + auth + validation) → services (business logic, raw SQL via psycopg2, no ORM) → PostgreSQL",
    "Redis sits alongside as an optional cache that fails open on any error",
    "Chat endpoint composes a live workspace summary (My Tasks + Projects) and injects it as LLM context (LangChain + Ollama llama3.1) on every call",
    "React SPA talks to the API over a typed Axios client",
  ],
  lessonsLearned:
    "Modeling standalone vs. project-scoped tasks in one table (nullable project_id) avoided duplicating CRUD logic, while My Tasks stayed a fully separate table since its shape never overlapped with project tasks. A dedicated /chat/summary endpoint let the frontend render an instant welcome banner without waiting on an LLM round trip, feeding the same summary data into the chat context. Soft-delete and archive as two distinct states made an accidental-delete recovery flow possible without extra tables, and designing Redis caching to fail open meant the API never went down because of an unrelated dependency.",
  screenshots: [
    "/projects/task-manager/landing.png",
    "/projects/task-manager/login.png",
    "/projects/task-manager/signup.png",
    "/projects/task-manager/dashboard.png",
    "/projects/task-manager/chat.png",
    "/projects/task-manager/my-tasks.png",
    "/projects/task-manager/new-task.png", 
    "/projects/task-manager/projects.png",
    "/projects/task-manager/analytics.png", 
    "/projects/task-manager/settings.png",
  ],
},

    ]
  

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}