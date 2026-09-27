import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Abdulrahman</h1>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {links.map(([label, id]) => (
              <Button key={id} variant="ghost" size="sm" onClick={() => scrollToSection(id)} className="text-muted-foreground hover:text-primary">
                {label}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {menuOpen && (
          <div className="md:hidden grid grid-cols-2 gap-2 pt-4 pb-1 border-t border-border mt-4">
            {links.map(([label, id]) => (
              <Button key={id} variant="ghost" onClick={() => scrollToSection(id)} className="justify-start text-muted-foreground hover:text-primary">
                {label}
              </Button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;