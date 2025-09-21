import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python"]
    },
    {
      title: "Testing & QA",
      skills: ["Manual Testing", "Automated Testing", "Test Case Design"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Selenium", "Postman", "Git"]
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