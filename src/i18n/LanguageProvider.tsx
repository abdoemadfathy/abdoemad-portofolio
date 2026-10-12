import { createContext, useContext, useMemo, type ReactNode } from "react";
import { ar } from "@/data/locales/ar";
import { en } from "@/data/locales/en";
import { certificate, contact, projectsMeta, testRun, tools } from "@/data/portfolioData";
import type { Content, Lang, MediaFile, ProjectCategory, ProjectMeta, ResultGroup } from "@/types/portfolio";

const LOCALES: Record<Lang, Content> = { en, ar };

/** Public path of each language version. */
export const LANG_PATHS: Record<Lang, string> = { en: "/", ar: "/ar" };

export interface ResolvedMedia extends MediaFile {
  alt: string;
  caption: string;
}

export interface ResolvedProject {
  id: string;
  category: ProjectCategory;
  period?: string;
  technologies: string[];
  skills: string[];
  repoUrl?: string;
  featured: boolean;
  title: string;
  description: string;
  features: string[];
  media: ResolvedMedia[];
  results?: ResultGroup[];
}

export interface Portfolio {
  lang: Lang;
  t: Content;
  contact: typeof contact;
  tools: string[];
  testRun: typeof testRun;
  projects: ResolvedProject[];
  certificate: ResolvedMedia;
}

const resolveMedia = (file: MediaFile, caption: string): ResolvedMedia => ({ ...file, alt: caption, caption });

const build = (lang: Lang): Portfolio => {
  const t = LOCALES[lang];
  const projects = projectsMeta.map((meta: ProjectMeta): ResolvedProject => {
    const text = t.projects.items[meta.id];
    return {
      id: meta.id,
      category: meta.category,
      period: meta.period,
      technologies: meta.technologies,
      skills: meta.skills,
      repoUrl: meta.repoUrl,
      featured: meta.featured,
      results: meta.results,
      title: text.title,
      description: text.description,
      features: text.features,
      media: meta.media.map((m) => resolveMedia(m, text.captions?.[m.id] ?? text.title)),
    };
  });
  return {
    lang,
    t,
    contact,
    tools,
    testRun,
    projects,
    certificate: resolveMedia(certificate, t.experience.certificateCaption),
  };
};

const PortfolioContext = createContext<Portfolio | null>(null);

export const LanguageProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => {
  const value = useMemo(() => build(lang), [lang]);
  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};

/** Everything the UI needs for the current language. */
export const usePortfolio = (): Portfolio => {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside <LanguageProvider>");
  return ctx;
};
