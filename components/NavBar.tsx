"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGithub, FiLinkedin } from "react-icons/fi";


const links = [
  { label: "Home", id: "top" },
  { label: "Services", id: "services", href: "/services" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center gap-x-4 gap-y-2 flex-wrap text-sm text-gray-300 relative">
        {links.map((link, i) => (
          <span key={link.id} className="flex items-center gap-4">
            {link.href ? (
              <Link href={link.href} className="text-gray-400 hover:text-[#3EB8A9] transition-colors">
                {link.label}
              </Link>
            ) : isHome ? (
              <button onClick={() => scrollTo(link.id)} className="text-gray-400 hover:text-[#3EB8A9] transition-colors">
                {link.label}
              </button>
            ) : (
              <Link href={link.id === "top" ? "/" : `/#${link.id}`} className="text-gray-400 hover:text-[#3EB8A9] transition-colors">
                {link.label}
              </Link>
            )}
            {i < links.length - 1 && <span className="text-gray-600">·</span>}
          </span>
        ))}

        <div className="sm:absolute sm:right-6 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/eman-bashir-48b9392a7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-[#3EB8A9] transition-colors"
          >
            <FiLinkedin className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://github.com/mano877/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-400 hover:text-[#3EB8A9] transition-colors"
          >
            <FiGithub className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </nav>
  );
}