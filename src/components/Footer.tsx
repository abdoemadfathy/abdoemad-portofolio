import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border">
    <div className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-3xl font-semibold sm:text-4xl">
          Let's build <span className="text-gradient">better software.</span>
        </p>
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-semibold">Abdulrahman Emad Fathy</p>
            <p className="text-sm text-muted-foreground">Software QA Engineer · Computer Science &amp; AI Student</p>
          </div>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a className="link-underline flex items-center gap-2 hover:text-foreground" href="https://github.com/abdoemadfathy" target="_top" rel="noopener noreferrer"><Github className="h-4 w-4" />GitHub</a>
            <a className="link-underline flex items-center gap-2 hover:text-foreground" href="https://www.linkedin.com/in/abdulrahmanemadfathy" target="_top" rel="noopener noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
            <a className="link-underline flex items-center gap-2 hover:text-foreground" href="mailto:abdulrahmanemadfathy@gmail.com" target="_top"><Mail className="h-4 w-4" />Email</a>
          </div>
        </div>
        <p className="mt-10 font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Abdulrahman Emad Fathy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
