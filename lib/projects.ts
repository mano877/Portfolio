export type Project = {
  slug: string;
  emoji: "restobot" | "dr-aria" | "task-manager" | "customer-care";
  category: string;
  secondaryCapability?: string;
  title: string;
  outcome: string;
  image: string;
  cardImageFit?: "cover" | "contain";
  features: string[];
  architecture?: string[];
  lessonsLearned?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "restobot",
    emoji: "restobot",
    category: "AI Knowledge Base / RAG",
    secondaryCapability: "Business Automation",
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
    emoji: "dr-aria",
    category: "AI Knowledge Base / RAG",
    secondaryCapability: "AI Insights",
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
  emoji: "task-manager",
  category: "Workspace & Task Automation",
  secondaryCapability: "Productivity Automation",
  title: "AI Task Management System",
  outcome: "Brings tasks, projects, AI chat, and deadline reminders together in one workspace.",
  image: "landing.png",
  features: [
    "JWT auth with bcrypt-hashed passwords and protected routes",
    "Projects (CRUD) each scoped to their own tasks, plus a fully separate personal task system with search, filter, sort, and pagination",
    "Full task lifecycle: archive → trash (soft-delete) → restore or permanent delete",
    "AI chat assistant (LangChain + Ollama) with live, workspace-aware context that knows what's overdue, due today, or high priority",
    "Dashboard with real productivity stats, due-today/overdue counts, and status/priority analytics",
    "Alembic-managed PostgreSQL schema, Docker Compose stack, and GitHub Actions CI (pytest)",
  ],
  architecture: [
    "FastAPI app layered into routers (HTTP + auth + validation) → services (business logic, raw SQL via psycopg2, no ORM) → PostgreSQL",
    "Redis sits alongside as an optional cache that fails open on any error",
    "Chat endpoint composes a live workspace summary (My Tasks + Projects) and injects it as LLM context (LangChain + Ollama llama3.1) on every call",
    "Rate limiting (SlowAPI) on auth/chat endpoints, an hourly background job for deadline reminders, and an instant LLM-free welcome banner backed by the same summary endpoint",
    "React SPA talks to the API over a typed Axios client, with light/dark/system theme settings and profile pages",
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

  {
    slug: "customer-care",
    emoji: "customer-care",
    category: "AI Customer Support",
    secondaryCapability: "Business Automation",
    title: "AI Customer Care Platform",
    outcome:
      "Turns a support inbox into an AI-first workflow. The bot resolves what it can, hands off to a human the moment it can't.",
    image: "login.png",
    cardImageFit: "contain",
    features: [
      "JWT auth with OTP verification",
      "Role-aware dual experience (customer portal vs. agent/admin console)",
      "Live AI chat with automatic human handoff",
      "Agent inbox with claim/reply/resolve",
      "Ticket queue with status & priority management",
      "Real-time-derived analytics (no fabricated metrics)",
    ],
    architecture: [
      "FastAPI backend (Clean Architecture, repository pattern) with PostgreSQL, Alembic migrations, and rotating-refresh-token JWT auth",
      "Groq-powered chat pipeline: classify intent/sentiment → run the matching tool (orders, tickets, knowledge base) → generate a grounded reply, escalating to a human whenever confidence drops or the customer asks",
      "React + TypeScript frontend with a single API layer and TanStack Query, rendering two distinct experiences (customer self-service vs. agent/admin console) off one role field in the JWT",
      "Dashboard and analytics computed live from real paginated list endpoints rather than a canned stats endpoint, so every number on screen is traceable back to an actual API call",
    ],
    lessonsLearned:
      "The backend was already built when I started on the frontend, and reading its contracts closely mattered more than I expected — it had customer-scoped endpoints (\"my orders\", \"my tickets\") but no admin lookup by customer id, which meant the agent console had to be designed around what the API could actually prove rather than what a typical support dashboard would want to show. I also hit two migration bugs that only surfaced against real Postgres (boolean defaults written as SQLite-style 0/1, and Alembic's version-tracking column being too narrow for this project's revision ids) — a good reminder that a green test suite against SQLite doesn't guarantee the same schema works on the database you'll actually deploy to.",
    screenshots: [
      "/projects/customer-care/login.png",
      "/projects/customer-care/signup.png",
      "/projects/customer-care/otp.png",
      "/projects/customer-care/chat.png",
      "/projects/customer-care/products.png",
      "/projects/customer-care/orders.png",
      "/projects/customer-care/tickets.png",
      "/projects/customer-care/knowledge-base.png",
      "/projects/customer-care/profile.png",
      "/projects/customer-care/admin-dashboard.png",
      "/projects/customer-care/feedback.png",
    ],
  },

    ]
  

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}