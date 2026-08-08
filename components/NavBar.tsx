"use client";

const links = [
  { label: "Home", id: "top" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center gap-8 text-sm text-gray-300">
        {links.map((link, i) => (
          <span key={link.id} className="flex items-center gap-8">
            <button onClick={() => scrollTo(link.id)} className="text-gray-400 hover:text-[#3EB8A9] transition-colors">
              {link.label}
            </button>
            {i < links.length - 1 && <span className="text-gray-600">·</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}