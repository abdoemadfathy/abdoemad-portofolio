import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Guru99 Bank Testing Project",
      description: "End-to-end manual testing project for Guru99 Bank application, covering different modules and flows.",
      period: "Sep 2025",
      technologies: ["Test Case Design", "Manual Testing", "Bug Reporting", "Regression Testing", "Documentation"],
      features: [
        "Designed test cases covering all modules",
        "Executed comprehensive testing flows", 
        "Prepared detailed bug reports",
        "Performed regression testing"
      ],
      skills: ["Test Case Design", "Manual Testing", "Bug Reporting", "Regression Testing", "Documentation"],
      github: "https://github.com/abdoemadfathy/Testing-Portfolio",
      featured: true
    },
    {
      title: "Mini Banking System",
      description: "A comprehensive console-based project simulating real-world banking operations with secure account management, efficient file handling, and structured data design.",
      period: "Aug 2025",
      technologies: ["C++", "File Handling", "Data Structures"],
      features: [
        "📋 Client Management: Add, update, delete, search",
        "💰 Transactions: Deposit, withdraw, balance calculation",
        "📂 File Handling: Store/retrieve client data",
        "🔎 Data Presentation: Clean formatted tables using iomanip"
      ],
      skills: ["C++ (Functions, Structs, Enums, Vectors)", "File Handling (read/write/append)"],
      github: "https://github.com/abdoemadfathy/Mini-Banking-System",
      featured: true
    },
    {
      title: "Math Quiz Game",
      description: "Interactive console-based quiz application with multiple difficulty levels, dynamic question generation, instant feedback, and comprehensive score tracking.",
      period: "Jul 2025",
      technologies: ["C++", "Algorithm Design", "User Interface"],
      features: [
        "🎯 Multiple difficulty levels (Easy, Medium, Hard)",
        "🔄 Dynamic question generation",
        "⚡ Instant feedback system",
        "📊 Score tracking and statistics"
      ],
      skills: ["C++ Programming", "Logic Design", "User Experience"],
      github: "https://github.com/abdoemadfathy/C-_Math_Quiz_Game"
    },
    {
      title: "Rock-Paper-Scissors Game",
      description: "Multi-round console game featuring input validation, random computer choices, color-coded results, and well-structured game logic.",
      period: "Jun 2025",
      technologies: ["C++", "Game Logic", "Random Generation"],
      features: [
        "🎮 Multi-round gameplay",
        "✅ Input validation system",
        "🤖 Smart computer opponent",
        "🎨 Color-coded result display"
      ],
      skills: ["C++ Fundamentals", "Game Development", "Algorithm Implementation"],
      github: "https://github.com/abdoemadfathy/Rock--Paper-Scissors"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my programming journey, demonstrating skills in C++ development, problem-solving, and software design principles.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              project.featured ? 'ring-2 ring-primary/50' : ''
            }`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.featured && <Star className="w-5 h-5 text-primary fill-current" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button asChild size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                I'm constantly working on new projects to expand my skills in software testing, automation, and AI development. 
                Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;