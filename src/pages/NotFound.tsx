import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LanguageProvider, usePortfolio, LANG_PATHS } from "@/i18n/LanguageProvider";
import { SITE_URL } from "@/data/portfolioData";
import type { Lang } from "@/types/portfolio";

const Body = () => {
  const { t, lang } = usePortfolio();
  const { pathname } = useLocation();
  const n = t.notFound;
  const url = `${SITE_URL}${pathname}`;

  return (
    <main id="main" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <Helmet htmlAttributes={{ lang: t.htmlLang, dir: t.dir }}>
        <title>{n.seoTitle}</title>
        <meta name="description" content={n.seoDescription} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={n.seoTitle} />
        <meta property="og:description" content={n.seoDescription} />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={n.seoTitle} />
        <meta name="twitter:description" content={n.seoDescription} />
      </Helmet>
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative max-w-md text-center">
        <p dir="ltr" className="font-mono text-sm text-destructive">
          FAILED · 404 Not Found
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{n.title}</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">{n.text}</p>
        <Link
          to={LANG_PATHS[lang]}
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          {n.cta}
        </Link>
      </div>
    </main>
  );
};

const NotFound = () => {
  const { pathname } = useLocation();
  const lang: Lang = pathname.startsWith("/ar") ? "ar" : "en";
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);
  return (
    <LanguageProvider lang={lang}>
      <Body />
    </LanguageProvider>
  );
};

export default NotFound;
