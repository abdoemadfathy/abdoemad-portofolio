import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, TestTube, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I am a Detail-Oriented Software Quality Assurance Engineer dedicated to delivering reliable, scalable, and bug-free digital products. My core focus is bridging the gap between business requirements and technical execution by ensuring every application is fully functional, user-friendly, and secure before reaching production.
          </p>
          
          <div className="text-lg text-muted-foreground mb-6 leading-relaxed">
            <p className="mb-4">Core Value I Provide:</p>
            <ul className="space-y-2 ml-6">
              <li>• <strong>End-to-End Test Case Design & Execution:</strong> Comprehensive coverage across all SDLC / STLC phases.</li>
              <li>• <strong>Detailed Bug Reporting:</strong> Clear reproduction steps, severity ranking, logs, and screenshots for swift resolution.</li>
              <li>• <strong>Cross-Browser & Multi-Device Testing:</strong> Flawless behavior on Chrome, Firefox, Safari, Android, and iOS.</li>
              <li>• <strong>API & Automated Testing:</strong> Robust test automation using Selenium WebDriver, Postman, TestNG, and Cucumber BDD.</li>
              <li>• <strong>UI/UX Consistency Reviews:</strong> Elevating overall user experience through functional and non-functional validation.</li>
            </ul>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            My approach is built on precision, automation efficiency, and actionable metrics—helping engineering teams fix critical issues faster and launch stable releases with total confidence.
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
