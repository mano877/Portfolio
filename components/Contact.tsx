import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="text-white px-6 py-24 text-center">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Build Something Amazing
        </h2>
       
       <p className="text-gray-400 mb-8">Average reply within 24 hours</p>
       <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=emanbashir302@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium"
      >
        Get In Touch
      </a>
      </Reveal>
    </section>
  );
}