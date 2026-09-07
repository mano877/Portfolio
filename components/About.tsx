export default function About() {
  const capabilities = ["Frontend", "Backend", "APIs", "Databases", "AI / RAG", "Automation", "Deployment"];

  return (
    <section id="about" className="text-foreground px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Behind the Work</h2>

        <p className="text-foreground/80 leading-relaxed mb-4">
          Behind every project is a business trying to do something better — attract more
          customers, answer enquiries faster, simplify a workflow, or build a stronger
          digital presence. That&apos;s where the work begins.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          From modern websites and full-stack applications to AI assistants and business
          automation, each solution is shaped around a real need rather than technology
          for its own sake. The result is digital work that looks good, works reliably,
          and has a reason to exist.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Modern digital products rarely live in one layer. A polished interface needs a
          reliable backend. A useful AI assistant needs structured data behind it. An
          automation workflow needs systems that can actually talk to each other. Building
          any of it well means thinking across the whole stack.
        </p>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {capabilities.map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full border border-border bg-card text-xs text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
