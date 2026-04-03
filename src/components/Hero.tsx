import { Button } from "@/components/ui/button";
import { ChevronDown, FileDown } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img 
            src={profileImage} 
            alt="Abdulrahman Emad Fathy"
            className="w-48 h-48 rounded-full mx-auto border-4 border-primary shadow-2xl mt-8"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-primary">Abdelrahman</span>
          <br />
          <span className="text-foreground">Emad Fathy</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Delivering Excellence in Software Quality Assurance
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Computer Science student specializing in Artificial Intelligence, building expertise in software testing and quality assurance.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Button onClick={scrollToProjects} size="lg" className="bg-primary hover:bg-primary/90">
            View My Work
          </Button>
          <Button onClick={scrollToContact} variant="outline" size="lg">
            Get In Touch
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/CV_Abdulrahman_Emad.pdf" target="_blank" rel="noopener noreferrer">
              <FileDown className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
        
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce mx-auto" />
      </div>
    </section>
  );
};

export default Hero;