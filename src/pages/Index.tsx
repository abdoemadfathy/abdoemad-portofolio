import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import PortfolioAssistant from "@/components/PortfolioAssistant";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <PortfolioAssistant />
    </div>
  );
};

export default Index;
