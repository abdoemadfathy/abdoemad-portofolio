import { MapPin, Calendar } from "lucide-react";
import Section from "@/components/common/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { experience } from "@/data/portfolioData";

const Experience = () => (
  <Section id="experience" title="Experience">
    {experience.map((job) => (
      <div key={job.company}>
        <Reveal>
          <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{job.role}</h3>
          <p className="mt-2 text-lg font-medium text-primary">{job.company}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {job.period}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
          </div>
        </Reveal>

        <Stagger as="ul" className="mt-10 space-y-5 border-l border-border pl-6">
          {job.points.map((p) => (
            <StaggerItem as="li" key={p} className="relative leading-relaxed text-muted-foreground">
              <span className="absolute -left-[29px] top-2.5 h-1.5 w-1.5 rounded-full bg-primary" />
              {p}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    ))}
  </Section>
);

export default Experience;
