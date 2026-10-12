import Section from "@/components/common/Section";
import { Stagger, StaggerItem } from "@/components/common/Reveal";
import { ICONS } from "@/components/common/icons";
import { usePortfolio } from "@/i18n/LanguageProvider";

const Services = () => {
  const { t } = usePortfolio();
  return (
  <Section id="services" title={t.services.title} description={t.services.description}>
    <Stagger className="grid border-t border-border sm:grid-cols-2">
      {t.services.items.map(({ icon, title, description }, i) => {
        const Icon = ICONS[icon];
        return (
          <StaggerItem
            key={title}
            className={`group border-b border-border py-7 ${i % 2 === 0 ? "sm:border-e sm:pe-8" : "sm:ps-8"}`}
          >
            <Icon className="mb-4 h-6 w-6 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
            <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
            <p className="leading-relaxed text-muted-foreground">{description}</p>
          </StaggerItem>
        );
      })}
    </Stagger>
  </Section>
  );
};

export default Services;
