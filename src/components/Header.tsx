import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Abdelrahman</h1>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;