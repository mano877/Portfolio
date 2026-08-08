import { Search, PenTool, Code2, Rocket, Sparkles } from "lucide-react";

const steps = [
  { number: "01", title: "Discover", description: "Understand the business problem, users, and workflow.", icon: Search },
  { number: "02", title: "Design", description: "Define the solution, architecture and AI approach.", icon: PenTool },
  { number: "03", title: "Build", description: "Develop, integrate, test, and refine the system.", icon: Code2 },
  { number: "04", title: "Deploy", description: "Launch, monitor and optimize for real-world use.", icon: Rocket },
];

function ProcessConnector() {
  return (
    <div className="relative w-full h-32 flex flex-col items-center">
      {/* Horizontal dashed line */}
      <div className="absolute top-6 left-[6%] right-[6%] border-t border-dashed border-[#3EB8A9]/40" />

      {/* Center hexagon */}
      <div
        className="relative z-10 w-20 h-20 flex items-center justify-center bg-[#071313] border border-[#3EB8A9]/50 shadow-[0_0_25px_rgba(62,184,169,0.15)]"
        style={{ clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)" }}
      >
        <div
          className="absolute inset-[1px] bg-[#071313]"
          style={{ clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)" }}
        />
        <Sparkles className="relative z-10 w-6 h-6 text-[#3EB8A9]" />
      </div>

      {/* Downward arrow */}
      <div className="absolute top-[76px] flex flex-col items-center">
        <div className="w-px h-4 bg-[#3EB8A9]/50" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#3EB8A9] animate-bounce">
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="text-white px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How I Work</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.number} className="relative">
                <div className="border border-white/10 bg-white/5 backdrop-blur rounded-xl p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[#3EB8A9] font-mono text-sm">{s.number}</span>
                    <Icon className="w-5 h-5 text-[#3EB8A9]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-6 -translate-y-1/2 z-10">
                    <svg width="24" height="8" viewBox="0 0 24 8">
                      <line x1="0" y1="4" x2="24" y2="4" stroke="#3EB8A9" strokeWidth="2" strokeDasharray="2,3" opacity="0.6" />
                      <circle cx="12" cy="4" r="3" fill="#3EB8A9" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <ProcessConnector />

        {/* CTA card */}
        <div className="max-w-2xl mx-auto border border-[#3EB8A9]/30 bg-[#3EB8A9]/5 backdrop-blur rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Have a Process that Could be Automated?</h3>
          <p className="text-gray-400 mb-6">
            Let's identify where AI can save your team time, reduce manual work, and improve your workflow.
          </p>
          <a
            href="https://wa.me/923124467526?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20an%20AI%20solution%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Book a Free Consultation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}