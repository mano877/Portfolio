import Hero from "@/components/Hero";
import Work from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Navbar from "@/components/NavBar";
import ScrollHandler from "@/components/ScrollHandler";



export default function Home() {
  return (
    <>
     <ScrollHandler />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
    </>
  );
}
