import { Button } from "@/components/ui/button";
import { ChevronDown, FileDown, Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/abdulrahmanemadfathy", label: "LinkedIn", icon: Linkedin },
    { href: "https://github.com/abdoemadfathy", label: "GitHub", icon: Github },
    { href: "mailto:abdoemadfathy1@gmail.com", label: "Email", icon: Mail },
    { href: "https://wa.me/201126998251", label: "WhatsApp", icon: MessageCircle }
  ];

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="flex justify-center md:justify-center order-1">
            <img
              src={profileImage}
              alt="Abdulrahman Emad"
              className="animate-hero-img w-60 h-60 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-primary/40 shadow-2xl mt-8"
            />
          </div>

          <div className="text-center md:text-left order-2">
            <h1 className="animate-rise text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap" style={delay(200)}>
              <span className="text-primary">Abdulrahman</span>{" "}
              <span className="text-foreground">Emad</span>
            </h1>

            <p className="animate-rise text-lg md:text-xl text-muted-foreground mb-6" style={delay(350)}>
              Software Quality Assurance Engineer specializing in Manual &amp; Automated Testing, API Validation, and End-to-End Web &amp; Mobile Quality Assurance.
            </p>

            <div className="animate-rise flex flex-wrap gap-4 justify-center md:justify-start mb-8" style={delay(500)}>
              <Button onClick={scrollToProjects} size="lg" className="bg-primary hover:bg-primary/90 hover-glow-soft">
                View My Work
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-glow-soft">
                <a href="/CV_Abdulrahman_Emad.pdf" download="Abdulrahman_Emad_CV.pdf">
                  <FileDown className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="animate-rise flex gap-4 justify-center md:justify-start" style={delay(650)}>
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_top"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 hover-glow-soft"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce mx-auto mt-12" />
      </div>
    </section>
  );
};

export default Hero;
