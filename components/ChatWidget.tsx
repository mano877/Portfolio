"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, Sparkles } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

const suggestions = [
  "How did you build the restaurant assistant?",
  "Explain your RAG architecture.",
  "Show your backend experience.",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Eman's AI assistant. Ask me anything about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading]);

  async function sendMessage(question: string) {
    if (!question || loading) return;
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't reach the backend. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input.trim());
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex h-96 w-80 flex-col overflow-hidden rounded-xl border border-[#224248]/30 bg-gray-900 shadow-2xl shadow-[#224248]/10 sm:w-96"
          >
            <div className="flex items-center gap-3 border-b border-gray-700 bg-black px-4 py-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#224248] to-[#3EB8A9]">
                <Bot size={18} className="text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Eman AI Assistant</p>
                <p className="text-xs text-green-400">Online</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-gray-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#224248] to-[#3EB8A9]">
                      <Bot size={12} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      m.role === "user" ? "bg-white text-black" : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-end gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#224248] to-[#3EB8A9]">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-400">Thinking...</div>
                </div>
              )}

              {messages.length === 1 && !loading && (
                <div className="flex flex-col gap-2 pt-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-left text-xs text-gray-300 hover:border-[#3EB8A9] hover:text-white transition"
                    >
                      <Sparkles size={12} className="text-[#3EB8A9] shrink-0" />
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-gray-700 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="flex-1 rounded-md border border-gray-700 bg-black px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#3EB8A9]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-md bg-gradient-to-br from-[#224248] to-[#3EB8A9] px-3 py-2 text-sm font-medium text-white disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle chat"
        whileHover={{ scale: 1.05 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#224248] to-[#3EB8A9] text-white shadow-lg"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}>
              <Bot size={24} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-[#3EB8A9]"
            animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.button>
    </div>
  );
}