import { Calendar, GraduationCap, MapPin } from "lucide-react";
import Section from "@/components/common/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import MediaGallery from "@/components/gallery/MediaGallery";
import { usePortfolio } from "@/i18n/LanguageProvider";

const Experience = () => {
  const { t, certificate } = usePortfolio();
  const { experience } = t;
  return (
    <Section id="experience" title={experience.title}>
      {experience.items.map((job) => (
        <div key={job.company}>
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{job.role}</h3>
            <p className="mt-2 text-lg font-medium text-primary">{job.company}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden />
                {job.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                {job.location}
              </span>
            </div>
          </Reveal>

          <Stagger as="ul" className="mt-10 space-y-5 border-s border-border ps-6">
            {job.points.map((p) => (
              <StaggerItem as="li" key={p} className="relative leading-relaxed text-muted-foreground">
                <span className="absolute -start-[29px] top-2.5 h-1.5 w-1.5 rounded-full bg-primary" />
                {p}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ))}

      <Reveal className="mt-14 border-t border-border pt-10">
        <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-semibold">
          <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
          {experience.certificateTitle}
        </h3>
        <p className="mb-5 max-w-xl leading-relaxed text-muted-foreground">{experience.certificateText}</p>
        <MediaGallery items={[certificate]} />
      </Reveal>
    </Section>
  );
};

export default Experience;
