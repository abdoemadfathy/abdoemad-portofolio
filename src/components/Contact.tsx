import { useState } from "react";
import { Check, Copy, Mail, MapPin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Section from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { profile } from "@/data/portfolioData";

const initialForm = { phone: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast({ title: "Couldn't copy the email", description: `Please copy it manually: ${profile.email}` });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_xsanrpb",
        "template_fh6t509",
        {
          from_phone: formData.phone,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: profile.name,
        },
        "E7VOxgVprPSrPOGgt",
      );
      toast({
        title: "Message sent",
        description: "Thank you. I'll get back to you soon.",
      });
      setFormData(initialForm);
    } catch {
      toast({
        title: "Message not sent",
        description: `Please try again, or email me directly at ${profile.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      description="Hiring for QA, or have a release that needs a second pair of eyes? I'm open to internship and entry-level roles, remote or on-site."
    >
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          target="_top"
          className="inline-block break-all font-display text-3xl font-semibold tracking-tight underline decoration-border decoration-2 underline-offset-8 transition-colors hover:decoration-primary sm:text-4xl md:text-5xl"
        >
          {profile.email}
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50"
          >
            {copied ? <Check className="h-4 w-4 text-pass" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy email"}
          </button>
          <a
            href={`https://wa.me/${profile.phone.replace("+", "")}`}
            target="_top"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp {profile.phoneDisplay}
          </a>
          <span className="inline-flex items-center gap-2 px-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-16">
        <form onSubmit={handleSubmit} className="space-y-4 border-t border-border pt-10">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Mail className="h-5 w-5 text-primary" />
            Send a message
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} />
            <Input
              name="email"
              placeholder="Email address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
          <Textarea
            name="message"
            placeholder="How can I help?"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" size="lg" className="rounded-full px-8" disabled={isSubmitting}>
            {isSubmitting ? "Sending" : "Send message"}
          </Button>
        </form>
      </Reveal>
    </Section>
  );
};

export default Contact;
