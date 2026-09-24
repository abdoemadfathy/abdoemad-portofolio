import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, ShoppingCart, Send, Landmark, Smartphone, ClipboardCheck, CheckCircle2 } from "lucide-react";

const getDomain = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("api")) return { label: "API Testing", icon: Send };
  if (t.includes("bank")) return { label: "Banking QA", icon: Landmark };
  if (t.includes("social") || t.includes("app")) return { label: "Mobile App QA", icon: Smartphone };
  if (t.includes("commerce") || t.includes("swag")) return { label: "E-Commerce QA", icon: ShoppingCart };
  return { label: "Manual QA", icon: ClipboardCheck };
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce QA Graduation Project – OpenCart",
      description: "Software Quality Assurance graduation project for an e-commerce platform (OpenCart), covering the full QA lifecycle with manual and automated testing.",
      period: "2025",
      technologies: ["Manual Testing", "Selenium WebDriver", "Cucumber (BDD)", "Postman", "SQL", "JIRA"],
      features: [
        "Performed manual functional and non-functional testing",
        "Automated critical user journeys using Selenium WebDriver with Cucumber (BDD)",
        "Conducted API testing using Postman and validated backend data using SQL",
        "Prepared complete test documentation and managed defect tracking using JIRA"
      ],
      skills: ["Full QA Lifecycle", "Test Automation", "API Testing", "Defect Management", "Test Documentation"],
      github: "https://github.com/abdoemadfathy/GraduationProject_DEPI_SoftwareTesting",
      featured: true
    },
    {
      title: "API Testing Project – Restful Booker Automation",
      description: "API testing project on the Restful Booker API covering authentication, CRUD operations, negative testing, and automation with professional reporting.",
      period: "2025",
      technologies: ["Postman", "API Testing", "Manual Testing", "Java", "Newman"],
      features: [
        "Designed and executed requests covering authentication and CRUD operations",
        "Implemented Postman test scripts to validate status codes and response data",
        "Used global and environment variables for dynamic data management",
        "Automated workflows using Pre-request Scripts and Collection Runner/Newman"
      ],
      skills: ["API Testing", "Test Automation", "Postman Scripting", "Newman", "Test Reporting"],
      github: "https://github.com/abdoemadfathy/API-Testing-Project-using-Postman-Restful-Booker-Automation",
      featured: true
    },
    {
      title: "Manual Testing Project – Swag Labs",
      description: "Manual testing project on the Swag Labs demo website covering Login, Add to Cart, Checkout, and Sorting functionalities with detailed test cases and bug reports.",
      period: "2025",
      technologies: ["Manual Testing", "Test Cases", "Bug Reporting", "Test Planning", "UAT"],
      features: [
        "Designed and executed detailed test cases with preconditions and expected/actual results",
        "Tested multiple functionalities: Login, Add to Cart, Checkout, and Sorting",
        "Identified critical defects using different user roles",
        "Documented professional bug reports with severity, priority, and reproduction steps"
      ],
      skills: ["Manual Testing", "Test Case Design", "Bug Reporting", "UAT", "Defect Documentation"],
      github: "https://github.com/abdoemadfathy/Manual-Testing-Project---Swag-Labs-Test-Cases-Bug-Reports-",
      featured: true
    },
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
      featured: false
    },
    {
      title: "Vegetables E-Commerce Platform | Manual Testing",
      description: "Independent manual testing project for a Vegetables E-Commerce Platform, covering Web, Mobile, and Admin Panel interfaces with comprehensive test case design and defect management.",
      period: "Mar 2025",
      technologies: ["Manual Testing", "Jira", "Zephyr Scale", "Cross-Platform Testing", "SRS Analysis"],
      features: [
        "Reviewed SRS documentation to design and execute 500+ manual test cases covering Web, Mobile, and Admin Panel interfaces",
        "Conducted functional and cross-platform testing across three application layers, ensuring consistent behavior and defect-free user flows",
        "Documented and tracked all identified defects through full bug life-cycle management, achieving complete test coverage aligned with business requirements"
      ],
      skills: ["Manual Testing", "Test Case Design", "Jira", "Zephyr Scale", "Cross-Platform Testing", "Bug Life-Cycle Management"],
      featured: true
    },
    {
      title: "Social Entertainment App | Freelance Manual Testing",
      description: "Freelance manual testing engagement for a Social Entertainment App, covering core chat features and entertainment functionalities with structured regression testing and daily bug reporting.",
      period: "Mar 2026",
      technologies: ["Manual Testing", "Excel", "Bug Reporting", "Regression Testing"],
      features: [
        "Designed and executed detailed manual test cases using Excel, covering core chat features and entertainment functionalities across multiple user scenarios",
        "Delivered 50+ daily bug reports across all severity levels, including critical defects, ensuring full client transparency and enabling rapid resolution before release",
        "Contributed to a significant reduction in pre-release defects through systematic test coverage and structured regression checks across all major features"
      ],
      skills: ["Manual Testing", "Bug Reporting", "Regression Testing", "Test Case Design", "Client Communication"],
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my Software Quality Assurance work, demonstrating skills in manual testing, test automation, API testing, and defect management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const d = getDomain(project.title);
            const DomainIcon = d.icon;
            const isApi = d.label === "API Testing";
            return (
              <article
                key={index}
                data-reveal
                style={{ transitionDelay: `${(index % 2) * 90}ms` }}
                className="hover-glow group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                {/* Visual header banner */}
                <div className="relative h-32 overflow-hidden border-b border-border bg-[linear-gradient(135deg,hsl(var(--indigo)/0.35),hsl(var(--primary)/0.15)_55%,hsl(var(--card)))]">
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(hsl(var(--foreground)/0.25)_1px,transparent_1px)] [background-size:16px_16px]" />
                  <DomainIcon className="absolute -right-4 -bottom-6 h-32 w-32 text-foreground/10 transition-transform duration-500 group-hover:scale-110" />
                  <div className="relative flex h-full items-end justify-between p-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                      <DomainIcon className="h-3.5 w-3.5 text-primary" />
                      {d.label}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      {project.featured && <Star className="h-3.5 w-3.5 fill-current text-primary" />}
                      {project.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="rounded-full border border-[hsl(var(--tag-tech)/0.3)] bg-[hsl(var(--tag-tech)/0.12)] px-2.5 py-0.5 text-xs font-medium text-[hsl(var(--tag-tech))]">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills Developed</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.skills.map((skill, i) => (
                        <span key={i} className="rounded-full border border-[hsl(var(--tag-skill)/0.3)] bg-[hsl(var(--tag-skill)/0.12)] px-2.5 py-0.5 text-xs font-medium text-[hsl(var(--tag-skill))]">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <div className="mt-auto pt-2">
                      <Button asChild className="w-full hover-pop">
                        <a href={project.github} target="_top" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                          {isApi ? <Send className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                          {isApi ? "View Test Suite" : "View Code"}
                          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
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