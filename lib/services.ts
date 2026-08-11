export type Service = {
  slug: string;
  number: string;
  icon: "chatbot" | "knowledge-base" | "dashboard-automation";
  title: string;
  shortDescription: string;
  positioning: string;
  whoItsFor: string[];
  problems: string[];
  features: string[];
  example: string;
  technology: string[];
  StartingPrice: string;
};

export const services: Service[] = [
  {
    slug: "customer-support-chatbot",
    number: "01",
    icon: "chatbot",
    title: "AI Customer Support Chatbot",
    shortDescription:
      "AI-powered customer support that answers questions, handles repetitive requests, integrates with business systems, and can hand off complex conversations to humans.",
    positioning: "Turn repetitive support into instant, intelligent conversations.",
    whoItsFor: [
      "E-commerce",
      "SaaS",
      "Restaurants",
      "Service businesses",
      "Businesses with high-volume customer inquiries",
    ],
    problems: [
      "Repetitive customer questions",
      "Slow response times",
      "High support workload",
      "Customers needing answers outside business hours",
      "Difficulty handling growing support volume",
    ],
    features: [
      "AI-powered conversations",
      "FAQ handling",
      "RAG / knowledge retrieval",
      "Conversation history",
      "Human handoff",
      "API integrations",
      "Customer/order information lookup",
      "Custom business workflows",
    ],
    example:
      "A customer asks a question about an order, product, service, or policy. The chatbot understands the request, retrieves the relevant information, and responds. If the issue requires a human, it can hand the conversation over.",
    technology: ["LLMs", "RAG", "Vector Databases", "FastAPI", "PostgreSQL", "REST APIs", "Authentication", "Docker"],
    StartingPrice: "$300",
  },
  {
    slug: "knowledge-base-chatbot",
    number: "02",
    icon: "knowledge-base",
    title: "AI Knowledge Base / RAG Chatbot",
    shortDescription:
      "Turn company documents, policies, manuals, and internal knowledge into an intelligent assistant that can find and explain information instantly.",
    positioning: "Turn your company knowledge into an AI assistant.",
    whoItsFor: [
      "Companies with large documentation",
      "Internal teams",
      "SaaS businesses",
      "Organizations with SOPs and manuals",
      "Companies with policies, training material, or internal documentation",
    ],
    problems: [
      "Information scattered across documents",
      "Employees wasting time searching",
      "Difficulty finding the correct information",
      "Repetitive internal questions",
    ],
    features: [
      "PDF/document ingestion",
      "Document processing",
      "Embeddings",
      "Semantic search",
      "RAG pipeline",
      "Context-aware answers",
      "Source references/citations",
      "Knowledge-base management",
      "Secure access",
    ],
    example:
      "An employee asks: “What is our refund policy for international orders?” The assistant searches the approved company documentation and provides a relevant answer based on that information.",
    technology: ["LLMs", "RAG", "Embeddings", "Vector Databases", "FastAPI", "PostgreSQL", "Docker"],
    StartingPrice: "$500",
  },
  {
    slug: "dashboard-automation",
    number: "03",
    icon: "dashboard-automation",
    title: "AI Dashboard & Automation",
    shortDescription:
      "Connect business data, dashboards, and automated workflows to reduce repetitive work and make operations more efficient.",
    positioning: "Turn scattered data and repetitive work into connected systems.",
    whoItsFor: ["Operations teams", "SaaS businesses", "Agencies", "E-commerce", "Service businesses", "Growing companies"],
    problems: [
      "Manual repetitive work",
      "Spreadsheet dependency",
      "Disconnected systems",
      "Manual reporting",
      "Lack of visibility into business data",
    ],
    features: [
      "Custom dashboards",
      "Data visualization",
      "Workflow automation",
      "Scheduled tasks",
      "Notifications",
      "Automated reports",
      "API integrations",
      "Background processing",
      "Admin panels",
    ],
    example:
      "Instead of manually checking records, updating data, generating reports, and sending notifications: Data → Automation → Dashboard → Action.",
    technology: ["React", "FastAPI", "PostgreSQL", "REST APIs", "Background Tasks", "Docker"],
    StartingPrice: "$1000",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
