import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioAssistant from "@/components/PortfolioAssistant";

const TITLE = "Abdulrahman Emad | QA & Automation Engineer";
const DESCRIPTION =
  "Abdulrahman Emad is a QA & Automation Engineer in Cairo, Egypt, specializing in manual testing, API testing, SQL, and Selenium with Java.";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href="https://abdoemad-portofolio.lovable.app/" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content="https://abdoemad-portofolio.lovable.app/" />
    </Helmet>
    <Header />
    <main>
      <Hero />
      <Tools />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
    <PortfolioAssistant />
  </div>
);

export default Index;
