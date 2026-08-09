"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mljrgkjv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <section className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <p className="text-sm tracking-widest text-[#3EB8A9]">CONTACT</p>
        <h1 className="mt-4 text-4xl font-semibold">Let&apos;s talk about your project.</h1>
        <p className="mt-4 text-white/60">
          Have a problem worth solving? Tell me what you&apos;re trying to build.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="text-sm text-white/60">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3EB8A9]"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-white/60">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3EB8A9]"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm text-white/60">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3EB8A9]"
            />
          </div>

          <MagneticButton
            type="submit"
            disabled={status === "sending"}
            className="px-8 py-3 rounded-full bg-[#3EB8A9] text-[#050505] font-medium disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </MagneticButton>

          {status === "sent" && (
            <p className="text-sm text-[#3EB8A9]">Message sent — I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong. Try again or email me directly.</p>
          )}
        </form>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-3 text-sm text-white/60">
          <a href="mailto:emanbashir302@gmail.com" className="flex items-center gap-2 hover:text-[#3EB8A9]">
            <Mail size={16} /> emanbashir302@gmail.com
          </a>
          <a href="https://github.com/mano877" className="flex items-center gap-2 hover:text-[#3EB8A9]">
            <FiGithub size={16} /> github.com/mano877
          </a>
          <a href="https://linkedin.com/in/your-handle" className="flex items-center gap-2 hover:text-[#3EB8A9]">
            <FiLinkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}