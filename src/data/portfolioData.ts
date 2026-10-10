import type {
  Experience,
  Highlight,
  Profile,
  Project,
  Service,
  SkillGroup,
  Stat,
  TestRunLine,
  ValuePoint,
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Abdulrahman Emad",
  firstName: "Abdulrahman",
  lastName: "Emad",
  role: "QA & Automation Engineer",
  stack: ["Manual", "API", "SQL", "Selenium/Java"],
  bio: "Software Quality Assurance Engineer specializing in Manual & Automated Testing, API Validation, and End-to-End Web & Mobile Quality Assurance.",
  location: "Cairo, Egypt",
  email: "abdoemadfathy1@gmail.com",
  phone: "+201126998251",
  phoneDisplay: "+20 112 699 8251",
  cv: {
    url: "/CV_Abdulrahman_Emad.pdf",
    downloadName: "Abdulrahman_Emad_CV.pdf",
  },
  avatarAlt: "Abdulrahman Emad",
  socials: [
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/abdulrahmanemadfathy" },
    { key: "github", label: "GitHub", href: "https://github.com/abdoemadfathy" },
    { key: "email", label: "Email", href: "mailto:abdoemadfathy1@gmail.com" },
    { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/201126998251" },
  ],
};

export const projects: Project[] = [
  {
    id: "opencart-graduation",
    title: "E-Commerce QA Graduation Project – OpenCart",
    description:
      "Software Quality Assurance graduation project for an e-commerce platform (OpenCart), covering the full QA lifecycle with manual and automated testing.",
    period: "2025",
    category: "ecommerce",
    technologies: ["Manual Testing", "Selenium WebDriver", "Cucumber (BDD)", "Postman", "SQL", "JIRA"],
    features: [
      "Performed manual functional and non-functional testing",
      "Automated critical user journeys using Selenium WebDriver with Cucumber (BDD)",
      "Conducted API testing using Postman and validated backend data using SQL",
      "Prepared complete test documentation and managed defect tracking using JIRA",
    ],
    skills: ["Full QA Lifecycle", "Test Automation", "API Testing", "Defect Management", "Test Documentation"],
    repoUrl: "https://github.com/abdoemadfathy/GraduationProject_DEPI_SoftwareTesting",
    featured: true,
  },
  {
    id: "restful-booker-api",
    title: "API Testing Project – Restful Booker Automation",
    description:
      "API testing project on the Restful Booker API covering authentication, CRUD operations, negative testing, and automation with professional reporting.",
    period: "2025",
    category: "api",
    technologies: ["Postman", "API Testing", "Manual Testing", "Java", "Newman"],
    features: [
      "Designed and executed requests covering authentication and CRUD operations",
      "Implemented Postman test scripts to validate status codes and response data",
      "Used global and environment variables for dynamic data management",
      "Automated workflows using Pre-request Scripts and Collection Runner/Newman",
    ],
    skills: ["API Testing", "Test Automation", "Postman Scripting", "Newman", "Test Reporting"],
    repoUrl: "https://github.com/abdoemadfathy/API-Testing-Project-using-Postman-Restful-Booker-Automation",
    featured: true,
  },
  {
    id: "swag-labs-manual",
    title: "Manual Testing Project – Swag Labs",
    description:
      "Manual testing project on the Swag Labs demo website covering Login, Add to Cart, Checkout, and Sorting functionalities with detailed test cases and bug reports.",
    period: "2025",
    category: "ecommerce",
    technologies: ["Manual Testing", "Test Cases", "Bug Reporting", "Test Planning", "UAT"],
    features: [
      "Designed and executed detailed test cases with preconditions and expected/actual results",
      "Tested multiple functionalities: Login, Add to Cart, Checkout, and Sorting",
      "Identified critical defects using different user roles",
      "Documented professional bug reports with severity, priority, and reproduction steps",
    ],
    skills: ["Manual Testing", "Test Case Design", "Bug Reporting", "UAT", "Defect Documentation"],
    repoUrl: "https://github.com/abdoemadfathy/Manual-Testing-Project---Swag-Labs-Test-Cases-Bug-Reports-",
    featured: true,
  },
  {
    id: "guru99-bank",
    title: "Guru99 Bank Testing Project",
    description: "End-to-end manual testing project for Guru99 Bank application, covering different modules and flows.",
    period: "Sep 2025",
    category: "banking",
    technologies: ["Test Case Design", "Manual Testing", "Bug Reporting", "Regression Testing", "Documentation"],
    features: [
      "Designed test cases covering all modules",
      "Executed comprehensive testing flows",
      "Prepared detailed bug reports",
      "Performed regression testing",
    ],
    skills: ["Test Case Design", "Manual Testing", "Bug Reporting", "Regression Testing", "Documentation"],
    repoUrl: "https://github.com/abdoemadfathy/Testing-Portfolio",
    featured: false,
  },
  {
    id: "vegetables-ecommerce",
    title: "Vegetables E-Commerce Platform | Manual Testing",
    description:
      "Independent manual testing project for a Vegetables E-Commerce Platform, covering Web, Mobile, and Admin Panel interfaces with comprehensive test case design and defect management.",
    period: "Mar 2025",
    category: "ecommerce",
    technologies: ["Manual Testing", "Jira", "Zephyr Scale", "Cross-Platform Testing", "SRS Analysis"],
    features: [
      "Reviewed SRS documentation to design and execute 500+ manual test cases covering Web, Mobile, and Admin Panel interfaces",
      "Conducted functional and cross-platform testing across three application layers, ensuring consistent behavior and defect-free user flows",
      "Documented and tracked all identified defects through full bug life-cycle management, achieving complete test coverage aligned with business requirements",
    ],
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Jira",
      "Zephyr Scale",
      "Cross-Platform Testing",
      "Bug Life-Cycle Management",
    ],
    featured: true,
  },
  {
    id: "social-entertainment-app",
    title: "Social Entertainment App | Freelance Manual Testing",
    description:
      "Freelance manual testing engagement for a Social Entertainment App, covering core chat features and entertainment functionalities with structured regression testing and daily bug reporting.",
    period: "Mar 2026",
    category: "mobile",
    technologies: ["Manual Testing", "Excel", "Bug Reporting", "Regression Testing"],
    features: [
      "Designed and executed detailed manual test cases using Excel, covering core chat features and entertainment functionalities across multiple user scenarios",
      "Delivered 50+ daily bug reports across all severity levels, including critical defects, ensuring full client transparency and enabling rapid resolution before release",
      "Contributed to a significant reduction in pre-release defects through systematic test coverage and structured regression checks across all major features",
    ],
    skills: ["Manual Testing", "Bug Reporting", "Regression Testing", "Test Case Design", "Client Communication"],
    featured: true,
  },
];

export const headline = "I find the bugs before your users do.";

export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "QA projects delivered" },
  { value: 500, suffix: "+", label: "test cases designed for one platform" },
  { value: 50, suffix: "+", label: "bug reports filed per day on a live app" },
  { value: 6, suffix: " months", label: "QA internship at DEPI" },
];

export const aboutIntro =
  "I am a detail-oriented Software Quality Assurance Engineer dedicated to delivering reliable, scalable, and bug-free digital products. I bridge the gap between business requirements and technical execution, so every application is functional, user-friendly, and secure before it reaches production.";

export const aboutOutro =
  "My approach is built on precision, automation efficiency, and actionable metrics, helping engineering teams fix critical issues faster and launch stable releases with confidence.";

export const valuePoints: ValuePoint[] = [
  { title: "End-to-end test design and execution", text: "Coverage across every SDLC and STLC phase." },
  { title: "Detailed bug reporting", text: "Clear reproduction steps, severity ranking, logs, and screenshots for swift resolution." },
  { title: "Cross-browser and multi-device testing", text: "Consistent behavior on Chrome, Firefox, Safari, Android, and iOS." },
  { title: "API and automated testing", text: "Test automation with Selenium WebDriver, Postman, TestNG, and Cucumber BDD." },
  { title: "UI/UX consistency reviews", text: "Functional and non-functional validation that improves the user experience." },
];

export const highlights: Highlight[] = [
  {
    icon: "graduation",
    title: "Education",
    text: "Bachelor's degree in Artificial Intelligence, Faculty of Computers and Information, Cairo. Expected graduation 2028.",
  },
  {
    icon: "test",
    title: "Quality assurance",
    text: "Hands-on experience in manual and automated testing across web, API, database, and mobile.",
  },
  {
    icon: "book",
    title: "Continuous learning",
    text: "Actively developing skills in Java, Python, C++, and modern testing frameworks.",
  },
];

export const services: Service[] = [
  { icon: "check", title: "Functional testing", description: "Verify that every feature works as specified, including the edge cases." },
  { icon: "users", title: "UI/UX testing", description: "Check that the design is usable, intuitive, and consistent across screens." },
  { icon: "monitor", title: "Cross-browser and cross-device testing", description: "Confirm behavior on different browsers, operating systems, and screen sizes." },
  { icon: "bug", title: "Bug reporting", description: "Detailed, reproducible reports with severity, priority, and evidence." },
  { icon: "rotate", title: "Regression testing", description: "Make sure new updates don't break what already works." },
  { icon: "file", title: "Test case design and execution", description: "Structured test cases that cover core flows and edge scenarios." },
];

export const experience: Experience[] = [
  {
    role: "Software Quality Assurance Engineer (Internship)",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jun 2025 to Nov 2025",
    location: "Cairo, Egypt, hybrid",
    points: [
      "Designed, reviewed, and executed end-to-end test cases and test suites based on ISTQB standards and SDLC/STLC best practices.",
      "Developed functional test scripts using Java, Selenium WebDriver, and TestNG for automated web testing.",
      "Performed API testing in Postman, validating HTTP status codes, JSON response payloads, and environment variables.",
      "Executed database testing by writing SQL queries to verify backend data integrity and transaction logs.",
      "Reported and tracked defects in Jira and Zephyr Scale with reproduction steps, severity levels, and execution logs.",
      "Worked in a cross-functional team to deliver fully tested, production-ready QA graduation deliverables.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Testing and methodologies",
    icon: "clipboard",
    skills: [
      "Manual Testing", "Automation Testing", "API Testing", "Database Testing", "Regression",
      "E2E Testing", "Smoke & Sanity", "SDLC & STLC", "Bug Lifecycle Management",
    ],
  },
  {
    title: "Tools and automation",
    icon: "wrench",
    skills: [
      "Selenium WebDriver", "Postman", "TestNG", "Cucumber (BDD)", "Jira",
      "Zephyr Scale", "SQL Server", "Maven", "Git & GitHub",
    ],
  },
  { title: "Languages", icon: "code", skills: ["Java", "SQL", "Python", "C++", "HTML/CSS"] },
  {
    title: "Domains and soft skills",
    icon: "team",
    skills: [
      "E-commerce", "Fitness", "Web & Mobile Apps", "Attention to Detail",
      "Analytical Thinking", "Team Collaboration",
    ],
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
