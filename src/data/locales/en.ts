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
    nav: { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", contact: "Contact" },
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
    tagline: "QA & Automation Engineer based in Cairo, Egypt",
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
      { value: 10, suffix: "+", label: "QA projects delivered" },
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
    items: [
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
    note: "More projects are on the way, including test automation and AI-assisted testing.",
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
          "Latest recorded run: 27 tests passed, none failed, 5 skipped, in about three minutes",
        ],
        captions: {
          "swag-extent-report": "Execution report of the latest run: 27 passed, 0 failed, 5 skipped",
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
      "swag-labs-manual": {
        title: "Manual Testing Project – Swag Labs",
        description:
          "Manual testing project on the Swag Labs demo website covering Login, Add to Cart, Checkout, and Sorting functionalities with detailed test cases and bug reports.",
        features: [
          "Designed and executed detailed test cases with preconditions and expected/actual results",
          "Tested multiple functionalities: Login, Add to Cart, Checkout, and Sorting",
          "Identified critical defects using different user roles",
          "Documented professional bug reports with severity, priority, and reproduction steps",
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
      "guru99-bank": {
        title: "Guru99 Bank Testing Project",
        description: "End-to-end manual testing project for Guru99 Bank application, covering different modules and flows.",
        features: [
          "Designed test cases covering all modules",
          "Executed comprehensive testing flows",
          "Prepared detailed bug reports",
          "Performed regression testing",
        ],
      },
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
      "Hi! I'm Abdulrahman's portfolio assistant. Ask me anything about his QA skills, experience, projects, or contact info.",
    placeholder: "Ask about skills, projects, contact...",
    send: "Send message",
    typing: "Typing…",
    fallback:
      "I don't have that specific answer right now, but you can reach out directly to Abdulrahman via Email or WhatsApp!",
    suggestions: ["What are his skills?", "API testing experience?", "Show me his projects", "How can I contact him?"],
    email: "Email",
    whatsapp: "WhatsApp",
    kb: [
      {
        keys: ["who", "about", "abdulrahman", "yourself", "introduce", "background"],
        answers: [
          "Abdulrahman Emad is a Software Quality Assurance Engineer specializing in Manual & Automated Testing, API Validation, and End-to-End Web & Mobile QA. He's based in Cairo, Egypt and open to remote & on-site roles.",
        ],
      },
      {
        keys: ["automat", "selenium", "testng", "cucumber", "bdd", "java", "script"],
        answers: [
          "For automation, Abdulrahman writes functional test scripts in Java with Selenium WebDriver and TestNG, and uses Cucumber (BDD) for readable, behavior-driven scenarios. Projects are managed with Maven and Git.",
        ],
      },
      {
        keys: ["manual", "test case", "bug", "defect", "regression", "smoke", "sanity", "jira", "zephyr"],
        answers: [
          "On the manual side, he designs and executes end-to-end test cases, runs smoke, sanity and regression cycles, and writes detailed bug reports with reproduction steps and severity in Jira & Zephyr Scale.",
        ],
      },
      {
        keys: ["api", "postman", "rest", "endpoint", "json", "restassured"],
        answers: [
          "Abdulrahman performs API testing with Postman, validating status codes, JSON payloads and environment variables. He built a full Restful Booker API testing project and a REST API regression suite.",
        ],
      },
      {
        keys: ["sql", "database", "db", "query", "data"],
        answers: [
          "He does database testing by writing SQL queries (SQL Server) to verify backend data integrity, and has practiced joins and stored procedures on a blood bank database.",
        ],
      },
      {
        keys: ["skill", "tool", "technolog", "stack", "language"],
        answers: [
          "Core skills: Manual & Automation Testing, API and Database Testing, Selenium WebDriver, Postman, TestNG, Cucumber (BDD), Jira, Zephyr Scale, SQL Server, Maven, Git & GitHub, plus Java, SQL, Python, C++ and HTML/CSS.",
        ],
      },
      {
        keys: ["experience", "work", "depi", "intern", "job", "career", "certificate"],
        answers: [
          "He completed a Software QA Engineer internship at the Digital Egypt Pioneers Initiative (DEPI): test case design, Selenium/TestNG automation, Postman API testing, SQL database testing and defect tracking in Jira. The certificate is shown in the Experience section.",
        ],
      },
      {
        keys: ["project", "portfolio", "github", "opencart", "swag", "guru", "booker"],
        answers: [
          "Highlighted projects: OpenCart E-Commerce QA, Swag Labs Test Automation, Restful Booker API Testing, and a freelance mobile app engagement. Code is on GitHub: github.com/abdoemadfathy. Open any project in the Projects section for details and screenshots.",
        ],
      },
      { keys: ["cv", "resume"], answers: ["You can download his CV with the 'Download CV' button at the top of the page."] },
      {
        keys: ["service", "offer", "hire", "freelance"],
        answers: [
          "Services: Functional Testing, UI/UX Testing, Cross-Browser & Cross-Device Testing, Bug Reporting, Regression Testing and Test Case Design & Execution. Want to discuss a project? Reach out below!",
        ],
      },
      {
        keys: ["contact", "email", "reach", "whatsapp", "phone", "linkedin", "call"],
        answers: [
          "You can email Abdulrahman at abdoemadfathy1@gmail.com, message him on WhatsApp at +20 112 699 8251, or connect on LinkedIn (linkedin.com/in/abdulrahmanemadfathy).",
        ],
      },
      {
        keys: ["where", "location", "cairo", "remote", "relocat"],
        answers: ["He's based in Cairo, Egypt and open to both remote and on-site opportunities."],
      },
      {
        keys: ["educat", "study", "university", "degree", "college"],
        answers: ["He's studying for a Bachelor's in Artificial Intelligence at the Faculty of Computers and Information in Cairo (expected 2028)."],
      },
      { keys: ["thank", "thanks", "great", "awesome"], answers: ["You're welcome! Anything else you'd like to know about Abdulrahman?"] },
      {
        keys: ["hello", "hi", "hey", "salam", "good morning", "good evening"],
        answers: ["Hello! I'm Abdulrahman's assistant. Ask me about his QA skills, automation, API or SQL testing, projects, or how to contact him."],
      },
    ],
  },

  notFound: {
    seoTitle: "Page Not Found | Abdulrahman Emad",
    seoDescription: "This page could not be found. Return to Abdulrahman Emad's QA & Automation Engineer portfolio.",
    title: "Page not found",
    text: "The page you are looking for doesn't exist or has moved.",
    cta: "Back to the portfolio",
  },
};
