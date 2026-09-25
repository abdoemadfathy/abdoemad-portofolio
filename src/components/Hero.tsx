import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown, Linkedin, Github, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const socials = [
  { href: "https://github.com/abdoemadfathy", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/abdulrahmanemadfathy", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:abdulrahmanemadfathy@gmail.com", label: "Email", icon: Mail },
];

const stack = ["Java", "Selenium", "TestNG", "Cucumber", "Postman", "SQL", "Jira"];

const Hero = () => {
  const toProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-20">
      <div className="aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="grid-texture" aria-hidden="true" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div className="animate-page-in text-center lg:text-left">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Computer Science &amp; AI Student
            </span>

            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Abdulrahman Emad — Software QA Engineer
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Building Reliable Software Through{" "}
              <span className="text-gradient">Quality Engineering.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              I test web and mobile products end to end — manual testing, API testing, database validation and Java/Selenium test automation — so teams can ship with confidence.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button onClick={toProjects} size="lg" className="hover-pop group h-12 rounded-xl px-6">
                View Projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-pop glass h-12 rounded-xl px-6 hover:bg-secondary">
                <a href="/CV_Abdulrahman_Emad.pdf" download="Abdulrahman_Emad_CV.pdf">
                  <FileDown className="mr-1 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
              <div className="flex gap-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_top"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
              <div className="hidden h-6 w-px bg-border sm:block" />
              <ul className="flex flex-wrap justify-center gap-1.5" aria-label="Core technologies">
                {stack.map((s) => (
                  <li key={s} className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-page-in relative mx-auto w-full max-w-sm [animation-delay:150ms]">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.35),transparent_60%),radial-gradient(circle_at_80%_90%,hsl(var(--cyan)/0.2),transparent_60%)] blur-2xl" aria-hidden="true" />
            <div className="surface relative overflow-hidden p-2 shadow-[var(--shadow-soft)]">
              <img
                src={profileImage}
                alt="Portrait of Abdulrahman Emad"
                className="aspect-[4/5] w-full rounded-[1rem] object-cover object-top"
              />
              <div className="glass absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">Abdulrahman Emad</p>
                  <p className="text-xs text-muted-foreground">QA Engineer · Egypt</p>
                </div>
                <span className="rounded-md bg-accent/15 px-2 py-1 font-mono text-[11px] text-accent">open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
