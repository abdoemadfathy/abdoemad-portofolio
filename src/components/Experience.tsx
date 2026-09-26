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
                  <h3 className="text-2xl font-bold mb-2">Software Quality Assurance Engineer (Internship)</h3>
                  <p className="text-xl text-primary font-semibold">Digital Egypt Pioneers Initiative (DEPI)</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Jun 2025 – Nov 2025 (6 Months)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Cairo, Egypt – Hybrid</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4">Responsibilities & Achievements:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Designed, reviewed, and executed end-to-end Test Cases and Test Suites based on ISTQB standards and SDLC/STLC best practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Developed functional test scripts using Java, Selenium WebDriver, and TestNG for automated web testing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Performed comprehensive API Testing using Postman (validating HTTP status codes, JSON response payloads, and environment variables)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Executed Database Testing by writing SQL queries to verify backend data integrity and transaction logs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Reported and tracked software defects in Jira & Zephyr Scale with clear reproduction steps, severity levels, and execution logs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Participated in cross-functional team projects to deliver fully tested, production-ready QA graduation deliverables
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