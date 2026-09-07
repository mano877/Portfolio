export type Service = {
  slug: string;
  number: string;
  icon: "web-development" | "ai-solutions" | "automation-integration";
  title: string;
  shortDescription: string;
  positioning: string;
  whoItsFor: string[];
  problems: string[];
  features: string[];
  example: string;
  technology: string[];
  StartingPrice: string;
  caseStudy?: {
    project: string;
    description: string;
    href: string;
  };
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    icon: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, responsive websites and web applications designed around business goals, user experience and conversion.",
    positioning: "A strong digital presence starts with a website that actually works for the business behind it.",
    whoItsFor: [
      "Businesses without a clear digital presence",
      "Companies outgrowing a template website",
      "Product or service businesses that need to be found and understood online",
      "Teams needing a custom web application, not just a brochure site",
    ],
    problems: [
      "An outdated or template-based website",
      "A site that doesn't clearly represent what the business does",
      "No clear path for a visitor to enquire or convert",
      "A growing product that has outgrown spreadsheets or a static page",
    ],
    features: [
      "Responsive, mobile-first design",
      "Business and marketing websites",
      "Website redesigns",
      "React and full-stack web applications",
      "Backend and API development",
      "Database integration",
      "Deployment and hosting setup",
    ],
    example:
      "A business is relying on an outdated site that doesn't represent what it actually offers. A redesigned, responsive website reorganizes the content around what visitors are looking for, with a clear path to get in touch.",
    technology: ["React", "Next.js", "FastAPI", "PostgreSQL", "REST APIs", "Docker"],
    StartingPrice: "From $300",
  },
  {
    slug: "ai-solutions",
    number: "02",
    icon: "ai-solutions",
    title: "AI Solutions",
    shortDescription:
      "Practical AI systems that make information, customer support and business processes easier to manage.",
    positioning: "AI that actually answers the question and knows when to hand off to a person.",
    whoItsFor: [
      "E-commerce and service businesses with high customer inquiry volume",
      "Companies with large documentation, policies, or internal knowledge",
      "SaaS businesses supporting their own users",
      "Teams that need information or support available outside business hours",
    ],
    problems: [
      "Repetitive customer or internal questions",
      "Slow response times",
      "Information scattered across documents nobody has time to search",
      "Support workload that grows faster than the team",
    ],
    features: [
      "AI-powered conversations with real context",
      "FAQ and document-based Q&A (RAG)",
      "Customer support automation with human handoff",
      "Document ingestion and semantic search",
      "Source references and citations",
      "API integrations with existing systems",
    ],
    example:
      "A customer asks about an order, a policy, or a product. The assistant retrieves the relevant answer from real documentation or business data and responds directly, handing the conversation to a person only when it genuinely needs one.",
    technology: ["LLMs", "RAG", "Embeddings", "Vector Databases", "FastAPI", "PostgreSQL", "Docker"],
    StartingPrice: "From $400",
  },
  {
    slug: "automation-integration",
    number: "03",
    icon: "automation-integration",
    title: "Automation & Integration",
    shortDescription:
      "Systems that reduce repetitive work and connect the tools a business already uses.",
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
      "Workflow and business process automation",
      "API integrations between existing tools",
      "Lead capture and notification systems",
      "Custom dashboards and internal tools",
      "Scheduled tasks and background processing",
      "AI-powered workflows",
      "Automated reporting",
    ],
    example:
      "Instead of manually checking records, updating data, generating reports, and sending notifications: Data → Automation → Dashboard → Action.",
    technology: ["React", "FastAPI", "PostgreSQL", "REST APIs", "Background Tasks", "Docker"],
    StartingPrice: "From $1000",
    caseStudy: {
      project: "RestoBot",
      description:
        "Restaurant ordering workflow automated through an AI chatbot, from menu understanding to order creation, modification, cancellation, and billing.",
      href: "/projects/restobot",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
