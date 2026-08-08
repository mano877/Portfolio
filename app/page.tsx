import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
    </>
  );
}
