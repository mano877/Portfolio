import Hero from "@/components/Hero";
import WhyHireMe from "@/components/WhyHireMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Terminal from "@/components/Terminal";
import GitHubStats from "@/components/GitHubStats";
import Timeline from "@/components/TimeLine"
import Contact from "@/components/Contact";
import Architecture from "@/components/Architecture";
import CodeShowcase from "@/components/CodeShowcase";
import ChatWidget from "@/components/ChatWidget";
import EasterEgg from "@/components/EasterEgg";
import BootSequence from "@/components/BootSequence";
import Navbar from "@/components/NavBar";
import Process from "@/components/Process";
import About from "@/components/About";
import Services from "@/components/Services";



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
        <main>
      <BootSequence/>
      <Hero />
      <WhyHireMe />
      <Projects />
      <Skills />
      <section className="px-6 py-20">
  <  div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
      <Terminal />
      <Architecture />
    </div>
      </section>
      <Timeline />
      <CodeShowcase />
      <Contact />
      <ChatWidget />
      <EasterEgg />
    </main>
  