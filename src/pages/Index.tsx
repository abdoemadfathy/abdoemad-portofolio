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
import { Helmet } from "react-helmet-async";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Abdulrahman Emad | Software Quality Assurance Engineer</title>
        <meta name="description" content="Explore Abdulrahman Emad's software quality assurance portfolio, featuring manual and automated testing, API validation, and web and mobile QA projects." />
        <link rel="canonical" href="https://abdoemad-portofolio.lovable.app/" />
        <meta property="og:title" content="Abdulrahman Emad | Software Quality Assurance Engineer" />
        <meta property="og:description" content="Explore Abdulrahman Emad's software quality assurance portfolio, featuring manual and automated testing, API validation, and web and mobile QA projects." />
        <meta property="og:url" content="https://abdoemad-portofolio.lovable.app/" />
      </Helmet>
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
