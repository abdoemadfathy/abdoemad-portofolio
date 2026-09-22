import { Button } from "@/components/ui/button";
import { ChevronDown, FileDown, Linkedin, Github, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg.asset.json";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/abdulrahmanemadfathy",
      label: "LinkedIn",
      icon: Linkedin
    },
    {
      href: "https://github.com/abdoemadfathy",
      label: "GitHub",
      icon: Github
    },
    {
      href: "mailto:abdelrahman.emad@example.com",
      label: "Email",
      icon: Mail
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img 
            src={profileImage.url} 
            alt="Abdulrahman Emad Fathy"
            className="w-48 h-48 rounded-full mx-auto border-4 border-primary shadow-2xl mt-8"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-primary">Abdulrahman</span>
          <br />
          <span className="text-foreground">Emad Fathy</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Software Quality Assurance Engineer specializing in Manual & Automated Testing, API Validation, and End-to-End Web & Mobile Quality Assurance.
        </p>
        
        <div className="flex gap-4 justify-center mb-8">
          <Button onClick={scrollToProjects} size="lg" className="bg-primary hover:bg-primary/90">
            View My Work
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/CV_Abdulrahman_Emad.pdf" download="Abdulrahman_Emad_CV.pdf">
              <FileDown className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center mb-12">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_top"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
