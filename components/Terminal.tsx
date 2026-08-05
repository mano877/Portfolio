import Reveal from "@/components/Reveal";

export default function Terminal() {
  return (
    <Reveal className="w-full">
      <div className="rounded-lg border border-gray-700 overflow-hidden h-full">
        <div className="bg-gray-900 px-4 py-2 flex items-center gap-3">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-gray-400 font-mono">eman@portfolio: ~</span>
        </div>
        <div className="p-6 font-mono text-sm text-green-400 space-y-2">
          <p>$ whoami</p>
          <p className="text-gray-300">Full-Stack Developer - AI-Integrated APIs</p>
          <p>$ skills</p>
          <p className="text-gray-300">FastAPI, Docker, PostgreSQL, React, JWT, RAG, Pinecone, Groq</p>
          <p>$ hire</p>
          <p className="text-gray-300">Opening contact...</p>
        </div>
      </div>
    </Reveal>
  );
}