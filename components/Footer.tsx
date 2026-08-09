import Link from "next/link";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi"
import MagneticButton from "@/components/MagneticButton";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Let&apos;s build something
          <br />
          worth talking about.
        </h2>
        <p className="mt-4 text-white/60 max-w-md mx-auto">
          Have a project, idea, or business problem? Let&apos;s figure out the right solution.
        </p>
        <div className="mt-8">
          <Link href="/contact">
          <MagneticButton>Let&apos;s Build Something →</MagneticButton>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-white font-medium">Eman</p>
            <p className="text-sm text-white/50">AI Developer</p>
            <p className="text-sm text-white/50 mt-1">Building practical AI-powered solutions.</p>
          </div>

          <nav className="flex flex-col gap-1 text-sm text-white/60">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Eman. Built with curiosity & clean code.</p>
          <div className="flex gap-4">
            <a href="https://github.com/mano877" aria-label="GitHub"><FiGithub size={16} /></a>
            <a href="mailto:you@email.com" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}