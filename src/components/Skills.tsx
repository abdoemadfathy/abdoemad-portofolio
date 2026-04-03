import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Methodologies",
      skills: ["Manual", "Automation", "API", "Database", "Regression", "E2E", "Smoke & Sanity", "SDLC & STLC", "Bug Life-cycle Management"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Selenium WebDriver", "TestNG", "Cucumber (BDD)", "Postman", "Jira", "Zephyr Scale", "SQL Server", "Maven"]
    },
    {
      title: "Languages & Tech",
      skills: ["Java", "SQL", "C++", "Python", "HTML/CSS"]
    },
    {
      title: "Domains",
      skills: ["E-commerce", "Fitness", "Web & Mobile Apps"]
    },
    {
      title: "Languages",
      skills: ["Arabic (Native)", "English (Professional Working Proficiency)"]
    },
    {
      title: "Soft Skills",
      skills: ["Attention to Detail", "Analytical Thinking", "Client Communication", "Team Collaboration", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <span className="text-sm mr-2">•</span>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;