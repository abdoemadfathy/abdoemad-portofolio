/* -------------------------------------------------------------------------- */
/*  Language-neutral data (src/data/portfolioData.ts)                         */
/* -------------------------------------------------------------------------- */

export type Lang = "en" | "ar";

export type SocialKey = "linkedin" | "github" | "email" | "whatsapp" | "mostaql";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  /** E.164-style number used for links. */
  phone: string;
  /** Human-readable number used for display. */
  phoneDisplay: string;
  cv: { url: string; downloadName: string };
  socials: SocialLink[];
}

export type ProjectCategory =
  | "ecommerce"
  | "api"
  | "manual"
  | "banking"
  | "mobile"
  | "automation"
  | "database";

export type IconKey =
  | "check"
  | "users"
  | "monitor"
  | "bug"
  | "rotate"
  | "file"
  | "clipboard"
  | "wrench"
  | "code"
  | "team"
  | "graduation"
  | "brain"
  | "test"
  | "book";

/** An optimised screenshot stored in public/media (full size and thumbnail, both webp). */
export interface MediaFile {
  id: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
}

export type ResultKey =
  | "total"
  | "passed"
  | "failed"
  | "skipped"
  | "critical"
  | "high"
  | "medium"
  | "low";

export type ResultKind = "tests" | "automatedRun" | "bugsBySeverity" | "bugsByPriority";

export interface ResultGroup {
  kind: ResultKind;
  items: { key: ResultKey; value: number }[];
}

export interface ProjectMeta {
  id: string;
  category: ProjectCategory;
  period?: string;
  technologies: string[];
  skills: string[];
  repoUrl?: string;
  featured: boolean;
  /** Shows the live CI badge (reads CI_SUMMARY_URL). */
  liveRun?: boolean;
  media: MediaFile[];
  results?: ResultGroup[];
}

/** Test-run lines in the hero panel. Terminal output stays in English in every language. */
export interface TestRunLine {
  label: string;
  ms: number;
}

/* -------------------------------------------------------------------------- */
/*  Translatable content (src/data/locales/*.ts)                              */
/* -------------------------------------------------------------------------- */

export interface ProjectText {
  title: string;
  description: string;
  features: string[];
  /** Keyed by MediaFile.id. */
  captions?: Record<string, string>;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ValuePoint {
  title: string;
  text: string;
}

export interface Highlight {
  icon: IconKey;
  title: string;
  text: string;
}

export interface Service {
  icon: IconKey;
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  /** Short engagement label shown as a pill, e.g. "Freelance, remote". */
  type: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  icon: IconKey;
  skills: string[];
}

export interface Content {
  lang: Lang;
  htmlLang: string;
  dir: "ltr" | "rtl";
  ogLocale: string;

  seo: { title: string; description: string };

  profile: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    stack: string[];
    bio: string;
    location: string;
    avatarAlt: string;
    jobTitle: string;
  };

  ui: {
    skipToContent: string;
    mainNav: string;
    nav: { about: string; experience: string; skills: string; projects: string; process: string; contact: string };
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
    toLight: string;
    toDark: string;
    /** Label of the link that switches to the other language. */
    otherLangLabel: string;
    otherLangAria: string;
  };

  hero: {
    availability: string;
    headline: string;
    tagline: string;
    stackLine: string;
    seeProjects: string;
    illustrationNote: string;
    scrollAria: string;
    runSummary: (total: number, seconds: string) => string;
    runProgress: (done: number, total: number) => string;
  };

  tools: { label: string };

  about: {
    title: string;
    intro: string;
    stats: Stat[];
    valuesTitle: string;
    values: ValuePoint[];
    outro: string;
    highlights: Highlight[];
  };

  services: { title: string; description: string; items: Service[] };

  experience: {
    title: string;
    description: string;
    items: ExperienceItem[];
    certificateTitle: string;
    certificateText: string;
    certificateCaption: string;
  };

  skills: { title: string; description: string; groups: SkillGroup[] };

  projects: {
    title: string;
    description: string;
    note: string;
    categories: Record<ProjectCategory, string>;
    viewCode: string;
    viewSuite: string;
    technologies: string;
    skillsDeveloped: string;
    screenshots: string;
    results: string;
    resultTitles: Record<ResultKind, string>;
    resultLabels: Record<ResultKey, string>;
    expand: string;
    collapse: string;
    showMore: (count: number) => string;
    showLess: string;
    items: Record<string, ProjectText>;
  };

  ci: {
    label: string;
    passed: (n: number, total: number) => string;
    failed: (n: number, total: number) => string;
    loading: string;
    unavailable: string;
    ranAt: (date: string) => string;
    viewRuns: string;
    note: string;
  };

  process: {
    title: string;
    description: string;
    steps: { title: string; text: string }[];
    reportTitle: string;
    reportIntro: string;
    sampleNote: string;
    weakLabel: string;
    strongLabel: string;
    fields: {
      title: string; environment: string; severity: string; priority: string;
      steps: string; expected: string; actual: string; evidence: string; impact: string;
    };
    game: {
      title: string; intro: string; nameLabel: string; phoneLabel: string; emailLabel: string;
      submit: string; reset: string; privacy: string; idleHint: string; errorHint: string;
      success: string; okHint: string; report: string; found: string; showMe: string;
      nameError: string; phoneError: string; demoName: string;
    };
    weak: { title: string; body: string; missing: string };
    strong: {
      title: string; environment: string; severity: string; priority: string;
      steps: string[]; expected: string; actual: string; evidence: string; impact: string;
    };
  };

  contact: {
    title: string;
    description: string;
    copy: string;
    copied: string;
    whatsapp: string;
    sendTitle: string;
    placeholders: { phone: string; email: string; subject: string; message: string };
    send: string;
    sending: string;
    sentTitle: string;
    sentText: string;
    failTitle: string;
    failText: (email: string) => string;
    copyFailTitle: string;
    copyFailText: (email: string) => string;
  };

  footer: { rights: (year: number) => string; backToTop: string };

  lightbox: {
    close: string;
    previous: string;
    next: string;
    counter: (n: number, total: number) => string;
    zoomIn: string;
  };

  assistant: {
    title: string;
    open: string;
    close: string;
    welcome: string;
    placeholder: string;
    send: string;
    typing: string;
    fallback: string;
    suggestions: string[];
    email: string;
    whatsapp: string;
    contactForm: string;
    subtitle: string;
    clear: string;
  };

  notFound: { seoTitle: string; seoDescription: string; title: string; text: string; cta: string };
}
