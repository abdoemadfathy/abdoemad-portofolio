import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_xsanrpb',
        'template_fh6t509',
        {
          from_phone: formData.phone,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Abdulrahman Emad'
        },
        'E7VOxgVprPSrPOGgt'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        phone: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Card>
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
                  <a href="mailto:abdoemadfathy1@gmail.com" target="_top" className="flex items-center group">
                    <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center mr-3 hover-glow-soft">
                      <Mail className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">abdoemadfathy1@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Send me an email anytime</p>
                    </div>
                  </a>

                  <a href="https://wa.me/201126998251" target="_top" rel="noopener noreferrer" className="flex items-center group">
                    <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center mr-3 hover-glow-soft">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">+20 112 699 8251</p>
                      <p className="text-sm text-muted-foreground">Chat with me on WhatsApp</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center">
                    <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium">Cairo, Egypt</p>
                      <p className="text-sm text-muted-foreground">Open to Remote &amp; On-site Opportunities</p>
                    </div>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <Input 
                    name="email"
                    placeholder="Email Address" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <Textarea 
                  name="message"
                  placeholder="Message" 
                  rows={6} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;