import { usePortfolio } from "@/i18n/LanguageProvider";

const Footer = () => {
  const { t } = usePortfolio();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer.rights(new Date().getFullYear())}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="self-start transition-colors hover:text-foreground"
        >
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
