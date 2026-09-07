import Link from "next/link";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";


export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-foreground font-medium">Eman</p>
          <p className="text-sm text-muted">AI Solutions • Automation • Web Development</p>
          <p className="text-sm text-muted mt-1">Building practical, business-focused technology.</p>
        </div>

        <nav className="flex flex-col gap-1 text-sm text-foreground/70">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/#work">Work</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>© 2026 Eman. Built with curiosity & clean code.</p>
        <div className="flex gap-4">
          <a href="https://github.com/mano877" aria-label="GitHub"><FiGithub size={16} /></a>
          <a href="mailto:emanbashir302@gmail.com" aria-label="Email"><Mail size={16} /></a>
          <a href="https://www.linkedin.com/in/eman-bashir-48b9392a7/" aria-label="LinkedIn"><FiLinkedin size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
