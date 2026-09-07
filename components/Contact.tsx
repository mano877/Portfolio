import { Phone, Zap, Handshake, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  { icon: Phone, label: "Free Consultation" },
  { icon: Zap, label: "Fast Response" },
  { icon: Handshake, label: "Long-Term Partner" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-5xl md:text-6xl font-bold mb-5 text-foreground tracking-tight">
          Start the Conversation
        </h2>

        <p className="text-accent mb-10">Average reply within 24 hours</p>

        <a
          href="mailto:emanbashir302@gmail.com"
          className="inline-flex items-center gap-2 px-9 py-4 bg-foreground text-background rounded-lg font-medium text-lg shadow-md hover:shadow-lg transition-shadow"
        >
          Get In Touch
          <ArrowRight className="w-5 h-5" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 text-sm text-muted">
          {highlights.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2">
              <Icon className="w-4 h-4 text-accent" />
              {label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
