import { codeToHtml } from "shiki";
import Reveal from "@/components/Reveal";

const snippet = `@app.post("/ask")
def ask(payload: Question):
    embedding = ollama.embeddings(model="qwen3-embedding:latest", prompt=payload.question)["embedding"]
    matches = index.query(vector=embedding, top_k=3, include_metadata=True)["matches"]
    context = "\\n".join(match["metadata"]["text"] for match in matches)

    prompt = (
        "You are Eman's portfolio assistant. Answer the question about Eman "
        "using only the context below. If the context doesn't cover it, say "
        "you don't have that information.\\n\\n"
        f"Context:\\n{context}\\n\\nQuestion: {payload.question}"
    )
    response = llm.invoke(prompt)
    return {"answer": response.content}`;

export default async function CodeShowcase() {
  const html = await codeToHtml(snippet, { lang: "python", theme: "github-dark" });

  return (
    <section className="text-white px-6 py-20">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Code Showcase</h2>
        <p className="text-center text-gray-400 mb-12">
          The actual RAG endpoint powering the chat widget on this page
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="max-w-3xl mx-auto rounded-lg border border-gray-700 overflow-hidden">
          <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-gray-400 font-mono">main.py</span>
          </div>
          <div
            className="text-sm [&_pre]:!bg-black [&_pre]:p-4 [&_pre]:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Reveal>
    </section>
  );
}
