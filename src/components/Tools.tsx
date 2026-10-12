import { Reveal } from "@/components/common/Reveal";
import { usePortfolio } from "@/i18n/LanguageProvider";

const Tools = () => {
  const { tools, t } = usePortfolio();
  return (
  <section aria-label={t.tools.label} className="border-t border-border">
    <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:gap-10">
      <p className="shrink-0 text-sm text-muted-foreground">{t.tools.label}</p>
      <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-lg font-medium text-foreground/80">
        {tools.map((tool) => (
          <li key={tool} className="ltr-island">{tool}</li>
        ))}
      </ul>
    </Reveal>
  </section>
  );
};

export default Tools;
