import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { LANG_PATHS, usePortfolio } from "@/i18n/LanguageProvider";
import { EASE_OUT, SPRING_SOFT } from "@/lib/motion";

const IDS = ["about", "experience", "skills", "projects", "process", "contact"] as const;

const Header = () => {
  const { t, lang, contact } = usePortfolio();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const otherLang = lang === "en" ? "ar" : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const scroll = () => target.scrollIntoView({ behavior: "smooth" });
    if (open) {
      // On phones the menu closing in the same frame cancels a smooth scroll that has just started,
      // so wait for its exit animation (0.25 s) to finish first.
      setOpen(false);
      window.setTimeout(scroll, 300);
    } else {
      scroll();
    }
  };

  const langLink = (
    <Link
      to={LANG_PATHS[otherLang]}
      hrefLang={otherLang}
      lang={otherLang}
      aria-label={t.ui.otherLangAria}
      onClick={() => window.scrollTo({ top: 0 })}
      className="flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
    >
      <Languages className="h-4 w-4" aria-hidden />
      {t.ui.otherLangLabel}
    </Link>
  );

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6" aria-label={t.ui.mainNav}>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <span className="ltr-island flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-sm text-background">
            AE
          </span>
          <span className="hidden lg:inline">{t.profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {IDS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative py-1 text-sm transition-colors ${
                active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.ui.nav[id]}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  transition={SPRING_SOFT}
                  className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          {langLink}
          <ThemeToggle />
          <a
            href={contact.cv.url}
            download={contact.cv.downloadName}
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85 lg:inline-block"
          >
            {t.ui.downloadCv}
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-6 pb-4">
              {IDS.map((id) => (
                <button key={id} onClick={() => go(id)} className="border-t border-border py-3 text-start text-lg font-medium">
                  {t.ui.nav[id]}
                </button>
              ))}
              <a
                href={contact.cv.url}
                download={contact.cv.downloadName}
                className="border-t border-border py-3 text-start text-lg font-medium text-primary"
              >
                {t.ui.downloadCv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-primary rtl:origin-right" />
    </motion.header>
  );
};

export default Header;
