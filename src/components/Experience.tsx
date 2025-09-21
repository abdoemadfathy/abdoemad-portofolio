import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Software Tester Intern</h3>
                  <p className="text-xl text-primary font-semibold">Digital Egypt Pioneers Initiative (DEPI)</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Jun 2025 – Present</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>El Faiyum, Egypt (Hybrid)</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4">Key Achievements & Responsibilities:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Hands-on experience in software testing principles and practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Applied Java in testing scenarios and automation frameworks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Enhanced teamwork and communication skills through collaborative projects
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Participated in quality assurance processes and bug tracking systems
                </li>
              </ul>
              
              <p className="text-primary font-medium mt-6">
                Currently gaining hands-on experience in software testing
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;