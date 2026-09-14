export type FilterCategory = "Web Development" | "AI" | "Automation";

export type Project = {
  slug: string;
  emoji: "restobot" | "dr-aria" | "task-manager" | "customer-care" | "longlife-furnishers";
  category: string;
  secondaryCapability?: string;
  filterCategories: FilterCategory[];
  title: string;
  outcome: string;
  image?: string;
  cardImageFit?: "cover" | "contain";
  /** Short chips shown on the project card. Falls back to builtWith, then features, if not set. */
  tags?: string[];
  features: string[];
  architecture?: string[];
  /** Confirmed technologies only, shown in the detail page's "Built With" section. */
  builtWith?: string[];
  problem?: string;
  idea?: string;
  solution?: string;
  resultPurpose?: string;
  lessonsLearned?: string;
  screenshots?: string[];
  /** Optional captions shown under each screenshot, index-aligned with `screenshots`. */
  screenshotCaptions?: string[];
  liveUrl?: string;
  /** Overrides the default "View Live Demo" label on the liveUrl button, e.g. "Visit Live Site" for a real client site. */
  liveUrlLabel?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
{
    slug: "restobot",
    emoji: "restobot",
    category: "AI Knowledge Base / RAG",
    secondaryCapability: "Business Automation",
    filterCategories: ["AI", "Automation"],
    title: "Restaurant AI Assistant",
    outcome:"Turns a simple conversation into a complete ordering experience. No menus, no hassle.",
    image: "chat.png",
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
    builtWith: ["FastAPI", "PostgreSQL", "Pinecone (RAG)", "JWT Auth"],
    problem:
      "Restaurants running phone-in or in-person ordering deal with mistakes, slow turnaround, and staff tied up taking repetitive orders instead of running the kitchen.",
    idea:
      "Let customers order the way they'd normally ask a person, in plain language, and have the system understand menu items, quantities, and changes on its own.",
    solution:
      "A conversational ordering assistant that uses the restaurant's own menu as a knowledge source, parses natural-language requests into structured orders, and separates admin and customer permissions so staff and diners each see what they need.",
    resultPurpose:
      "Lets a restaurant take orders through conversation instead of a static menu form, while still producing clean, billable line items and GST-ready invoices behind the scenes.",
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
    githubUrl: "https://github.com/mano877/restobot-frontend",
  },

{
    slug: "dr-aria",
    emoji: "dr-aria",
    category: "AI Knowledge Base / RAG",
    secondaryCapability: "AI Insights",
    filterCategories: ["AI"],
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
    builtWith: ["FastAPI", "PostgreSQL", "Pinecone (RAG)", "Groq LLM"],
    problem:
      "Medical information is often written for clinicians, not patients: long documents, dense terminology, and no easy way to ask a follow-up question.",
    idea:
      "Give people a conversational way to work through their own medical documents and get plain-language answers, without losing the thread across a longer conversation.",
    solution:
      "An AI assistant built on a retrieval pipeline over uploaded documents, with persistent multi-conversation history and features for summarizing, tracking symptoms, and getting a second opinion on demand.",
    resultPurpose:
      "Turns a folder of medical documents into something a patient can actually have a conversation with: ask a question, get a grounded answer, come back to it later.",
    lessonsLearned:
      "Maintaining coherent multi-turn context across a conversation without re-sending the entire history to the LLM every time was the biggest architectural challenge. It pushed me to think carefully about what context actually needs to persist versus what can be re-retrieved from the vector store on demand.",
    screenshots: [
  "/projects/dr-aria/login.png",
  "/projects/dr-aria/signup.png",
  "/projects/dr-aria/chat.png",
  "/projects/dr-aria/center.png",
  "/projects/dr-aria/history.png",
  "/projects/dr-aria/footer.png",
  "/projects/dr-aria/insights.png",
  "/projects/dr-aria/documents.png",
],
    liveUrl: "https://medical-chatbot-frontend-rpoc-git-main-eman-fd69.vercel.app/",
    githubUrl: "https://github.com/mano877/medical-chatbot-frontend",
    },

{
  slug: "task-manager",
  emoji: "task-manager",
  category: "Workspace & Task Automation",
  secondaryCapability: "Productivity Automation",
  filterCategories: ["Web Development", "Automation"],
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
  builtWith: ["React", "FastAPI", "PostgreSQL", "LangChain + Ollama", "Redis", "Docker"],
  problem:
    "Personal task tracking and project-based work tend to live in separate tools, and the busywork of chasing deadlines usually falls on the person, not the system.",
  idea:
    "Combine personal tasks and project-scoped tasks in one workspace, then let an assistant that actually knows the current workload answer questions instead of making someone check manually.",
  solution:
    "A full-stack task and project workspace with its own dashboard and analytics, an AI chat assistant fed a live summary of what's overdue, due today, or high priority, and a background job that handles deadline reminders automatically.",
  resultPurpose:
    "Replaces manual status-checking with a workspace that already knows what's due, what's overdue, and what needs attention next.",
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
  githubUrl: "https://github.com/mano877/task-manager-frontend",
},

{
    slug: "customer-care",
    emoji: "customer-care",
    category: "AI Customer Support",
    secondaryCapability: "Business Automation",
    filterCategories: ["AI", "Automation"],
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
    builtWith: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Groq LLM", "JWT Auth"],
    problem:
      "Support inboxes fill up with the same handful of questions, while the ones that actually need a person get buried in the queue.",
    idea:
      "Let AI resolve what it reasonably can (orders, tickets, common questions) and route everything else to a human, instead of forcing every conversation through the same slow path.",
    solution:
      "A support platform with a role-aware customer portal and agent console, a chat pipeline that classifies intent before deciding whether to answer or escalate, and a ticket queue for the cases that need a person.",
    resultPurpose:
      "Gives a support team a system that filters and resolves routine requests on its own, so agent time goes to the conversations that actually need it.",
    lessonsLearned:
      "The backend was already built when I started on the frontend, and reading its contracts closely mattered more than I expected: it had customer-scoped endpoints (\"my orders\", \"my tickets\") but no admin lookup by customer id, which meant the agent console had to be designed around what the API could actually prove rather than what a typical support dashboard would want to show. I also hit two migration bugs that only surfaced against real Postgres (boolean defaults written as SQLite-style 0/1, and Alembic's version-tracking column being too narrow for this project's revision ids), a good reminder that a green test suite against SQLite doesn't guarantee the same schema works on the database you'll actually deploy to.",
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
    githubUrl: "https://github.com/mano877/ai-customer-care-frontend",
  },

{
    slug: "longlife-furnishers",
    emoji: "longlife-furnishers",
    category: "Website Design & Development",
    filterCategories: ["Web Development"],
    image: "homepage-hero.jpg",
    tags: ["WordPress", "Responsive Design", "WhatsApp Enquiries", "Product Showcase"],
    title: "Longlife Furnishers",
    outcome:
      "A fully functional furniture website designed to showcase products and make customer enquiries easier through WhatsApp.",
    builtWith: ["WordPress", "Elementor"],
    features: [
      "Responsive furniture/product website",
      "Product presentation",
      "WhatsApp enquiry flow",
      "Business/payment information",
      "Interactive calls-to-action",
      "Custom animations and transitions",
      "Responsive behavior across screen sizes",
      "Customized WordPress experience",
    ],
    problem:
      "Longlife Furnishers needed a professional web presence to present its furniture products clearly and give potential customers a convenient way to make enquiries.",
    idea:
      "Create a responsive furniture website that makes the products easy to explore while keeping the path from browsing to enquiry simple.",
    solution:
      "Customized an existing WordPress theme into a fully functional business website, including product presentation, responsive layouts, WhatsApp enquiry functionality, bank-transfer/payment information, interactive buttons, and custom animations.",
    resultPurpose:
      "A responsive, fully functional furniture website with product presentation, direct WhatsApp enquiries, business information, and interactive elements.",
    lessonsLearned:
      "Working within an existing WordPress theme meant customizing the experience without fighting the underlying structure: adjusting layouts, adding WhatsApp and payment details, and layering in animation and interaction so the site felt considered rather than templated.",
    screenshots: [
      "/projects/longlife-furnishers/homepage-hero.jpg",
      "/projects/longlife-furnishers/special-offers.jpg",
      "/projects/longlife-furnishers/mobile-hero.png",
      "/projects/longlife-furnishers/categories.jpg",
    ],
    screenshotCaptions: [
      "Customized the homepage experience with clear product navigation, prominent calls to action, and a polished furniture-focused layout.",
      "Customized the product presentation to make featured and promotional furniture easier to browse and compare.",
      "Implemented and verified responsive behavior so the navigation, layout, and customer enquiry CTA adapt cleanly to mobile screens.",
      "Customized the category experience to help visitors explore furniture by room type.",
    ],
    liveUrl: "https://longlife.bizfatt.com/",
    liveUrlLabel: "Visit Live Site",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}