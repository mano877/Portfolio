"use client";
import { useEffect, useState } from "react";

const LOG_LINES = [
  { text: "[portfolio-rag] query_in: \"tell me about RestoBot\"", color: "text-gray-400" },
  { text: "  embed → llama-text-embed-v2 (384-dim)", color: "text-[#3EB8A9]" },
  { text: "  pinecone.query(top_k=3) → 3 matches", color: "text-[#3EB8A9]" },
  { text: "  groq.generate(llama-3.1) → streaming", color: "text-[#3EB8A9]" },
  { text: "  resolved  latency=340ms  cost=$0.0003", color: "text-green-400" },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LOG_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 600);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="rounded-lg border border-white/10 bg-[#0a0f0f] overflow-hidden">
      <div className="bg-[#111818] px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-gray-500 font-mono">eman@portfolio: ~</span>
      </div>
      <div className="p-6 font-mono text-sm space-y-1.5 min-h-[220px]">
        {LOG_LINES.slice(0, visibleLines).map((line, i) => (
          <p key={i} className={line.color}>
            {line.text}
          </p>
        ))}
        {visibleLines < LOG_LINES.length && (
          <span className="inline-block w-2 h-4 bg-[#3EB8A9] animate-pulse" />
        )}
      </div>
    </div>
  );
}