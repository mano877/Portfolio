export default function About() {
  return (
    <section id="about" className="text-white px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I'm a full-stack developer who builds AI systems that actually ship — not
          prototypes that stay in a notebook. I specialize in production-ready backends
          using <span className="text-[#3EB8A9]">FastAPI</span> and{" "}
          <span className="text-[#3EB8A9]">PostgreSQL</span>, with AI pipelines powered by{" "}
          <span className="text-[#3EB8A9]">RAG</span> and{" "}
          <span className="text-[#3EB8A9]">LLMs</span>. I also build clean, intuitive
          frontends when the project needs a complete user experience.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I care as much about the business problem as I do about the code. Every
          project starts with understanding what actually needs to happen — then
          choosing the technology that makes it work, rather than building something
          just because it's technically possible.
        </p>
      </div>
    </section>
  );
}