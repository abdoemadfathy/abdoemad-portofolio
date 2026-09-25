import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Send, Landmark, Smartphone, Leaf, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  domain: string;
  icon: LucideIcon;
  period: string;
  description: string;
  technologies: string[];
  scope: string[];
  github?: string;
  demo?: string;
  suiteLabel?: string;
};

const projects: Project[] = [
  {
    title: "OpenCart QA Graduation Project",
    domain: "E-Commerce QA",
    icon: ShoppingCart,
    period: "2025",
    description: "Full QA lifecycle for the OpenCart e-commerce platform, combining manual, automated, API and database testing.",
    technologies: ["Manual Testing", "Automation Testing", "Selenium", "Cucumber", "Postman", "SQL"],
    scope: [
      "Functional & non-functional manual testing",
      "Automated critical journeys with Selenium + Cucumber (BDD)",
      "API testing in Postman and SQL backend validation",
      "Test documentation and defect tracking in Jira",
    ],
    github: "https://github.com/abdoemadfathy/GraduationProject_DEPI_SoftwareTesting",
  },
  {
    title: "Swag Labs E-Commerce Automation",
    domain: "Web Automation",
    icon: ShoppingCart,
    period: "2025",
    description: "Test suite for the Swag Labs demo store covering login, cart, checkout and sorting flows with structured test cases and bug reports.",
    technologies: ["Java", "Selenium WebDriver", "Maven", "TestNG", "Page Object Model"],
    scope: [
      "Login, Add to Cart, Checkout and Sorting flows",
      "Role-based testing to surface critical defects",
      "Bug reports with severity, priority and repro steps",
    ],
    github: "https://github.com/abdoemadfathy/Manual-Testing-Project---Swag-Labs-Test-Cases-Bug-Reports-",
  },
  {
    title: "RESTful Booker API Testing",
    domain: "API Testing",
    icon: Send,
    period: "2025",
    description: "API test collection for Restful Booker covering authentication, CRUD operations, negative cases and automated runs.",
    technologies: ["Postman", "REST API", "Functional Testing", "API Validation", "Newman"],
    scope: [
      "Auth and full CRUD request coverage",
      "Status code and response payload assertions",
      "Environment variables and pre-request scripts",
      "Collection Runner / Newman automation",
    ],
    github: "https://github.com/abdoemadfathy/API-Testing-Project-using-Postman-Restful-Booker-Automation",
    suiteLabel: "View Test Suite",
  },
  {
    title: "Guru99 Bank Testing Project",
    domain: "Banking QA",
    icon: Landmark,
    period: "Sep 2025",
    description: "End-to-end manual testing for the Guru99 Bank application across its modules and flows.",
    technologies: ["Test Case Design", "Manual Testing", "Bug Reporting", "Regression Testing"],
    scope: ["Test cases for all modules", "End-to-end flow execution", "Detailed bug reports and regression runs"],
    github: "https://github.com/abdoemadfathy/Testing-Portfolio",
  },
  {
    title: "Vegetables E-Commerce Platform",
    domain: "Cross-Platform QA",
    icon: Leaf,
    period: "Mar 2025",
    description: "Independent manual testing across Web, Mobile and Admin Panel with SRS-driven test design and full defect lifecycle.",
    technologies: ["Manual Testing", "Jira", "Zephyr Scale", "SRS Analysis"],
    scope: ["500+ test cases from SRS review", "Functional testing across three app layers", "Full bug life-cycle tracking"],
  },
  {
    title: "Social Entertainment App",
    domain: "Mobile App QA · Freelance",
    icon: Smartphone,
    period: "Mar 2026",
    description: "One-month freelance engagement testing chat and entertainment features with daily reporting and regression checks.",
    technologies: ["Manual Testing", "Excel", "Bug Reporting", "Regression Testing"],
    scope: ["Test cases for core chat features", "50+ daily bug reports across severities", "Structured pre-release regression"],
  },
];

const Projects = () => (
  <section id="projects" className="relative py-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected QA work."
          description="Real testing projects across e-commerce, APIs, banking and mobile — each with scope, tools and source."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                data-reveal
                data-cursor="hover"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
                className="hover-glow group flex flex-col overflow-hidden rounded-[1.25rem] border border-border bg-card"
              >
                <div className="relative h-40 overflow-hidden border-b border-border">
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04] bg-[radial-gradient(circle_at_15%_20%,hsl(var(--primary)/0.4),transparent_55%),radial-gradient(circle_at_85%_80%,hsl(var(--cyan)/0.18),transparent_55%),radial-gradient(circle_at_60%_10%,hsl(var(--purple)/0.15),transparent_50%)]">
                    <div className="grid-texture" />
                    <Icon className="absolute right-6 top-1/2 h-20 w-20 -translate-y-1/2 text-foreground/15" strokeWidth={1.25} />
                  </div>
                  <div className="relative flex h-full items-end justify-between p-5">
                    <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      {p.domain}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{p.period}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Testing scope</h4>
                    <ul className="space-y-1.5">
                      {p.scope.map((s) => (
                        <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Technologies</h4>
                    <ul className="flex flex-wrap gap-1.5">
                      {p.technologies.map((t) => (
                        <li key={t} className="rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 text-xs font-medium text-[hsl(var(--tag-tech))]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(p.github || p.demo) && (
                    <div className="mt-auto flex gap-2 pt-2">
                      {p.github && (
                        <Button asChild className="flex-1 rounded-xl transition-all group-hover:shadow-[0_10px_24px_-12px_hsl(var(--primary)/0.8)]">
                          <a href={p.github} target="_top" rel="noopener noreferrer">
                            {p.suiteLabel ? <Send className="h-4 w-4" /> : <Github className="h-4 w-4" />}
                            {p.suiteLabel ?? "GitHub"}
                          </a>
                        </Button>
                      )}
                      {p.demo && (
                        <Button asChild variant="outline" className="flex-1 rounded-xl">
                          <a href={p.demo} target="_top" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
