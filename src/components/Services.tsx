import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Monitor, Bug, RotateCcw, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Functional Testing",
      description: "Verify that all features work as expected without issues."
    },
    {
      icon: Users,
      title: "UI/UX Testing",
      description: "Ensure the design is user-friendly, intuitive, and consistent."
    },
    {
      icon: Monitor,
      title: "Cross-Browser & Cross-Device Testing",
      description: "Check performance across different browsers and devices."
    },
    {
      icon: Bug,
      title: "Bug Reporting",
      description: "Provide detailed, reproducible bug reports with severity levels."
    },
    {
      icon: RotateCcw,
      title: "Regression Testing",
      description: "Confirm that new updates don't break existing features."
    },
    {
      icon: FileText,
      title: "Test Case Design & Execution",
      description: "Create and execute structured test cases covering core and edge scenarios."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🛠 Services I Offer</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;