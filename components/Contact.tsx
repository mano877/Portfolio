import {
  Phone,
  Zap,
  Handshake,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";


const highlights = [
  { icon: Phone, title: "Free Consultation", subtitle: "30-Minutes" },
  { icon: Zap, title: "Fast Response", subtitle: "< 24 Hours" },
  { icon: Handshake, title: "Long-Term Partner", subtitle: "Beyond Delivery" },
];


export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
       Start the Conversation
     </h2>

<p className="text-accent mb-12">Average reply within 24 hours</p>

      {/* Highlights */}
      <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
        {highlights.map(({ icon: Icon, title, subtitle }) => (
          <div
  key={title}
  className="border border-accent/20 bg-card rounded-xl p-6 flex flex-col items-center gap-2 hover:border-accent/50 transition"
>
  <Icon className="w-6 h-6 text-accent" />
  <p className="font-semibold">{title}</p>
  <p className="text-sm text-muted">{subtitle}</p>
</div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center justify-center gap-3 mb-12 text-sm text-foreground/70">
  <div className="flex items-center gap-2">
    <Mail className="w-4 h-4" />
    <span>emanbashir302@gmail.com</span>
  </div>
  <div className="flex items-center gap-2">
    <MessageCircle className="w-4 h-4" />
    <span>Available for Freelance / Contract / Remote</span>
  </div>
  <div className="flex items-center gap-2">
    <FiGithub className="w-4 h-4" />
    <a href="https://github.com/mano877" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
      github.com/mano877
    </a>
  </div>
  <div className="flex items-center gap-2">
    <FiLinkedin className="w-4 h-4" />
    <a
      href="https://www.linkedin.com/in/eman-bashir-48b9392a7/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-accent transition"
    >
      linkedin.com/in/eman-bashir
    </a>
  </div>
</div>

      {/* CTA */}
      <a
        href="mailto:emanbashir302@gmail.com"
        className="inline-block px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition"
      >
        Get In Touch
      </a>
    </section>
  );
}
