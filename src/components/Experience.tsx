import { MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const bullets = [
  "Designed, reviewed, and executed end-to-end Test Cases and Test Suites based on ISTQB standards and SDLC/STLC best practices",
  "Developed functional test scripts using Java, Selenium WebDriver, and TestNG for automated web testing",
  "Performed comprehensive API Testing using Postman (validating HTTP status codes, JSON response payloads, and environment variables)",
  "Executed Database Testing by writing SQL queries to verify backend data integrity and transaction logs",
  "Reported and tracked software defects in Jira & Zephyr Scale with clear reproduction steps, severity levels, and execution logs",
  "Participated in cross-functional team projects to deliver fully tested, production-ready QA graduation deliverables",
];

const Experience = () => (
  <section id="experience" className="relative py-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Hands-on QA experience." />
        <article data-reveal className="surface hover-glow grid gap-8 p-8 md:grid-cols-[260px_1fr] md:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Internship · Completed</p>
            <h3 className="mt-3 text-xl font-semibold">Software Quality Assurance Engineer</h3>
            <p className="mt-1 text-muted-foreground">Digital Egypt Pioneers Initiative (DEPI)</p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Jun 2025 – Nov 2025 (6 Months)</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> El Faiyum, Egypt – Hybrid</p>
            </div>
          </div>
          <ul className="space-y-4 border-border md:border-l md:pl-8">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default Experience;
