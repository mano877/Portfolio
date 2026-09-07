"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import MagneticButton from "@/components/MagneticButton";
import Navbar from "@/components/NavBar";

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
    <>
      <Navbar />
      <main className="bg-background text-foreground min-h-screen">
        <section className="max-w-2xl mx-auto px-6 pt-32 pb-24">
          <p className="text-sm tracking-widest text-accent">CONTACT</p>
          <h1 className="mt-4 text-4xl font-semibold">Let&apos;s talk about your project.</h1>
          <p className="mt-4 text-muted">
            Have a problem worth solving? The first step is figuring out what needs to be built.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-muted">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-muted">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-muted">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <MagneticButton
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 rounded-full bg-accent text-background font-medium disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </MagneticButton>

            {status === "sent" && (
              <p className="text-sm text-accent">Message sent. Expect a reply soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Try again, or reach out directly by email.</p>
            )}
          </form>

          <div className="mt-16 pt-8 border-t border-border flex flex-col gap-3 text-sm text-muted">
            <a href="mailto:emanbashir302@gmail.com" className="flex items-center gap-2 hover:text-accent">
              <Mail size={16} /> emanbashir302@gmail.com
            </a>
            <a href="https://github.com/mano877" className="flex items-center gap-2 hover:text-accent">
              <FiGithub size={16} /> github.com/mano877
            </a>
            <a href="https://www.linkedin.com/in/eman-bashir-48b9392a7/" className="flex items-center gap-2 hover:text-accent">
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
