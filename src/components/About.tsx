import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, TestTube, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I am a QA Tester focused on delivering reliable and bug-free digital products.
            My mission is to ensure that websites and applications are functional, user-friendly, and secure before reaching users.
          </p>
          
          <div className="text-lg text-muted-foreground mb-6 leading-relaxed">
            <p className="mb-4">I provide:</p>
            <ul className="space-y-2 ml-6">
              <li>• Comprehensive test case design and execution</li>
              <li>• Detailed bug reports with reproduction steps, severity levels, and screenshots</li>
              <li>• Cross-browser and device testing (Chrome, Firefox, Safari, Android, iOS)</li>
              <li>• UI/UX reviews to uncover inconsistencies and improve user experience</li>
              <li>• Support with basic automation tools (Selenium, Postman, OWASP ZAP)</li>
            </ul>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            My approach is built on precision and actionable results — helping development teams fix issues faster and launch stable products with confidence.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            If you're looking for a QA partner who saves you time, money, and protects your product's reputation, feel free to check my work and connect with me.
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