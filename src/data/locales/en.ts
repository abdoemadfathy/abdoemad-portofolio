import type { Content } from "@/types/portfolio";

export const en: Content = {
  lang: "en",
  htmlLang: "en",
  dir: "ltr",
  ogLocale: "en_US",

  seo: {
    title: "Abdulrahman Emad | QA & Automation Engineer",
    description:
      "Abdulrahman Emad is a QA & Automation Engineer in Cairo, Egypt, specializing in manual testing, API testing, SQL, and Selenium with Java.",
  },

  profile: {
    name: "Abdulrahman Emad",
    firstName: "Abdulrahman",
    lastName: "Emad",
    role: "QA & Automation Engineer",
    jobTitle: "QA & Automation Engineer",
    stack: ["Manual", "API", "SQL", "Selenium/Java"],
    bio: "Software Quality Assurance Engineer specializing in Manual & Automated Testing, API Validation, and End-to-End Web & Mobile Quality Assurance.",
    location: "Cairo, Egypt",
    avatarAlt: "Portrait of Abdulrahman Emad",
  },

  ui: {
    skipToContent: "Skip to content",
    mainNav: "Main",
    nav: { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", process: "How I work", contact: "Contact" },
    downloadCv: "Download CV",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    otherLangLabel: "العربية",
    otherLangAria: "Read this site in Arabic",
  },

  hero: {
    availability: "Open to QA roles, remote or on-site",
    headline: "I find the bugs before your users do.",
    tagline: "QA & Automation Engineer",
    stackLine: "Core stack: Manual, API, SQL, Selenium/Java.",
    seeProjects: "See my projects",
    illustrationNote: "An illustration of how I report a suite run. Press run again to replay it.",
    scrollAria: "Scroll to the About section",
    runSummary: (total, seconds) => `${total} passed, 0 failed in ${seconds} s`,
    runProgress: (done, total) => `${done} of ${total} complete`,
  },

  tools: { label: "Tools I work with" },

  about: {
    title: "About",
    intro:
      "I am a detail-oriented Software Quality Assurance Engineer dedicated to delivering reliable, scalable, and bug-free digital products. I bridge the gap between business requirements and technical execution, so every application is functional, user-friendly, and secure before it reaches production.",
    stats: [
      { value: 9, suffix: "", label: "QA projects showcased" },
      { value: 500, suffix: "+", label: "test cases designed for one platform" },
      { value: 50, suffix: "+", label: "bug reports filed per day on a live app" },
      { value: 6, suffix: " months", label: "QA internship at DEPI" },
    ],
    valuesTitle: "What you get when we work together",
    values: [
      { title: "End-to-end test design and execution", text: "Coverage across every SDLC and STLC phase." },
      { title: "Detailed bug reporting", text: "Clear reproduction steps, severity ranking, logs, and screenshots for swift resolution." },
      { title: "Cross-browser and multi-device testing", text: "Consistent behavior on Chrome, Firefox, Safari, Android, and iOS." },
      { title: "API and automated testing", text: "Test automation with Selenium WebDriver, Postman, TestNG, and Cucumber BDD." },
      { title: "UI/UX consistency reviews", text: "Functional and non-functional validation that improves the user experience." },
    ],
    outro:
      "My approach is built on precision, automation efficiency, and actionable metrics, helping engineering teams fix critical issues faster and launch stable releases with confidence.",
    highlights: [
      {
        icon: "graduation",
        title: "Education",
        text: "Bachelor's degree in Artificial Intelligence, Faculty of Computers and Information. Expected graduation 2028.",
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
    ],
  },

  services: {
    title: "What I test",
    description: "The kinds of testing I can take on, from a single feature to a full release.",
    items: [
      { icon: "check", title: "Functional testing", description: "Verify that every feature works as specified, including the edge cases." },
      { icon: "users", title: "UI/UX testing", description: "Check that the design is usable, intuitive, and consistent across screens." },
      { icon: "monitor", title: "Cross-browser and cross-device testing", description: "Confirm behavior on different browsers, operating systems, and screen sizes." },
      { icon: "bug", title: "Bug reporting", description: "Detailed, reproducible reports with severity, priority, and evidence." },
      { icon: "rotate", title: "Regression testing", description: "Make sure new updates don't break what already works." },
      { icon: "file", title: "Test case design and execution", description: "Structured test cases that cover core flows and edge scenarios." },
    ],
  },

  experience: {
    title: "Experience",
    description: "Freelance client work and a structured internship, across manual, API, SQL, and automated testing.",
    items: [
      {
        role: "Freelance QA Engineer",
        company: "Independent, through Mostaql and Freelancer.com",
        type: "Freelance, remote",
        period: "Jun 2026 to present",
        location: "Remote",
        points: [
          "Deliver end-to-end manual testing for clients on freelancing platforms, with 3 production-ready projects completed.",
          "Social entertainment app: ran a one-month pre-release test cycle covering real-time chat and core app features, with structured regression checks and defect reports ranked by severity.",
          "E-commerce and digital platforms: ran full QA cycles on 2 projects, including UI/UX validation, functional checks, and regression testing before launch.",
        ],
      },
      {
        role: "Software Manual Tester",
        company: "Test IO",
        type: "Freelance, remote",
        period: "Nov 2025 to May 2026",
        location: "Remote",
        points: [
          "Ran functional, exploratory, and usability tests on live web and mobile apps.",
          "Documented high-severity bugs and visual glitches with clear reproduction steps and logs.",
          "Validated edge cases and cross-device and cross-browser compatibility across multiple projects.",
          "Kept a high bug-acceptance rate in line with Test IO quality standards.",
        ],
      },
      {
        role: "Software Quality Assurance Engineer (Internship)",
        company: "Digital Egypt Pioneers Initiative (DEPI)",
        type: "Internship, hybrid",
        period: "Jun 2025 to Nov 2025",
        location: "Cairo, Egypt",
        points: [
          "Designed, reviewed, and executed end-to-end test cases and test suites based on ISTQB standards and SDLC/STLC best practices.",
          "Developed functional test scripts using Java, Selenium WebDriver, and TestNG for automated web testing.",
          "Performed API testing in Postman, validating HTTP status codes, JSON response payloads, and environment variables.",
          "Executed database testing by writing SQL queries to verify backend data integrity and transaction logs.",
          "Reported and tracked defects in Jira and Zephyr Scale with reproduction steps, severity levels, and execution logs.",
          "Worked in a cross-functional team to deliver fully tested, production-ready QA graduation deliverables.",
        ],
      },
    ],
    certificateTitle: "Certificate of achievement",
    certificateText: "Digital Egypt Pioneers Program, Software Tester track, sponsored by the Ministry of Communications and Information Technology.",
    certificateCaption: "Certificate of achievement from the Digital Egypt Pioneers Program",
  },

  skills: {
    title: "Skills",
    description: "The methods, tools, and languages I use day to day.",
    groups: [
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
    ],
  },

  projects: {
    title: "Selected projects",
    description: "Testing work across e-commerce, banking, API, mobile, and databases. Open a project to see what I tested and how.",
    note: "Client work is not listed here because of confidentiality; see Experience for the anonymised summary.",
    categories: {
      ecommerce: "E-commerce QA",
      api: "API testing",
      manual: "Manual QA",
      banking: "Banking QA",
      mobile: "Mobile app QA",
      automation: "Test automation",
      database: "Database and SQL",
    },
    viewCode: "View code",
    viewSuite: "View test suite",
    technologies: "Technologies",
    skillsDeveloped: "Skills developed",
    screenshots: "Work samples",
    results: "Results",
    resultTitles: {
      tests: "Test cases",
      automatedRun: "Automated run",
      bugsBySeverity: "Bugs by severity",
      bugsByPriority: "Bugs by priority",
    },
    resultLabels: {
      total: "Total",
      passed: "Passed",
      failed: "Failed",
      skipped: "Skipped",
      critical: "Critical",
      high: "High",
      medium: "Medium",
      low: "Low",
    },
    expand: "Show details",
    collapse: "Hide details",
    showMore: (count) => `Show ${count} more projects`,
    showLess: "Show fewer projects",
    items: {
      "opencart-graduation": {
        title: "E-Commerce QA Graduation Project – OpenCart",
        description:
          "Software Quality Assurance graduation project for an e-commerce platform (OpenCart), covering the full QA lifecycle with manual and automated testing.",
        features: [
          "Performed manual functional and non-functional testing",
          "Automated critical user journeys using Selenium WebDriver with Cucumber (BDD)",
          "Conducted API testing using Postman and validated backend data using SQL",
          "Prepared complete test documentation and managed defect tracking using JIRA",
        ],
        captions: {
          "opencart-tc-register": "Test cases for the Register feature, with steps, test data, and expected results",
          "opencart-tc-search": "Search test cases with actual results and a Pass or Fail status for each",
          "opencart-bug-report": "Bug report with severity, steps to reproduce, and expected and actual results",
          "opencart-testng-suite": "TestNG suite configuration for the automated regression tests",
        },
      },
      "swag-automation": {
        title: "Swag Labs Test Automation Framework",
        description:
          "Selenium WebDriver and TestNG automation for the Swag Labs demo store, with a custom listener that publishes an HTML execution report after every run.",
        features: [
          "Built a Java, Selenium WebDriver, and TestNG framework with separate base, test case, and utility layers",
          "Automated the cart and checkout flows with dedicated test classes",
          "Added a TestNG listener that generates a timestamped Extent Spark report, with environment and tester details",
          "The full suite of 32 tests runs headless on GitHub Actions on every change and weekly, and publishes its result to this page",
        ],
        captions: {
          "swag-extent-report": "Extent report from an earlier local run (27 passed, 5 skipped); the suite now runs all 32 tests in CI",
          "swag-listener": "The TestNG listener that builds the report and adds environment details",
        },
      },
      "restful-booker-api": {
        title: "API Testing Project – Restful Booker Automation",
        description:
          "API testing project on the Restful Booker API covering authentication, CRUD operations, negative testing, and automation with professional reporting.",
        features: [
          "Designed and executed requests covering authentication and CRUD operations",
          "Implemented Postman test scripts to validate status codes and response data",
          "Used global and environment variables for dynamic data management",
          "Automated workflows using Pre-request Scripts and Collection Runner/Newman",
        ],
      },
      "api-regression-suite": {
        title: "REST API Regression Suite | Postman",
        description:
          "A Postman regression collection for a REST API, covering user and resource endpoints, registration and login, and full create, read, update, and delete operations.",
        features: [
          "Organized the collection into list, single, create, update, and delete requests",
          "Covered successful and unsuccessful registration and login",
          "Wrote post-response scripts that check the status code, the JSON structure, and required fields",
          "Kept the base URL in a variable and set up Local, Staging, Production, and Testing environments",
        ],
        captions: {
          "reqres-postman": "Post-response test script and the regression collection in Postman",
        },
      },
      "social-entertainment-app": {
        title: "Social Entertainment App | Freelance Manual Testing",
        description:
          "Freelance manual testing engagement for a Social Entertainment App, covering core chat features and entertainment functionalities with structured regression testing and daily bug reporting.",
        features: [
          "Designed and executed detailed manual test cases using Excel, covering core chat features and entertainment functionalities across multiple user scenarios",
          "Delivered 50+ daily bug reports across all severity levels, including critical defects, ensuring full client transparency and enabling rapid resolution before release",
          "Contributed to a significant reduction in pre-release defects through systematic test coverage and structured regression checks across all major features",
          "Summarized one functional round in a test report: 103 test cases, 74 passed, 29 failed, and 30 bugs raised",
        ],
      },
      "vegetables-ecommerce": {
        title: "Vegetables E-Commerce Platform | Manual Testing",
        description:
          "Independent manual testing project for a Vegetables E-Commerce Platform, covering Web, Mobile, and Admin Panel interfaces with comprehensive test case design and defect management.",
        features: [
          "Reviewed SRS documentation to design and execute 500+ manual test cases covering Web, Mobile, and Admin Panel interfaces",
          "Conducted functional and cross-platform testing across three application layers, ensuring consistent behavior and defect-free user flows",
          "Documented and tracked all identified defects through full bug life-cycle management, achieving complete test coverage aligned with business requirements",
        ],
      },
      "gazara-mobile": {
        title: "Gazara Mobile App | Test Case Design",
        description:
          "Test case design for a mobile app, written from Scrum user stories that were tracked in a Jira backlog.",
        features: [
          "Wrote mobile test cases in Excel for social sign-up, phone number input, OTP verification, and location setup",
          "Structured every case with an ID, scenario, precondition, steps, test data, expected result, and priority",
          "Worked from Jira user stories grouped by feature labels such as Login, Registration, Onboarding, and Search",
        ],
        captions: {
          "gazara-test-cases": "Mobile test cases with scenarios, test data, expected results, and priorities",
          "gazara-jira-backlog": "Jira backlog with user stories and sprint planning",
        },
      },
      "agile-travel": {
        title: "Agile Travel Web App | Bug Reporting",
        description:
          "Exploratory testing of a travel booking web app, documented as a bug report with priority, severity, and full reproduction steps.",
        features: [
          "Found and documented 15 defects across registration, flight search, and credit card payment",
          "Rated each bug by priority and severity, and recorded the environment, steps to reproduce, and expected and actual results",
          "Examples: card payments accepted with an empty card number, and the same city allowed as both departure and destination",
        ],
      },
      "bloodbank-sql": {
        title: "Blood Bank Database | SQL Queries",
        description:
          "SQL Server practice project on a blood bank database, covering joins across related tables and parameterized stored procedures.",
        features: [
          "Worked with an eight-table database for donors, hospitals, blood stock, requests, and notifications",
          "Wrote INNER, LEFT, RIGHT, and FULL OUTER joins to combine related tables",
          "Created stored procedures with one or more parameters, including one that updates hospital contact details",
        ],
        captions: {
          "bloodbank-joins": "Join queries across the donor, admin, report, and hospital tables",
          "bloodbank-procedures": "Stored procedures with single and multiple parameters",
        },
      },
    },
  },

  ci: {
    label: "Latest automated run",
    passed: (n, total) => `${n} of ${total} passed`,
    failed: (n, total) => `${n} of ${total} failed`,
    loading: "Checking the latest run",
    unavailable: "Live status unavailable right now",
    ranAt: (date) => `Ran ${date}`,
    viewRuns: "View runs on GitHub",
    note: "Runs on GitHub Actions on every change and every Monday. The result is read live from the repository.",
  },

  process: {
    title: "How I work",
    description: "A repeatable routine, so every release gets the same care. Below is what a useful bug report looks like.",
    steps: [
      { title: "Understand", text: "Read the requirements and user stories, and ask about anything vague before writing a single test." },
      { title: "Plan", text: "Pick what to cover and in what order, with risk first: money, data, and sign-in flows lead." },
      { title: "Execute", text: "Run manual and exploratory passes, then automate the stable paths with Selenium or Postman." },
      { title: "Report", text: "File defects a developer can act on without a call: steps, severity, priority, and evidence." },
      { title: "Retest", text: "Verify each fix, run regression around it, and keep the suite running in CI." },
    ],
    reportTitle: "What a good bug report looks like",
    reportIntro: "The same defect, written two ways. Switch between them.",
    sampleNote: "Illustrative sample, anonymised. It follows the structure I use on real projects and contains no client data.",
    weakLabel: "Vague report",
    strongLabel: "Actionable report",
    fields: {
      title: "Title", environment: "Environment", severity: "Severity", priority: "Priority",
      steps: "Steps to reproduce", expected: "Expected", actual: "Actual", evidence: "Evidence", impact: "Impact",
    },
    game: {
      title: "Try to find the bug",
      intro: "This booking form has one deliberate defect. Fill it in, press Submit, and see if you can catch it. Nothing here is sent anywhere.",
      nameLabel: "Name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      submit: "Submit",
      reset: "Start over",
      privacy: "Demo only. What you type stays in your browser.",
      idleHint: "Try different combinations. Real testers leave things empty.",
      errorHint: "The form caught that one. What about the other fields?",
      success: "Thank you! Your booking was received.",
      okHint: "That behaved as expected. Now try leaving a field empty.",
      report: "Something is wrong here: file the bug",
      found: "You found it. This is how I would report it:",
      showMe: "Show me the bug",
      nameError: "Name is required",
      phoneError: "Phone is required",
      demoName: "Sample User",
    },
    weak: {
      title: "Form doesn't work",
      body: "I tried to submit the booking form and it didn't work properly. Please check.",
      missing: "No environment, no steps, no expected result, no severity, no evidence. A developer has to ask five questions before starting.",
    },
    strong: {
      title: "Booking form accepts an empty Email and shows a success page",
      environment: "Chrome 130, Windows 11, staging build",
      severity: "High: invalid data is saved",
      priority: "High: affects every new booking",
      steps: [
        "Open the booking page.",
        "Fill in Name and Phone. Leave Email empty.",
        "Press Submit.",
      ],
      expected: "An inline message says Email is required, and nothing is submitted.",
      actual: "The Thank you page opens and a record is created with an empty Email.",
      evidence: "Screenshot of the success page and the network response (HTTP 200) attached.",
      impact: "Bookings arrive without a way to contact the customer.",
    },
  },

  contact: {
    title: "Contact",
    description:
      "Hiring for QA, or have a release that needs a second pair of eyes? I'm open to internship and entry-level roles, remote or on-site.",
    copy: "Copy email",
    copied: "Copied",
    whatsapp: "WhatsApp",
    sendTitle: "Send a message",
    placeholders: { phone: "Phone number", email: "Email address", subject: "Subject", message: "How can I help?" },
    send: "Send message",
    sending: "Sending",
    sentTitle: "Message sent",
    sentText: "Thank you. I'll get back to you soon.",
    failTitle: "Message not sent",
    failText: (email) => `Please try again, or email me directly at ${email}.`,
    copyFailTitle: "Couldn't copy the email",
    copyFailText: (email) => `Please copy it manually: ${email}`,
  },

  footer: {
    rights: (year) => `© ${year} Abdulrahman Emad. QA & Automation Engineer, Cairo, Egypt.`,
    backToTop: "Back to top",
  },

  lightbox: {
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    counter: (n, total) => `${n} of ${total}`,
    zoomIn: "View larger",
  },

  assistant: {
    title: "QA Assistant",
    open: "Open portfolio assistant",
    close: "Close assistant",
    welcome:
      "Hi! I'm Abdulrahman's assistant. Ask me about his skills, projects, and experience, or how to reach him. You can write in English or Arabic, whichever is easier.",
    placeholder: "Type your question",
    send: "Send message",
    typing: "Typing…",
    fallback:
      "I don't have that specific answer right now, but you can reach out directly to Abdulrahman via Email or WhatsApp!",
    suggestions: ["What are his skills?", "API testing experience?", "Show me his projects", "How can I contact him?"],
    email: "Email",
    whatsapp: "WhatsApp",
    contactForm: "Contact form",
    subtitle: "Ask in English or Arabic",
    clear: "Start over",
  },

  notFound: {
    seoTitle: "Page Not Found | Abdulrahman Emad",
    seoDescription: "This page could not be found. Return to Abdulrahman Emad's QA & Automation Engineer portfolio.",
    title: "Page not found",
    text: "The page you are looking for doesn't exist or has moved.",
    cta: "Back to the portfolio",
  },
};
