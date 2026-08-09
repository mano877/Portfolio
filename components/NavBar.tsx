"use client";

import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { label: "Home", id: "top" },
  { label: "Services", id: "services", href: "/services" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    if (id === "top") {
      if (pathname !== "/") { router.push("/"); return; }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (pathname !== "/") { router.push(`/#${id}`); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center gap-8 text-sm text-gray-300 relative">
        {links.map((link, i) => (
          <span key={link.id} className="flex items-center gap-8">
            {link.href ? (
              <Link href={link.href} className="text-gray-400 hover:text-[#3EB8A9] transition-colors">
                {link.label}
              </Link>
            ) : (
              <button onClick={() => scrollTo(link.id)} className="text-gray-400 hover:text-[#3EB8A9] transition-colors">
                {link.label}
              </button>
            )}
            {i < links.length - 1 && <span className="text-gray-600">·</span>}
          </span>
        ))}
        <a
          href="https://github.com/mano877/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="absolute right-6 text-gray-400 hover:text-[#3EB8A9] transition-colors"
        >
          <FiGithub className="w-[18px] h-[18px]" />
        </a>
      </div>
    </nav>
  );
}