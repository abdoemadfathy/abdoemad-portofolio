export type SocialKey = "linkedin" | "github" | "email" | "whatsapp";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  /** Job title shown in the hero. */
  role: string;
  /** Core competencies, rendered next to the role. */
  stack: string[];
  /** One-paragraph hero bio. */
  bio: string;
  location: string;
  email: string;
  /** E.164-style number used for links. */
  phone: string;
  /** Human-readable number used for display. */
  phoneDisplay: string;
  cv: {
    url: string;
    downloadName: string;
  };
  avatarAlt: string;
  socials: SocialLink[];
}

export type ProjectCategory = "ecommerce" | "api" | "manual" | "banking" | "mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  skills: string[];
  /** Public repository, when one exists. */
  repoUrl?: string;
  featured: boolean;
}

/* -------------------------------------------------------------------------- */
/*  Portfolio sections                                                        */
/* -------------------------------------------------------------------------- */

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

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  icon: IconKey;
  skills: string[];
}

export interface TestRunLine {
  label: string;
  ms: number;
}
