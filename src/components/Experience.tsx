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
                  <h3 className="text-2xl font-bold mb-2">Software Quality Assurance Tester (Internship)</h3>
                  <p className="text-xl text-primary font-semibold">Digital Egypt Pioneers Initiative (DEPI)</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Jun 2025 – Nov 2025 (6 Months)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>El Faiyum, Egypt – Hybrid</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4">Responsibilities & Achievements:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Joined the DEPI training program as a Software Quality Assurance trainee and built a strong foundation in software testing principles and best practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Studied and applied Java programming in various testing scenarios during the early phase of the program
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Gained structured knowledge of software testing fundamentals based on ISTQB concepts and methodologies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <span>Acquired hands-on experience in multiple testing areas:</span>
                    <ul className="mt-2 ml-4 space-y-1">
                      <li>• <strong>Manual Testing:</strong> Designing and executing test cases and reporting defects</li>
                      <li>• <strong>Database Testing:</strong> Writing SQL queries, verifying data integrity, and validating backend processes</li>
                      <li>• <strong>API Testing:</strong> Testing endpoints, validating responses, and ensuring proper service integration</li>
                      <li>• <strong>Automation Testing:</strong> Learning the fundamentals of test automation scripts and frameworks</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Applied these skills in real-world, hands-on projects, including a final QA graduation project that covered end-to-end testing scenarios
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Gained exposure to real software testing workflows and challenges through practical assignments and team collaboration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Completed freelance-like practical tasks during the program, earning income in USD and gaining real industry-oriented experience
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;