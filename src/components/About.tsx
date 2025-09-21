import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, TestTube, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm a Computer Science student specializing in Artificial Intelligence, passionate about Software Testing and Quality Assurance. Currently building skills in manual and automated testing with tools like Selenium and Postman, and eager to gain practical experience.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            My journey combines the analytical thinking required for AI development with the meticulous attention to detail essential for quality assurance. I believe that robust testing practices are fundamental to building reliable and intelligent systems.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground mb-2">Bachelor's degree in Artificial Intelligence</p>
                <p className="text-sm text-muted-foreground mb-2">Faculty of Computers and Information</p>
                <p className="text-sm text-muted-foreground mb-2">Beni-Suef University</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2028</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">AI Specialization</h3>
                <p className="text-sm text-muted-foreground">
                  Pursuing Bachelor's in Artificial Intelligence with focus on machine learning and intelligent systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TestTube className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Passionate about software testing with hands-on experience in manual and automated testing practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Actively developing skills in C++, Java, Python, and modern testing frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;