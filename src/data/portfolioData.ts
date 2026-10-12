import type { ContactInfo, ProjectMeta, TestRunLine } from "@/types/portfolio";

/**
 * Language-neutral data: links, ids, numbers, tool names, and screenshot files.
 * All readable text lives in src/data/locales/{en,ar}.ts.
 */

export const SITE_URL = "https://abdoemad-portofolio.lovable.app";

export const contact: ContactInfo = {
  email: "abdoemadfathy1@gmail.com",
  phone: "+201126998251",
  phoneDisplay: "+20 112 699 8251",
  cv: { url: "/CV_Abdulrahman_Emad.pdf", downloadName: "Abdulrahman_Emad_CV.pdf" },
  socials: [
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/abdulrahmanemadfathy" },
    { key: "github", label: "GitHub", href: "https://github.com/abdoemadfathy" },
    { key: "email", label: "Email", href: "mailto:abdoemadfathy1@gmail.com" },
    { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/201126998251" },
  ],
};

const media = (id: string, width: number, height: number) => ({
  id,
  src: `/media/${id}.webp`,
  thumb: `/media/${id}-thumb.webp`,
  width,
  height,
});

/** The DEPI certificate shown in the Experience section. */
export const certificate = media("depi-certificate", 1193, 652);

/** Projects in display order. The first one opens by default. */
export const projectsMeta: ProjectMeta[] = [
  {
    id: "opencart-graduation",
    category: "ecommerce",
    period: "2025",
    technologies: ["Manual Testing", "Selenium WebDriver", "Cucumber (BDD)", "Postman", "SQL", "JIRA"],
    skills: ["Full QA Lifecycle", "Test Automation", "API Testing", "Defect Management", "Test Documentation"],
    repoUrl: "https://github.com/abdoemadfathy/GraduationProject_DEPI_SoftwareTesting",
    featured: true,
    media: [
      media("opencart-tc-register", 1600, 638),
      media("opencart-tc-search", 1600, 643),
      media("opencart-bug-report", 1545, 760),
      media("opencart-testng-suite", 1600, 830),
    ],
  },
  {
    id: "swag-automation",
    category: "automation",
    period: "Jul 2026",
    technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven", "ExtentReports"],
    skills: ["Test Automation", "Framework Design", "Test Reporting", "Regression Testing"],
    featured: true,
    media: [media("swag-extent-report", 1600, 763), media("swag-listener", 1600, 839)],
    results: [
      {
        kind: "automatedRun",
        items: [
          { key: "passed", value: 27 },
          { key: "failed", value: 0 },
          { key: "skipped", value: 5 },
        ],
      },
    ],
  },
  {
    id: "restful-booker-api",
    category: "api",
    period: "2025",
    technologies: ["Postman", "API Testing", "Manual Testing", "Java", "Newman"],
    skills: ["API Testing", "Test Automation", "Postman Scripting", "Newman", "Test Reporting"],
    repoUrl: "https://github.com/abdoemadfathy/API-Testing-Project-using-Postman-Restful-Booker-Automation",
    featured: true,
    media: [],
  },
  {
    id: "api-regression-suite",
    category: "api",
    technologies: ["Postman", "JavaScript", "REST APIs", "Environments"],
    skills: ["API Testing", "Postman Scripting", "Regression Testing", "Environment Management"],
    featured: false,
    media: [media("reqres-postman", 1572, 831)],
  },
  {
    id: "social-entertainment-app",
    category: "mobile",
    period: "Mar 2026",
    technologies: ["Manual Testing", "Excel", "Bug Reporting", "Regression Testing"],
    skills: ["Manual Testing", "Bug Reporting", "Regression Testing", "Test Case Design", "Client Communication"],
    featured: true,
    media: [],
    results: [
      {
        kind: "tests",
        items: [
          { key: "passed", value: 74 },
          { key: "failed", value: 29 },
        ],
      },
      {
        kind: "bugsBySeverity",
        items: [
          { key: "critical", value: 4 },
          { key: "high", value: 13 },
          { key: "medium", value: 9 },
          { key: "low", value: 4 },
        ],
      },
    ],
  },
  {
    id: "vegetables-ecommerce",
    category: "ecommerce",
    period: "Mar 2025",
    technologies: ["Manual Testing", "Jira", "Zephyr Scale", "Cross-Platform Testing", "SRS Analysis"],
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Jira",
      "Zephyr Scale",
      "Cross-Platform Testing",
      "Bug Life-Cycle Management",
    ],
    featured: true,
    media: [],
  },
  {
    id: "swag-labs-manual",
    category: "ecommerce",
    period: "2025",
    technologies: ["Manual Testing", "Test Cases", "Bug Reporting", "Test Planning", "UAT"],
    skills: ["Manual Testing", "Test Case Design", "Bug Reporting", "UAT", "Defect Documentation"],
    repoUrl: "https://github.com/abdoemadfathy/Manual-Testing-Project---Swag-Labs-Test-Cases-Bug-Reports-",
    featured: true,
    media: [],
  },
  {
    id: "gazara-mobile",
    category: "mobile",
    technologies: ["Manual Testing", "Excel", "Jira", "Scrum"],
    skills: ["Test Case Design", "Mobile Testing", "User Story Analysis", "Test Prioritization"],
    featured: false,
    media: [media("gazara-test-cases", 1600, 638), media("gazara-jira-backlog", 1600, 779)],
  },
  {
    id: "agile-travel",
    category: "manual",
    period: "Mar 2026",
    technologies: ["Manual Testing", "Bug Reporting", "Excel"],
    skills: ["Bug Reporting", "Defect Prioritization", "Form Validation Testing", "Functional Testing"],
    featured: false,
    media: [],
    results: [
      {
        kind: "bugsBySeverity",
        items: [
          { key: "critical", value: 3 },
          { key: "high", value: 3 },
          { key: "medium", value: 4 },
          { key: "low", value: 5 },
        ],
      },
      {
        kind: "bugsByPriority",
        items: [
          { key: "high", value: 7 },
          { key: "medium", value: 5 },
          { key: "low", value: 3 },
        ],
      },
    ],
  },
  {
    id: "bloodbank-sql",
    category: "database",
    technologies: ["SQL Server", "T-SQL", "SSMS"],
    skills: ["SQL Joins", "Stored Procedures", "Query Writing", "Relational Databases"],
    featured: false,
    media: [media("bloodbank-joins", 1424, 765), media("bloodbank-procedures", 855, 420)],
  },
  {
    id: "guru99-bank",
    category: "banking",
    period: "Sep 2025",
    technologies: ["Test Case Design", "Manual Testing", "Bug Reporting", "Regression Testing", "Documentation"],
    skills: ["Test Case Design", "Manual Testing", "Bug Reporting", "Regression Testing", "Documentation"],
    repoUrl: "https://github.com/abdoemadfathy/Testing-Portfolio",
    featured: false,
    media: [],
  },
];

/** Tools shown under the hero. */
export const tools: string[] = [
  "Selenium", "Java", "TestNG", "Cucumber", "Postman", "Newman", "SQL Server", "Jira", "Zephyr Scale", "Maven", "Git",
];

/** Lines of the animated test-run panel in the hero (illustrative). */
export const testRun: TestRunLine[] = [
  { label: "Login and authentication", ms: 124 },
  { label: "Add to cart and checkout", ms: 312 },
  { label: "Booking API create, read, update, delete", ms: 205 },
  { label: "SQL data integrity", ms: 148 },
  { label: "Cross-browser regression", ms: 640 },
  { label: "Mobile chat flows", ms: 276 },
];
