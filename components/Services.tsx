import { MessageSquare, Database, Bot, Server, Layers } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "AI Chatbots & Assistants", description: "Conversational AI that understands context and helps with support, sales, and internal workflows." },
  { icon: Database, title: "RAG & Knowledge Systems", description: "Turn your documents and data into an AI assistant that answers questions using your own knowledge." },
  { icon: Bot, title: "AI Agents & Automation", description: "Autonomous workflows that handle repetitive tasks from data processing to multi-step business logic." },
  { icon: Server, title: "Backend/API Development", description: "Production-ready APIs with authentication, databases, integrations, and scalable architecture." },
  { icon: Layers, title: "AI-Powered SaaS Development", description: "End-to-end SaaS products with AI at the core, from idea to deployed, working software." },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen text-white px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What I Do</h2>
      <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
        I help businesses build AI systems that solve real problems — not just demos, but working products.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map(({ icon: Icon, title, description }) => (
          <div key={title} className="border border-white/10 bg-white/5 backdrop-blur rounded-xl p-6 hover:border-white/30 transition">
            <Icon className="w-6 h-6 text-[#3EB8A9] mb-3" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}