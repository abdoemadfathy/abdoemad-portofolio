import { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const PortfolioAssistant = lazy(() => import("@/components/PortfolioAssistant"));
import { LANG_PATHS, LanguageProvider, usePortfolio } from "@/i18n/LanguageProvider";
import { SITE_URL } from "@/data/portfolioData";
import { classifyLink, track } from "@/lib/analytics";
import type { Lang } from "@/types/portfolio";

const Page = () => {
  const { t, lang, contact } = usePortfolio();
  const url = `${SITE_URL}${LANG_PATHS[lang]}`;
  const other: Lang = lang === "en" ? "ar" : "en";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.profile.name,
    jobTitle: t.profile.jobTitle,
    email: contact.email,
    telephone: contact.phone,
    url,
    image: `${SITE_URL}/social/abdulrahman-emad.jpg`,
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    sameAs: contact.socials.filter((s) => s.key === "linkedin" || s.key === "github").map((s) => s.href),
    knowsAbout: ["Software testing", "Test automation", "API testing", "SQL", "Selenium", "Java"],
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      const hit = a && classifyLink(a);
      if (hit) track(hit.name, hit.label);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet htmlAttributes={{ lang: t.htmlLang, dir: t.dir }}>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}${LANG_PATHS.en}`} />
        <link rel="alternate" hrefLang="ar" href={`${SITE_URL}${LANG_PATHS.ar}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${LANG_PATHS.en}`} />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={t.ogLocale} />
        <meta property="og:locale:alternate" content={other === "ar" ? "ar_AR" : "en_US"} />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <a href="#main" className="skip-link">
        {t.ui.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Tools />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <PortfolioAssistant />
      </Suspense>
    </div>
  );
};

/**
 * Keyed by language so a switch remounts the page. Scroll-reveal variants are
 * "once" animations: items created after the first reveal would otherwise stay hidden.
 */
const Index = ({ lang = "en" }: { lang?: Lang }) => (
  <LanguageProvider key={lang} lang={lang}>
    <Page />
  </LanguageProvider>
);

export default Index;
