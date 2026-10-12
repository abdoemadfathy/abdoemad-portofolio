/**
 * Knowledge for the portfolio assistant. Every fact here also appears on the site.
 * Keys are matched after normalisation (lower case, Arabic letter folding), so write them naturally.
 * `en` and `ar` are interchangeable variants; one is picked per reply, avoiding repeats.
 */
export interface Topic {
  id: string;
  /** Words, stems and phrases in English, Arabic, and Arabizi (Arabic in Latin letters). */
  keys: string[];
  en: string[];
  ar: string[];
  /** Topic ids offered as follow-up chips. */
  next?: string[];
  /** Show Email, WhatsApp, and contact form buttons. */
  contact?: boolean;
  /** Small talk never combines with another answer. */
  talk?: boolean;
}

export const topics: Topic[] = [
  /* ------------------------------ small talk ------------------------------ */
  {
    id: "greeting",
    talk: true,
    keys: ["hi", "hello", "hey", "hiya", "good morning", "good evening", "good afternoon", "salam", "ahlan", "marhaba", "السلام عليكم", "سلام", "مرحبا", "اهلا", "هلا", "صباح الخير", "مساء الخير", "هاي", "يا هلا", "هاى"],
    en: [
      "Hello! Good to have you here. Ask me anything about Abdulrahman's work, or tell me what you're looking for and I'll point you to it.",
      "Hi there! I can tell you about Abdulrahman's skills, projects, and experience, or help you get in touch with him. What would you like to know?",
    ],
    ar: [
      "أهلًا وسهلًا بك! اسألني عن أي شيء يخص أعمال عبدالرحمن، أو قل لي ما الذي تبحث عنه وسأدلّك عليه.",
      "مرحبًا بك! يمكنني أن أحدثك عن مهارات عبدالرحمن ومشاريعه وخبرته، أو أساعدك في التواصل معه. بماذا تحب أن نبدأ؟",
    ],
    next: ["about", "projects", "hire"],
  },
  {
    id: "howareyou",
    talk: true,
    keys: ["how are you", "how are u", "how r u", "how is it going", "whats up", "what's up", "ezayak", "izayak", "azayak", "ezayk", "3amel eh", "eh el akhbar", "ازيك", "عامل ايه", "اخبارك", "ايه الاخبار", "عامل اي", "كيف حالك", "شلونك", "كيفك"],
    en: [
      "Doing great, thanks for asking! I'm a bot, so my bugs are mostly in the jokes. How can I help you today?",
      "All good here, thank you! What would you like to know about Abdulrahman?",
    ],
    ar: [
      "الحمد لله، تمام شكرًا لسؤالك! أنا مساعد آلي، فأخطائي غالبًا في النكت فقط. كيف أقدر أساعدك؟",
      "بخير والحمد لله، شكرًا لك! ما الذي تود معرفته عن عبدالرحمن؟",
    ],
    next: ["about", "skills", "projects"],
  },
  {
    id: "thanks",
    talk: true,
    keys: ["thanks", "thank you", "thank", "thx", "ty", "appreciate", "shokran", "shukran", "great", "awesome", "perfect", "nice", "cool", "شكرا", "شكرًا", "تسلم", "متشكر", "جزاك الله", "ممتاز", "رائع", "جميل", "حلو", "تمام", "ميرسي", "يسلمو"],
    en: [
      "You're very welcome! Anything else you'd like to know?",
      "Happy to help! If you'd like to talk to Abdulrahman directly, I can show you how.",
    ],
    ar: [
      "العفو! هل تحب أن تعرف شيئًا آخر؟",
      "يسعدني ذلك! وإن أردت التحدث مع عبدالرحمن مباشرة فيمكنني أن أريك الطريقة.",
    ],
    next: ["projects", "contact"],
  },
  {
    id: "bye",
    talk: true,
    keys: ["bye", "goodbye", "see you", "see ya", "good night", "مع السلامه", "باي", "تصبح على خير", "الى اللقاء", "في امان الله"],
    en: ["Goodbye, and thanks for stopping by! The contact section is always there if you'd like to reach Abdulrahman."],
    ar: ["مع السلامة، وشكرًا لزيارتك! قسم التواصل موجود دائمًا إن أردت مراسلة عبدالرحمن."],
  },
  {
    id: "bot",
    talk: true,
    keys: ["who are you", "are you a bot", "are you human", "are you real", "are you ai", "are you chatgpt", "your name", "what are you", "انت مين", "انت بوت", "انت انسان", "انت ذكاء", "من انت", "ما اسمك", "اسمك ايه", "انت حقيقي", "enta meen", "inta meen"],
    en: [
      "I'm the assistant built into this portfolio. I'm not a person, and I'm not a general-purpose AI: I answer from what's on this site about Abdulrahman, in English or Arabic. For anything beyond that, he's the best one to ask.",
    ],
    ar: [
      "أنا مساعد مدمج في هذا الموقع. لست شخصًا، ولست ذكاءً اصطناعيًا عامًا: أجيب مما هو مكتوب في الموقع عن عبدالرحمن، بالعربية أو الإنجليزية. وفيما عدا ذلك فهو أفضل من يسألك.",
    ],
    next: ["about", "contact"],
  },
  {
    id: "joke",
    talk: true,
    keys: ["joke", "funny", "make me laugh", "نكته", "نكتة", "اضحكني", "هزار", "قولي نكته"],
    en: [
      "A QA engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 99999999 beers. Orders -1 beers. Orders a lizard. The first real customer walks in and asks where the bathroom is, and the bar bursts into flames.",
    ],
    ar: [
      "مهندس جودة دخل مطعمًا. طلب كوبًا واحدًا. ثم صفر أكواب. ثم 99999999 كوبًا. ثم سالب واحد. ثم طلب سحلية. وعندما سأل أول زبون حقيقي عن دورة المياه، اشتعل المطعم.",
    ],
    next: ["about", "projects"],
  },
  {
    id: "rude",
    talk: true,
    keys: ["stupid", "idiot", "useless", "dumb", "shut up", "hate", "غبي", "حمار", "فاشل", "اخرس", "وحش"],
    en: ["Sorry I wasn't more helpful. Tell me what you're after, and if I can't answer it, I'll show you how to reach Abdulrahman directly."],
    ar: ["آسف لأنني لم أكن مفيدًا بما يكفي. أخبرني بما تحتاجه، وإن لم أستطع الإجابة فسأدلّك على طريقة التواصل مع عبدالرحمن مباشرة."],
    next: ["contact"],
    contact: true,
  },

  /* ----------------------------- about the person ----------------------------- */
  {
    id: "about",
    keys: ["who is", "who's", "who is he", "tell me about him", "about him", "introduce", "introduction", "background", "profile", "summary", "overview", "مين هو", "من هو", "عرفني", "نبذه", "تعريف", "عنه", "حدثني عنه"],
    en: [
      "Abdulrahman Emad is a QA & Automation Engineer working in manual testing, API testing, SQL, and Selenium with Java. He has worked on e-commerce, banking, mobile, and API projects, and he's open to junior QA roles, internships, and freelance contracts.",
      "Abdulrahman is a detail-oriented QA & Automation Engineer. His core stack is manual testing, API testing with Postman, SQL, and Selenium with Java and TestNG. He has completed 10+ testing projects.",
    ],
    ar: [
      "عبدالرحمن عماد مهندس ضمان جودة وأتمتة اختبارات، يعمل في الاختبار اليدوي واختبار الـ API وSQL وSelenium مع Java. عمل على مشاريع تجارة إلكترونية وبنوك وموبايل وAPI، وهو متاح لوظائف الجودة المبتدئة والتدريب والعمل الحر.",
      "عبدالرحمن مهندس ضمان جودة يهتم بالتفاصيل. أدواته الأساسية: الاختبار اليدوي، واختبار الـ API عبر Postman، وSQL، وSelenium مع Java وTestNG. أنجز أكثر من 10 مشاريع اختبار.",
    ],
    next: ["experience", "skills", "projects"],
  },
  {
    id: "education",
    keys: ["education", "educated", "study", "studying", "student", "university", "college", "degree", "bachelor", "faculty", "graduat", "graduation", "major", "دراس", "يدرس", "تعليم", "جامعه", "كليه", "بكالوريوس", "تخرج", "خريج", "طالب", "الدراسه"],
    en: [
      "He's studying for a Bachelor's degree in Artificial Intelligence at a Faculty of Computers and Information, with graduation expected in 2028. Alongside it, he completed the DEPI Software Tester program and gained hands-on experience on real projects.",
    ],
    ar: [
      "يدرس عبدالرحمن بكالوريوس الذكاء الاصطناعي في كلية الحاسبات والمعلومات، والتخرج المتوقع 2028. وبجانب الدراسة أتمّ برنامج DEPI لمسار Software Tester واكتسب خبرة عملية في مشاريع حقيقية.",
    ],
    next: ["experience", "certificate"],
  },
  {
    id: "location",
    keys: ["where is", "where does", "where are", "where do", "location", "located", "based", "city", "country", "egypt", "cairo", "relocat", "timezone", "time zone", "فين بيسكن", "فين يسكن", "موجود فين", "مقيم فين", "وين", "مكانه", "مكان", "يسكن", "بيسكن", "مصر", "القاهره", "بلد", "مدينه", "feen", "fein"],
    en: [
      "Abdulrahman is in Cairo, Egypt, and works remotely or on-site. His freelance work is fully remote.",
    ],
    ar: [
      "عبدالرحمن في القاهرة، مصر، ويعمل عن بُعد أو من المقر. وأعماله الحرة كلها عن بُعد.",
    ],
    next: ["hire", "contact"],
  },
  {
    id: "languages",
    keys: ["speak", "language do you", "languages does", "english level", "arabic level", "fluent", "بيتكلم", "يتكلم", "لغات", "مستوى الانجليزي", "الانجليزي", "اللغه الانجليزيه"],
    en: [
      "This site is available in both English and Arabic, and I can chat in either. For his exact spoken-English level, the best way is to message him or have a short call.",
    ],
    ar: [
      "الموقع متاح بالعربية والإنجليزية، وأستطيع الحديث بأي منهما. أما مستواه في المحادثة بالإنجليزية تحديدًا، فأفضل طريقة لمعرفته مراسلته أو إجراء مكالمة قصيرة معه.",
    ],
    next: ["contact"],
  },

  /* -------------------------------- skills -------------------------------- */
  {
    id: "skills",
    keys: ["skill", "skills", "tool", "tools", "technolog", "stack", "tech stack", "expertise", "good at", "strength", "strong", "capable", "can he", "what can", "مهار", "mahaarat", "mhaarat", "mharat", "ادوات", "أدوات", "تقنيات", "يجيد", "بيعرف", "خبراته في", "مميزاته", "نقاط القوه", "تخصص", "specialt", "speciality"],
    en: [
      "Core skills: manual and automation testing, API and database testing, regression, E2E, smoke and sanity. Tools: Selenium WebDriver, Postman, TestNG, Cucumber (BDD), Jira, Zephyr Scale, SQL Server, Maven, Git and GitHub. Languages: Java, SQL, Python, C++, and HTML/CSS.",
    ],
    ar: [
      "المهارات الأساسية: الاختبار اليدوي والآلي، واختبار الـ API وقواعد البيانات، والانحدار (Regression)، والاختبار الشامل، وSmoke وSanity. الأدوات: Selenium WebDriver وPostman وTestNG وCucumber (BDD) وJira وZephyr Scale وSQL Server وMaven وGit وGitHub. اللغات: Java وSQL وPython وC++ وHTML/CSS.",
    ],
    next: ["automation", "api", "sql"],
  },
  {
    id: "automation",
    keys: ["automat", "selenium", "testng", "cucumber", "bdd", "framework", "webdriver", "script", "scripts", "maven", "java", "page object", "اتمت", "أتمت", "اتمته", "سيلينيوم", "سيلنيوم", "جافا", "سكربت", "فريمورك", "اوتوميشن", "اتوميشن"],
    en: [
      "On the automation side, Abdulrahman writes functional test scripts in Java with Selenium WebDriver and TestNG, and uses Cucumber (BDD) for readable scenarios. His Swag Labs framework has separate base, test, and utility layers and a custom TestNG listener that publishes an HTML report. The latest recorded run: 27 passed, 0 failed, 5 skipped.",
    ],
    ar: [
      "في الأتمتة يكتب عبدالرحمن سكربتات اختبار وظيفية بلغة Java مع Selenium WebDriver وTestNG، ويستخدم Cucumber (BDD) لسيناريوهات مقروءة. إطار Swag Labs الخاص به مقسّم إلى طبقات (base وtest وutility) وفيه Listener مخصص لـ TestNG ينشئ تقريرًا بصيغة HTML. آخر تشغيل مسجل: 27 ناجحًا، 0 فاشلًا، 5 متخطًّى.",
    ],
    next: ["swag-automation", "opencart", "skills"],
  },
  {
    id: "manual",
    keys: ["manual", "test case", "test cases", "testcase", "exploratory", "functional", "usability", "regression", "smoke", "sanity", "uat", "اختبار يدوي", "يدوي", "يدويه", "حالات اختبار", "حالات الاختبار", "وظيفي", "استكشافي", "انحدار"],
    en: [
      "In manual testing, he designs and executes end-to-end test cases, runs smoke, sanity, and regression cycles, and does functional, exploratory, and usability testing. For one e-commerce platform he designed 500+ test cases from the SRS.",
    ],
    ar: [
      "في الاختبار اليدوي يصمم عبدالرحمن وينفذ حالات اختبار شاملة، ويجري دورات Smoke وSanity وRegression، ويقوم بالاختبار الوظيفي والاستكشافي واختبار قابلية الاستخدام. ولمنصة تجارة إلكترونية واحدة صمّم أكثر من 500 حالة اختبار من وثيقة المتطلبات (SRS).",
    ],
    next: ["bugs", "vegetables-ecommerce", "social-entertainment-app"],
  },
  {
    id: "bugs",
    keys: ["bug", "bugs", "defect", "defects", "bug report", "reporting", "report bugs", "jira", "zephyr", "severity", "priority", "reproduce", "reproduction", "life cycle", "lifecycle", "خطا", "اخطاء", "أخطاء", "عيوب", "تقرير", "تقارير", "بج", "باجات", "ابلاغ", "جيرا"],
    en: [
      "His bug reports include the environment, clear steps to reproduce, expected and actual results, severity, priority, and evidence such as screenshots and logs. He tracks defects through their full life cycle in Jira and Zephyr Scale. In one Agile Travel app report he documented 15 defects ranked by severity and priority.",
    ],
    ar: [
      "تقارير الأخطاء عند عبدالرحمن تتضمن البيئة، وخطوات إعادة واضحة، والنتيجة المتوقعة والفعلية، والخطورة والأولوية، مع أدلة مثل لقطات الشاشة والسجلات. ويتابع الأخطاء عبر دورة حياتها كاملة في Jira وZephyr Scale. وفي تقرير تطبيق Agile Travel وثّق 15 خطأً مرتبة حسب الخطورة والأولوية.",
    ],
    next: ["agile-travel", "manual"],
  },
  {
    id: "api",
    keys: ["api", "apis", "postman", "rest", "restful", "endpoint", "endpoints", "json", "newman", "crud", "status code", "http", "booker", "واجهات برمجيه", "اي بي اي", "بوستمان", "بوست مان"],
    en: [
      "He tests APIs with Postman: status codes, JSON response data, authentication, CRUD operations, negative cases, and environment variables, with Pre-request scripts and Collection Runner or Newman for automation. Two projects show this: Restful Booker automation and a REST API regression suite.",
    ],
    ar: [
      "يختبر عبدالرحمن الـ API عبر Postman: أكواد الحالة وبيانات JSON والمصادقة وعمليات CRUD والحالات السلبية والمتغيرات البيئية، مع Pre-request Scripts وCollection Runner أو Newman للأتمتة. ويظهر ذلك في مشروعين: أتمتة Restful Booker ومجموعة انحدار لـ REST API.",
    ],
    next: ["restful-booker-api", "api-regression-suite", "sql"],
  },
  {
    id: "sql",
    keys: ["sql", "database", "databases", "db", "query", "queries", "join", "joins", "stored procedure", "procedure", "backend data", "data integrity", "قاعده بيانات", "قواعد بيانات", "قواعد البيانات", "استعلام", "استعلامات", "داتا بيز", "ايس كيو ال", "ديتابيز"],
    en: [
      "He does database testing with SQL Server: writing queries to check backend data integrity and transactions behind the UI. On a blood bank database he practiced INNER, LEFT, RIGHT, and FULL OUTER joins and parameterized stored procedures.",
    ],
    ar: [
      "يختبر عبدالرحمن قواعد البيانات باستخدام SQL Server، ويكتب استعلامات للتحقق من سلامة بيانات الـ backend والمعاملات خلف الواجهة. وعلى قاعدة بيانات بنك دم تدرّب على الـ Joins بأنواعها (INNER وLEFT وRIGHT وFULL OUTER) والإجراءات المخزنة ذات المعاملات.",
    ],
    next: ["bloodbank-sql", "api"],
  },
  {
    id: "mobile",
    keys: ["mobile", "android", "ios", "app testing", "phone app", "cross browser", "cross-browser", "cross device", "responsive", "موبايل", "اندرويد", "اندوريد", "تطبيقات", "تطبيق", "ايفون"],
    en: [
      "He has tested mobile and web apps: a freelance social entertainment app, mobile test cases for the Gazara app written from Scrum user stories, and live mobile apps on Test IO. He also checks cross-browser and cross-device behavior.",
    ],
    ar: [
      "اختبر عبدالرحمن تطبيقات موبايل وويب: تطبيق ترفيه اجتماعي كعمل حر، وحالات اختبار موبايل لتطبيق Gazara مكتوبة من قصص مستخدم Scrum، وتطبيقات موبايل منشورة عبر Test IO. كما يفحص السلوك عبر المتصفحات والأجهزة المختلفة.",
    ],
    next: ["gazara-mobile", "social-entertainment-app", "testio"],
  },
  {
    id: "method",
    keys: ["agile", "scrum", "sprint", "istqb", "sdlc", "stlc", "process", "methodolog", "workflow", "how do you test", "how does he test", "approach", "منهج", "منهجيه", "اجايل", "سكرم", "طريقه شغله", "بيشتغل ازاي", "يشتغل ازاي"],
    en: [
      "His approach follows ISTQB standards and SDLC/STLC practice: read the requirements, design test cases with preconditions and expected results, execute and report defects with evidence, then run regression after fixes. He has worked from Scrum user stories in a Jira backlog.",
    ],
    ar: [
      "يعتمد عبدالرحمن في عمله على معايير ISTQB وممارسات SDLC/STLC: قراءة المتطلبات، ثم تصميم حالات اختبار بشروط مسبقة ونتائج متوقعة، ثم التنفيذ والإبلاغ عن الأخطاء بأدلة، ثم اختبار الانحدار بعد الإصلاح. وقد عمل انطلاقًا من قصص مستخدم Scrum في Jira.",
    ],
    next: ["manual", "bugs"],
  },
  {
    id: "services",
    keys: ["service", "services", "offer", "what do you test", "what can you test", "what does he test", "scope", "خدمات", "خدماتك", "بيقدم", "يقدم", "ايه اللي بتختبره", "ما الذي يختبره"],
    en: [
      "He can take on functional testing, UI/UX testing, cross-browser and cross-device testing, bug reporting, regression testing, and test case design and execution, from a single feature to a full release. API, SQL, and Selenium automation are available too.",
    ],
    ar: [
      "يستطيع عبدالرحمن تنفيذ الاختبار الوظيفي، واختبار الواجهة وتجربة الاستخدام، والاختبار عبر المتصفحات والأجهزة، وكتابة تقارير الأخطاء، واختبار الانحدار، وتصميم حالات الاختبار وتنفيذها، من ميزة واحدة إلى إصدار كامل. كما يتوفر اختبار الـ API وSQL وأتمتة Selenium.",
    ],
    next: ["hire", "projects"],
  },

  /* ------------------------------- experience ------------------------------- */
  {
    id: "experience",
    keys: ["experience", "experienced", "work history", "career", "worked", "employment", "years", "how long", "background in", "خبره", "خبرة", "خبراته", "اشتغل", "يشتغل", "بيشتغل", "اشتغلت", "شغله", "khebra", "khebrto", "khebrt","شغل", "مسيره", "سنين", "كام سنه", "سنوات"],
    en: [
      "Three roles so far, newest first: Freelance QA Engineer (Jun 2026 to present, through Mostaql and Freelancer.com), Software Manual Tester at Test IO (Nov 2025 to May 2026), and a QA internship at the Digital Egypt Pioneers Initiative, DEPI (Jun 2025 to Nov 2025). Together with personal projects, that's 10+ testing projects.",
    ],
    ar: [
      "ثلاث محطات حتى الآن، من الأحدث: مهندس ضمان جودة بنظام العمل الحر (يونيو 2026 حتى الآن، عبر مستقل وFreelancer.com)، ومختبر برمجيات يدوي في Test IO (نوفمبر 2025 إلى مايو 2026)، وتدريب في مبادرة رواد مصر الرقمية DEPI (يونيو 2025 إلى نوفمبر 2025). ومع المشاريع الشخصية يتجاوز العدد 10 مشاريع اختبار.",
    ],
    next: ["freelance", "testio", "depi"],
  },
  {
    id: "freelance",
    keys: ["freelance", "freelancer", "freelancing", "mostaql", "mostaqaql", "client", "clients", "independent", "contract", "عمل حر", "فريلانس", "فري لانس", "مستقل", "عميل", "عملاء", "فريلانسر"],
    en: [
      "Since June 2026 he has worked as a freelance QA engineer through Mostaql and Freelancer.com, delivering end-to-end manual testing and completing 3 production-ready projects: a social entertainment app with a one-month pre-release cycle, and full QA cycles on 2 e-commerce and digital platforms. Client details stay confidential, so the site shows that work anonymised.",
    ],
    ar: [
      "منذ يونيو 2026 يعمل عبدالرحمن كمهندس جودة مستقل عبر مستقل وFreelancer.com، وينفذ اختبارًا يدويًا شاملًا، وأنجز 3 مشاريع جاهزة للإنتاج: تطبيق ترفيه اجتماعي بدورة اختبار قبل الإطلاق لمدة شهر، ودورات جودة كاملة على منصتين للتجارة الإلكترونية والمحتوى الرقمي. تفاصيل العملاء سرية، لذلك يعرض الموقع هذه الأعمال دون ذكر أسماء.",
    ],
    next: ["social-entertainment-app", "hire"],
  },
  {
    id: "testio",
    keys: ["test io", "testio", "test.io", "crowdtest", "crowd testing", "crowd"],
    en: [
      "At Test IO (Nov 2025 to May 2026) he ran functional, exploratory, and usability tests on live web and mobile apps, documented high-severity bugs and visual glitches with clear steps and logs, and checked cross-device and cross-browser compatibility. He kept a high bug-acceptance rate in line with Test IO's quality standards.",
    ],
    ar: [
      "في Test IO (نوفمبر 2025 إلى مايو 2026) نفذ عبدالرحمن اختبارات وظيفية واستكشافية واختبارات قابلية استخدام على تطبيقات ويب وموبايل منشورة، ووثّق الأخطاء عالية الخطورة والعيوب البصرية بخطوات وسجلات واضحة، وفحص التوافق عبر الأجهزة والمتصفحات. وحافظ على نسبة قبول عالية للأخطاء وفق معايير Test IO.",
    ],
    next: ["freelance", "depi"],
  },
  {
    id: "depi",
    keys: ["depi", "digital egypt", "pioneers", "internship", "intern", "training", "رواد مصر", "ديبي", "تدريب", "انترنشب", "إنترن"],
    en: [
      "In the DEPI internship (Jun 2025 to Nov 2025) he designed and ran test cases based on ISTQB standards, wrote Java, Selenium, and TestNG scripts, tested APIs in Postman, verified data with SQL, and tracked defects in Jira and Zephyr Scale, working in a cross-functional team.",
    ],
    ar: [
      "في تدريب DEPI (يونيو 2025 إلى نوفمبر 2025) صمّم ونفّذ حالات اختبار وفق معايير ISTQB، وكتب سكربتات Java وSelenium وTestNG، واختبر الـ API في Postman، وتحقق من البيانات بـ SQL، وتابع الأخطاء في Jira وZephyr Scale ضمن فريق متعدد التخصصات.",
    ],
    next: ["certificate", "education"],
  },
  {
    id: "certificate",
    keys: ["certificate", "certification", "certified", "credential", "شهاده", "شهادة", "شهادات", "معتمد"],
    en: ["He holds the Digital Egypt Pioneers Program certificate of achievement for the Software Tester track, sponsored by Egypt's Ministry of Communications and Information Technology. You can view it in the Experience section."],
    ar: ["حصل على شهادة إنجاز من برنامج رواد مصر الرقمية لمسار Software Tester، برعاية وزارة الاتصالات وتكنولوجيا المعلومات. يمكنك مشاهدتها في قسم الخبرة."],
    next: ["depi"],
  },

  /* -------------------------------- projects -------------------------------- */
  {
    id: "projects",
    keys: ["project", "projects", "portfolio", "work samples", "samples", "examples", "case study", "case studies", "what has he built", "مشروع", "مشاريع", "مشاريعه", "mashro3", "mashro3at", "mashari3", "mashroat", "اعمال", "أعمال", "نماذج", "امثله", "أمثلة"],
    en: [
      "There are 10+ projects in the Projects section, each with details and screenshots where available: OpenCart e-commerce QA, a Swag Labs automation framework, Restful Booker API testing, a REST API regression suite, a social entertainment app, a vegetables e-commerce platform, Swag Labs manual testing, Gazara mobile test cases, an Agile Travel bug report, a Blood Bank SQL project, and Guru99 Bank. Which one should I tell you about?",
    ],
    ar: [
      "في قسم المشاريع أكثر من 10 مشاريع، لكل منها تفاصيل ولقطات حيث توفرت: اختبار OpenCart للتجارة الإلكترونية، وإطار أتمتة Swag Labs، واختبار Restful Booker للـ API، ومجموعة انحدار لـ REST API، وتطبيق ترفيه اجتماعي، ومنصة خضروات للتجارة الإلكترونية، واختبار Swag Labs اليدوي، وحالات اختبار موبايل لتطبيق Gazara، وتقرير أخطاء Agile Travel، ومشروع SQL لبنك الدم، واختبار Guru99 Bank. أيها تحب أن أحدثك عنه؟",
    ],
    next: ["opencart", "swag-automation", "agile-travel"],
  },
  {
    id: "opencart",
    keys: ["opencart", "open cart", "graduation project", "graduation", "مشروع التخرج", "اوبن كارت", "أوبن كارت"],
    en: [
      "OpenCart is his QA graduation project on an e-commerce platform covering the full lifecycle: manual functional and non-functional testing, Selenium with Cucumber (BDD) automation of critical user journeys, Postman API tests, SQL data checks, and defect tracking in Jira. The project has screenshots of test cases, a bug report, and the TestNG suite.",
    ],
    ar: [
      "OpenCart هو مشروع تخرجه في ضمان الجودة على منصة تجارة إلكترونية، ويغطي دورة الجودة كاملة: اختبار وظيفي وغير وظيفي يدوي، وأتمتة المسارات الحرجة بـ Selenium مع Cucumber (BDD)، واختبارات Postman للـ API، وفحص بيانات بـ SQL، ومتابعة الأخطاء في Jira. وفي المشروع لقطات لحالات الاختبار وتقرير أخطاء وملف TestNG.",
    ],
    next: ["automation", "projects"],
  },
  {
    id: "swag-automation",
    keys: ["swag", "swag labs", "saucedemo", "sauce demo", "extent", "listener", "extent report", "سواج", "سواغ"],
    en: [
      "Swag Labs shows up twice: a manual testing project (login, add to cart, checkout, sorting, with detailed test cases and bug reports), and an automation framework in Java, Selenium, and TestNG with a listener that builds a timestamped Extent report. The latest run: 27 passed, 0 failed, 5 skipped.",
    ],
    ar: [
      "Swag Labs يظهر في مشروعين: مشروع اختبار يدوي (تسجيل الدخول والإضافة للسلة والدفع والترتيب، مع حالات اختبار وتقارير أخطاء مفصلة)، وإطار أتمتة بـ Java وSelenium وTestNG مع Listener ينشئ تقرير Extent مؤرخًا. آخر تشغيل: 27 ناجحًا، 0 فاشلًا، 5 متخطًّى.",
    ],
    next: ["automation", "projects"],
  },
  {
    id: "restful-booker-api",
    keys: ["restful booker", "restful-booker", "booker", "ريستفل", "بوكر"],
    en: ["The Restful Booker project covers authentication, CRUD operations, and negative testing in Postman, with scripts that validate status codes and response data, global and environment variables, and automated runs through Pre-request Scripts and Collection Runner or Newman."],
    ar: ["مشروع Restful Booker يغطي المصادقة وعمليات CRUD والاختبار السلبي في Postman، مع سكربتات تتحقق من أكواد الحالة وبيانات الاستجابة، ومتغيرات عامة وبيئية، وتشغيل آلي عبر Pre-request Scripts وCollection Runner أو Newman."],
    next: ["api-regression-suite", "api"],
  },
  {
    id: "api-regression-suite",
    keys: ["regression suite", "regression collection", "reqres", "postman collection", "api regression", "مجموعه انحدار"],
    en: ["The REST API regression suite is a Postman collection organised into list, single, create, update, and delete requests, plus successful and failed registration and login. It uses post-response scripts for status code, JSON structure, and required fields, with Local, Staging, Production, and Testing environments."],
    ar: ["مجموعة انحدار REST API هي Collection في Postman منظمة إلى طلبات القائمة والعنصر الواحد والإنشاء والتحديث والحذف، إضافة إلى التسجيل وتسجيل الدخول الناجح والفاشل. وتستخدم سكربتات ما بعد الاستجابة للتحقق من كود الحالة وبنية JSON والحقول المطلوبة، مع بيئات Local وStaging وProduction وTesting."],
    next: ["restful-booker-api", "api"],
  },
  {
    id: "social-entertainment-app",
    keys: ["social app", "entertainment", "social entertainment", "chat app", "chat", "real time", "real-time", "daily bug", "50+", "ترفيه", "تطبيق اجتماعي", "دردشه", "شات"],
    en: ["The social entertainment app was a freelance manual testing engagement covering core chat features and entertainment functions, with structured regression checks and daily bug reports across all severity levels. One functional round is summarised in a report: 103 test cases, 74 passed, 29 failed, 30 bugs raised. The client's name is kept confidential."],
    ar: ["تطبيق الترفيه الاجتماعي كان عملًا حرًا في الاختبار اليدوي، غطّى ميزات الدردشة الأساسية ووظائف الترفيه، مع فحوصات انحدار منظمة وتقارير أخطاء يومية بكل مستويات الخطورة. وتلخّص إحدى الجولات الوظيفية في تقرير: 103 حالة اختبار، 74 ناجحة، 29 فاشلة، و30 خطأً مسجلًا. واسم العميل يبقى سريًا."],
    next: ["freelance", "manual"],
  },
  {
    id: "vegetables-ecommerce",
    keys: ["vegetables", "vegetable", "groceries", "grocery", "500+", "srs", "admin panel", "خضروات", "خضار", "لوحة التحكم"],
    en: ["For the Vegetables E-Commerce Platform he reviewed the SRS and designed and executed 500+ manual test cases across the Web, Mobile, and Admin Panel layers, tracking every defect through its full life cycle."],
    ar: ["في منصة الخضروات للتجارة الإلكترونية راجع وثيقة المتطلبات (SRS) وصمّم ونفّذ أكثر من 500 حالة اختبار يدوية عبر طبقات الويب والموبايل ولوحة الإدارة، وتابع كل خطأ عبر دورة حياته كاملة."],
    next: ["manual", "projects"],
  },
  {
    id: "gazara-mobile",
    keys: ["gazara", "otp", "onboarding", "user stories", "backlog", "جزارة", "جزاره"],
    en: ["For the Gazara mobile app he wrote Excel test cases for social sign-up, phone number input, OTP verification, and location setup, each with ID, scenario, precondition, steps, test data, expected result, and priority, working from Jira user stories."],
    ar: ["في تطبيق Gazara للموبايل كتب حالات اختبار في Excel لتسجيل الدخول الاجتماعي وإدخال رقم الهاتف والتحقق برمز OTP وإعداد الموقع، لكل حالة معرّف وسيناريو وشرط مسبق وخطوات وبيانات اختبار ونتيجة متوقعة وأولوية، انطلاقًا من قصص المستخدم في Jira."],
    next: ["mobile", "projects"],
  },
  {
    id: "agile-travel",
    keys: ["agile travel", "travel", "flight", "booking app", "bug report project", "سفر", "رحلات", "طيران", "اجايل ترافل"],
    en: ["In the Agile Travel web app he did exploratory testing and documented 15 defects across registration, flight search, and credit card payment: 3 critical, 3 high, 4 medium, and 5 low severity. Examples: payments accepted with an empty card number, and the same city allowed as both departure and destination."],
    ar: ["في تطبيق Agile Travel أجرى اختبارًا استكشافيًا ووثّق 15 خطأً في التسجيل والبحث عن الرحلات والدفع بالبطاقة: 3 حرجة و3 عالية و4 متوسطة و5 منخفضة الخطورة. ومن الأمثلة: قبول الدفع ببطاقة بدون رقم، والسماح بنفس المدينة كمغادرة ووجهة."],
    next: ["bugs", "projects"],
  },
  {
    id: "bloodbank-sql",
    keys: ["blood bank", "bloodbank", "blood", "donor", "donors", "hospital", "بنك الدم", "دم", "متبرع"],
    en: ["The Blood Bank project is SQL Server practice on an eight-table database for donors, hospitals, blood stock, requests, and notifications: INNER, LEFT, RIGHT, and FULL OUTER joins, and stored procedures with one or more parameters."],
    ar: ["مشروع بنك الدم تدريب على SQL Server على قاعدة بيانات من ثمانية جداول للمتبرعين والمستشفيات ومخزون الدم والطلبات والإشعارات: Joins من أنواع INNER وLEFT وRIGHT وFULL OUTER، وإجراءات مخزنة بمعامل واحد أو أكثر."],
    next: ["sql", "projects"],
  },
  {
    id: "guru99-bank",
    keys: ["guru99", "guru 99", "banking", "bank app", "جورو", "بنك", "بنكي"],
    en: ["The Guru99 Bank project is end-to-end manual testing of a banking application: test cases for all modules, detailed bug reports, and regression testing."],
    ar: ["مشروع Guru99 Bank اختبار يدوي شامل لتطبيق بنكي: حالات اختبار لكل الوحدات، وتقارير أخطاء مفصلة، واختبار انحدار."],
    next: ["projects"],
  },
  {
    id: "github",
    keys: ["github", "repo", "repository", "source code", "code samples", "git hub", "جيت هاب", "كود", "الكود"],
    en: ["His code is on GitHub at github.com/abdoemadfathy. Projects with public code have a View code button in the Projects section."],
    ar: ["كوده على GitHub عبر github.com/abdoemadfathy. والمشاريع التي لها كود عام فيها زر عرض الكود في قسم المشاريع."],
    next: ["projects"],
  },

  /* ----------------------------- hiring and contact ----------------------------- */
  {
    id: "hire",
    keys: ["hire", "hiring", "recruit", "recruiter", "available", "availability", "open to", "looking for", "job", "jobs", "position", "opportunity", "vacancy", "interview", "start date", "notice period", "full time", "full-time", "part time", "junior", "توظيف", "اوظف", "أوظف", "وظيفه", "وظيفة", "متاح", "فرصه", "مقابله", "يشتغل معانا", "ينضم", "دوام", "جونيور", "مبتدئ"],
    en: [
      "Yes, he's open to junior QA roles, internships, and freelance contracts, remote or on-site. For start date, interview times, or terms, the quickest way is to message him directly.",
    ],
    ar: [
      "نعم، هو متاح لوظائف الجودة المبتدئة والتدريب والعقود الحرة، عن بُعد أو من المقر. وبخصوص موعد البدء أو مواعيد المقابلات أو الشروط، أسرع طريقة أن تراسله مباشرة.",
    ],
    next: ["contact", "cv"],
    contact: true,
  },
  {
    id: "pricing",
    keys: ["price", "pricing", "rate", "rates", "cost", "salary", "how much", "budget", "quote", "fee", "fees", "expected salary", "سعر", "اسعار", "أسعار", "تكلفه", "تكلفة", "راتب", "بكام", "ميزانيه", "عرض سعر", "اجر", "أجر"],
    en: ["Rates and salary depend on the scope, so there's no fixed price listed. Send him a short description of what you need and he'll reply with a clear answer."],
    ar: ["الأسعار والراتب تعتمد على نطاق العمل، لذلك لا يوجد سعر ثابت معلن. أرسل له وصفًا مختصرًا لما تحتاجه وسيرد عليك بإجابة واضحة."],
    next: ["contact"],
    contact: true,
  },
  {
    id: "cv",
    keys: ["cv", "resume", "résumé", "curriculum", "download cv", "سيره", "سيرة", "السيره الذاتيه", "سي في", "ريزيوم"],
    en: ["You can download his CV with the Download CV button at the top of the page (it's also in the menu on mobile)."],
    ar: ["يمكنك تحميل سيرته الذاتية من زر تحميل السيرة الذاتية أعلى الصفحة (وهو أيضًا في القائمة على الموبايل)."],
    next: ["contact", "experience"],
  },
  {
    id: "contact",
    keys: ["contact", "email", "e-mail", "mail", "reach", "get in touch", "message him", "whatsapp", "whats app", "phone", "number", "call", "linkedin", "talk to", "speak to", "تواصل", "اتواصل", "اكلمه", "كلمه", "رقم", "ايميل", "بريد", "واتس", "واتساب", "لينكد", "راسل", "اراسله", "رقمه", "تليفون", "موبايله"],
    en: [
      "You can email him at abdoemadfathy1@gmail.com, message him on WhatsApp at +20 112 699 8251, or find him on LinkedIn (linkedin.com/in/abdulrahmanemadfathy). There's also a contact form at the bottom of the page.",
    ],
    ar: [
      "يمكنك مراسلته على abdoemadfathy1@gmail.com، أو عبر واتساب على +20 112 699 8251، أو على LinkedIn (linkedin.com/in/abdulrahmanemadfathy). وفي أسفل الصفحة أيضًا نموذج تواصل.",
    ],
    contact: true,
    next: ["hire", "cv"],
  },
  {
    id: "confidential",
    keys: ["nda", "confidential", "confidentiality", "private", "client name", "anonymous", "anonymised", "سري", "سريه", "سرية", "اسم العميل", "خصوصيه"],
    en: ["Client work is shown anonymised, with aggregate numbers only and no client names or private documents. If you need to know more about a specific engagement, he can discuss what's shareable."],
    ar: ["أعمال العملاء معروضة دون ذكر أسماء، بأرقام مجمّعة فقط ودون مستندات خاصة. وإن أردت تفاصيل أكثر عن عمل معين فيمكنه مناقشة ما يجوز مشاركته."],
    next: ["freelance", "contact"],
  },
  {
    id: "site",
    keys: ["this site", "this website", "website built", "how was this", "built with", "react", "tailwind", "framer", "dark mode", "light mode", "theme", "الموقع ده", "الموقع", "اتعمل ازاي", "اتبنى", "الوضع الداكن", "الوضع الفاتح"],
    en: ["This site is built with React, TypeScript, Tailwind CSS, and Framer Motion. It has light and dark modes (the sun and moon button in the header) and English and Arabic versions."],
    ar: ["الموقع مبني بـ React وTypeScript وTailwind CSS وFramer Motion. وفيه وضع فاتح وداكن (زر الشمس والقمر في الأعلى) ونسختان بالعربية والإنجليزية."],
    next: ["about"],
  },

  {
    id: "unlisted",
    keys: ["appium", "cypress", "playwright", "jmeter", "jenkins", "docker", "ci/cd", "cicd", "k6", "katalon", "soapui", "robot framework", "restassured", "rest assured", "performance testing", "load testing", "security testing", "penetration", "devops", "kubernetes", "azure devops", "gitlab"],
    en: ["That one isn't on his listed skills yet, so I won't claim it. His strongest areas are manual testing, API testing with Postman, SQL, and Selenium with Java and TestNG, and he keeps adding to them. If a specific tool matters for a role, ask him directly."],
    ar: ["هذه الأداة ليست ضمن مهاراته المعلنة حتى الآن، فلن أدّعي غير ذلك. أقوى مجالاته: الاختبار اليدوي، واختبار الـ API عبر Postman، وSQL، وSelenium مع Java وTestNG، وهو يضيف إليها باستمرار. وإن كانت أداة بعينها مهمة لوظيفة ما، فاسأله مباشرة."],
    next: ["skills", "contact"],
    contact: true,
  },

  /* ------------------------------ QA concepts ------------------------------ */
  {
    id: "q-sev-prio",
    keys: ["severity vs priority", "severity and priority", "difference between severity", "severity or priority", "الفرق بين الخطوره والاولويه", "خطوره واولويه", "الخطوره والاولويه"],
    en: ["Severity is how badly a bug affects the system, like a crash versus a typo. Priority is how soon it should be fixed, which depends on business needs. A typo in the company name on the home page is low severity but can be high priority."],
    ar: ["الخطورة (Severity) هي مدى تأثير الخطأ على النظام، مثل انهيار التطبيق مقابل خطأ إملائي. أما الأولوية (Priority) فهي مدى سرعة إصلاحه، وتعتمد على احتياج العمل. خطأ إملائي في اسم الشركة بالصفحة الرئيسية خطورته منخفضة لكن أولويته قد تكون عالية."],
    next: ["bugs"],
  },
  {
    id: "q-smoke-sanity",
    keys: ["smoke vs sanity", "smoke and sanity", "smoke testing", "sanity testing", "difference between smoke", "الفرق بين smoke", "سموك وسانيتي", "smoke و sanity"],
    en: ["Smoke testing is a quick check that the main functions of a new build work well enough to test further. Sanity testing is a narrow check that a specific fix or change works as intended."],
    ar: ["اختبار Smoke فحص سريع للتأكد أن الوظائف الأساسية في الإصدار الجديد تعمل بما يكفي لمتابعة الاختبار. واختبار Sanity فحص محدود للتأكد أن إصلاحًا أو تغييرًا معينًا يعمل كما ينبغي."],
    next: ["manual"],
  },
  {
    id: "q-regression",
    keys: ["what is regression", "regression testing", "define regression", "ما هو اختبار الانحدار", "يعني ايه ريجريشن", "يعني ايه انحدار", "ما هو regression"],
    en: ["Regression testing re-runs existing tests after a change to make sure new code didn't break features that already worked. It's a natural fit for automation."],
    ar: ["اختبار الانحدار (Regression) يعيد تشغيل اختبارات موجودة بعد أي تغيير للتأكد أن الكود الجديد لم يكسر ميزات كانت تعمل. وهو مجال مناسب جدًا للأتمتة."],
    next: ["automation"],
  },
  {
    id: "q-bdd",
    keys: ["what is bdd", "behavior driven", "behaviour driven", "gherkin", "given when then", "يعني ايه bdd", "ما هو bdd"],
    en: ["BDD, behavior-driven development, describes tests as readable scenarios in Given, When, Then form, usually with Cucumber, so business and technical people can read the same specification."],
    ar: ["BDD (التطوير المعتمد على السلوك) يصف الاختبارات كسيناريوهات مقروءة بصيغة Given وWhen وThen، عادةً مع Cucumber، فيقرأ الفريق التقني وفريق العمل المواصفات نفسها."],
    next: ["automation"],
  },
  {
    id: "q-qa-qc",
    keys: ["qa vs qc", "qa and qc", "difference between qa", "quality assurance vs quality control", "الفرق بين qa و qc", "qa و qc", "qa وqc"],
    en: ["QA (quality assurance) is process-focused and aims to prevent defects, for example by improving how requirements and tests are written. QC (quality control) is product-focused and aims to find defects in what was built, for example by running tests."],
    ar: ["ضمان الجودة (QA) يركز على العملية ويهدف إلى منع الأخطاء، مثل تحسين طريقة كتابة المتطلبات والاختبارات. أما مراقبة الجودة (QC) فتركز على المنتج وتهدف إلى اكتشاف الأخطاء فيما تم بناؤه، مثل تنفيذ الاختبارات."],
    next: ["method"],
  },
  {
    id: "q-exploratory",
    keys: ["what is exploratory", "exploratory testing", "ما هو الاستكشافي", "الاختبار الاستكشافي"],
    en: ["Exploratory testing is simultaneous learning, test design, and execution without fixed scripts. The tester follows hunches and the app's behavior to find problems scripted tests miss."],
    ar: ["الاختبار الاستكشافي يجمع التعلّم وتصميم الاختبار وتنفيذه في وقت واحد دون سكربتات ثابتة، فيتتبع المختبر ما يلاحظه من سلوك التطبيق ليجد مشكلات قد تفوتها الاختبارات المكتوبة مسبقًا."],
    next: ["manual"],
  },
];

/** Short chip labels for follow-up suggestions. */
export const chipLabels: Record<string, { en: string; ar: string }> = {
  about: { en: "Who is Abdulrahman?", ar: "من هو عبدالرحمن؟" },
  skills: { en: "His skills", ar: "مهاراته" },
  projects: { en: "His projects", ar: "مشاريعه" },
  experience: { en: "His experience", ar: "خبرته" },
  contact: { en: "How to contact him", ar: "طرق التواصل" },
  hire: { en: "Is he available?", ar: "هل هو متاح؟" },
  cv: { en: "Download CV", ar: "السيرة الذاتية" },
  automation: { en: "Automation work", ar: "أعمال الأتمتة" },
  api: { en: "API testing", ar: "اختبار الـ API" },
  sql: { en: "SQL and databases", ar: "SQL وقواعد البيانات" },
  manual: { en: "Manual testing", ar: "الاختبار اليدوي" },
  bugs: { en: "How he reports bugs", ar: "كتابة تقارير الأخطاء" },
  freelance: { en: "Freelance work", ar: "أعماله الحرة" },
  testio: { en: "Test IO", ar: "Test IO" },
  depi: { en: "DEPI internship", ar: "تدريب DEPI" },
  certificate: { en: "Certificate", ar: "الشهادة" },
  education: { en: "Education", ar: "الدراسة" },
  opencart: { en: "OpenCart project", ar: "مشروع OpenCart" },
  "swag-automation": { en: "Swag Labs", ar: "Swag Labs" },
  "restful-booker-api": { en: "Restful Booker", ar: "Restful Booker" },
  "api-regression-suite": { en: "API regression suite", ar: "مجموعة انحدار الـ API" },
  "social-entertainment-app": { en: "Social app project", ar: "تطبيق الترفيه الاجتماعي" },
  "vegetables-ecommerce": { en: "Vegetables platform", ar: "منصة الخضروات" },
  "gazara-mobile": { en: "Gazara mobile app", ar: "تطبيق Gazara" },
  "agile-travel": { en: "Agile Travel bugs", ar: "أخطاء Agile Travel" },
  "bloodbank-sql": { en: "Blood Bank SQL", ar: "SQL بنك الدم" },
  mobile: { en: "Mobile testing", ar: "اختبار الموبايل" },
  method: { en: "How he works", ar: "طريقة عمله" },
  services: { en: "What he can test", ar: "ما يستطيع اختباره" },
  github: { en: "GitHub", ar: "GitHub" },
};
