import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, GraduationCap, Briefcase, Search } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and software testing. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for a dedicated software tester, want to discuss AI and technology, 
                  or have an exciting project in mind, I'd love to hear from you. I'm currently seeking 
                  internship and entry-level opportunities in software testing and quality assurance.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">abdelrahman.emad@example.com</p>
                      <p className="text-sm text-muted-foreground">Send me an email anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">El Faiyum, Egypt</p>
                      <p className="text-sm text-muted-foreground">Available for hybrid work</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-primary mr-3" />
                    <span>Computer Science Student (AI Specialization)</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-primary mr-3" />
                    <span>Software Tester Intern at DEPI</span>
                  </div>
                  <div className="flex items-center">
                    <Search className="w-5 h-5 text-primary mr-3" />
                    <span>Open to new opportunities in QA and Testing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Email Address" type="email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Message" rows={6} />
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;