import { Reveal } from "@/components/common/Reveal";
import { tools } from "@/data/portfolioData";

const Tools = () => (
  <section aria-label="Tools I work with" className="border-t border-border">
    <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:gap-10">
      <p className="shrink-0 text-sm text-muted-foreground">Tools I work with</p>
      <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-lg font-medium text-foreground/80">
        {tools.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default Tools;
