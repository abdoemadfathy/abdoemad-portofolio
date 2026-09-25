import { Bug, Database, Bot, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Testing",
    icon: Bug,
    note: "Core QA practice",
    skills: ["Manual Testing", "Functional Testing", "Regression Testing", "E2E Testing", "Cross-Browser Testing", "Test Case Design", "Bug Reporting"],
  },
  {
    title: "API & Database",
    icon: Database,
    note: "Backend validation",
    skills: ["Postman", "REST API Testing", "SQL", "Database Validation"],
  },
  {
    title: "Automation",
    icon: Bot,
    note: "Java test automation",
    skills: ["Java", "Selenium WebDriver", "TestNG", "Cucumber", "BDD", "Page Object Model", "Maven", "ExtentReports"],
  },
  {
    title: "Tools",
    icon: Wrench,
    note: "Workflow & tracking",
    skills: ["Jira", "Zephyr Scale", "Git", "GitHub"],
  },
];

const Skills = () => (
  <section id="skills" className="relative py-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A practical QA toolkit."
          description="From exploratory manual testing to maintainable Java automation — the tools and methods I use on real projects."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(({ title, icon: Icon, note, skills }, i) => (
            <div key={title} data-reveal style={{ transitionDelay: `${(i % 2) * 90}ms` }} className="surface hover-glow p-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/25">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
                <span className="ml-auto font-mono text-xs text-muted-foreground">{String(skills.length).padStart(2, "0")}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
