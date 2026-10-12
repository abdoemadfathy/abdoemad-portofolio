import type { ReactNode } from "react";
import { Reveal } from "@/components/common/Reveal";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  /** Extra content under the title in the sticky side column. */
  aside?: ReactNode;
  children: ReactNode;
}

/**
 * Shared page rhythm: a hairline, a sticky title column at the start edge and the
 * content beside it. Uses logical alignment so it mirrors correctly in RTL.
 */
const Section = ({ id, title, description, aside, children }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:gap-12 md:py-28">
      <div className="min-w-0 md:col-span-4">
        <div className="md:sticky md:top-28">
          <Reveal>
            <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            {description && <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">{description}</p>}
          </Reveal>
          {aside}
        </div>
      </div>
      <div className="min-w-0 md:col-span-8">{children}</div>
    </div>
  </section>
);

export default Section;
