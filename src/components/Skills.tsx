import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 70, status: "Intermediate" },
        { name: "Java", level: 70, status: "Intermediate" },
        { name: "Python", level: 40, status: "Learning" }
      ]
    },
    {
      title: "Testing & QA",
      skills: [
        { name: "Manual Testing", level: 70, status: "Intermediate" },
        { name: "Automated Testing", level: 40, status: "Learning" },
        { name: "Test Case Design", level: 70, status: "Intermediate" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Selenium", level: 40, status: "Learning" },
        { name: "Postman", level: 40, status: "Learning" },
        { name: "Git", level: 70, status: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Continuously expanding my expertise in programming, testing methodologies, and modern development tools.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.status}</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl">Continuous Learning Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              As a student passionate about both AI and software testing, I'm constantly expanding my skill set. 
              Currently focusing on automated testing frameworks and deepening my understanding of quality assurance 
              practices while building a strong foundation in programming languages essential for both domains.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;