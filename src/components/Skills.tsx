import { ClipboardCheck, Wrench, Code2, Users } from "lucide-react";

const skillGroups = [
  {
    title: "Testing & Methodologies",
    icon: ClipboardCheck,
    skills: [
      "Manual Testing",
      "Automation Testing",
      "API Testing",
      "Database Testing",
      "Regression",
      "E2E Testing",
      "Smoke & Sanity",
      "SDLC & STLC",
      "Bug Lifecycle Management"
    ]
  },
  {
    title: "Tools & Automation",
    icon: Wrench,
    skills: [
      "Selenium WebDriver",
      "Postman",
      "TestNG",
      "Cucumber (BDD)",
      "Jira",
      "Zephyr Scale",
      "SQL Server",
      "Maven",
      "Git & GitHub"
    ]
  },
  {
    title: "Languages & Tech",
    icon: Code2,
    skills: ["Java", "SQL", "Python", "C++", "HTML/CSS"]
  },
  {
    title: "Domains & Soft Skills",
    icon: Users,
    skills: [
      "E-commerce",
      "Fitness",
      "Web & Mobile Apps",
      "Attention to Detail",
      "Analytical Thinking",
      "Team Collaboration"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        <div className="max-w-5xl mx-auto space-y-10">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div key={title}>
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
