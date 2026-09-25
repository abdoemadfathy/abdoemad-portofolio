import { GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    icon: GraduationCap,
    label: "Education",
    title: "B.Sc. in Artificial Intelligence",
    meta: "Faculty of Computers & Information, Beni-Suef University · Expected 2028",
  },
  {
    icon: Briefcase,
    label: "Experience / Training",
    title: "Software QA Engineer Intern — DEPI",
    meta: "Digital Egypt Pioneers Initiative · Jun 2025 – Nov 2025",
  },
  {
    icon: Award,
    label: "Certifications",
    title: "DEPI Software Testing Track",
    meta: "Completed training program covering manual, API and automation testing",
  },
];

const values = [
  "End-to-end test case design & execution across SDLC / STLC",
  "Detailed bug reports with reproduction steps, severity and evidence",
  "Cross-browser & multi-device testing (Chrome, Firefox, Safari, Android, iOS)",
  "API & automated testing with Postman, Selenium WebDriver, TestNG and Cucumber",
];

const About = () => (
  <section id="about" className="relative py-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading eyebrow="About" title="Detail-oriented QA engineer with an AI background." />
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a QA Engineer and Artificial Intelligence student with practical experience in{" "}
            <span className="text-foreground">Manual Testing</span>, <span className="text-foreground">API Testing</span>,{" "}
            <span className="text-foreground">SQL / database validation</span> and{" "}
            <span className="text-foreground">Java-based test automation</span>. I bridge business requirements and
            technical execution so every release is functional, user-friendly and secure before production.
          </p>
          <ul className="mt-8 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <ol className="relative space-y-4 lg:pt-24">
          <span className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/60 via-border to-transparent lg:top-30" aria-hidden="true" />
          {timeline.map(({ icon: Icon, label, title, meta }, i) => (
            <li key={label} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="relative flex gap-5">
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-card text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div className="surface hover-glow flex-1 p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
                <h3 className="mt-1.5 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default About;
