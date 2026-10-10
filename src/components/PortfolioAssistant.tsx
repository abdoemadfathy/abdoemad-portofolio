import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mail, Bot } from "lucide-react";

type Msg = { from: "user" | "bot"; text: string; contact?: boolean };

const EMAIL = "abdoemadfathy1@gmail.com";
const WHATSAPP = "https://wa.me/201126998251";

const kb: { keys: string[]; answers: string[] }[] = [
  {
    keys: ["who", "about", "abdulrahman", "yourself", "introduce", "background"],
    answers: [
      "Abdulrahman Emad is a Software Quality Assurance Engineer specializing in Manual & Automated Testing, API Validation, and End-to-End Web & Mobile QA. He's based in Cairo, Egypt and open to remote & on-site roles."
    ]
  },
  {
    keys: ["automat", "selenium", "testng", "cucumber", "bdd", "java", "script"],
    answers: [
      "For automation, Abdulrahman writes functional test scripts in Java with Selenium WebDriver and TestNG, and uses Cucumber (BDD) for readable, behavior-driven scenarios. Projects are managed with Maven and Git."
    ]
  },
  {
    keys: ["manual", "test case", "bug", "defect", "regression", "smoke", "sanity", "jira", "zephyr"],
    answers: [
      "On the manual side, he designs and executes end-to-end test cases, runs smoke, sanity and regression cycles, and writes detailed bug reports with reproduction steps and severity in Jira & Zephyr Scale."
    ]
  },
  {
    keys: ["api", "postman", "rest", "endpoint", "json", "restassured"],
    answers: [
      "Abdulrahman performs API testing with Postman — validating status codes, JSON payloads and environment variables — and built a full Restful Booker API testing project. He also works with RestAssured."
    ]
  },
  {
    keys: ["sql", "database", "db", "query", "data"],
    answers: [
      "He does database testing by writing SQL queries (SQL Server) to verify backend data integrity and transactions behind the UI."
    ]
  },
  {
    keys: ["skill", "tool", "technolog", "stack", "language"],
    answers: [
      "Core skills: Manual & Automation Testing, API and Database Testing, Selenium WebDriver, Postman, TestNG, Cucumber (BDD), Jira, Zephyr Scale, SQL Server, Maven, Git & GitHub — plus Java, SQL, Python, C++ and HTML/CSS."
    ]
  },
  {
    keys: ["experience", "work", "depi", "intern", "job", "career"],
    answers: [
      "He completed a Software QA Engineer internship at the Digital Egypt Pioneers Initiative (DEPI), Jun 2025 – Nov 2025: test case design, Selenium/TestNG automation, Postman API testing, SQL database testing and defect tracking in Jira."
    ]
  },
  {
    keys: ["project", "portfolio", "github", "opencart", "swag", "guru", "booker"],
    answers: [
      "Highlighted projects: OpenCart E-Commerce QA, Restful Booker API Testing (Postman), Swag Labs Manual Testing and Guru99 Bank Testing. Code is on GitHub: github.com/abdoemadfathy — scroll to the Projects section for details."
    ]
  },
  {
    keys: ["cv", "resume"],
    answers: ["You can download his CV with the 'Download CV' button at the top of the page."]
  },
  {
    keys: ["service", "offer", "hire", "freelance"],
    answers: [
      "Services: Functional Testing, UI/UX Testing, Cross-Browser & Cross-Device Testing, Bug Reporting, Regression Testing and Test Case Design & Execution. Want to discuss a project? Reach out below!"
    ]
  },
  {
    keys: ["contact", "email", "reach", "whatsapp", "phone", "linkedin", "call"],
    answers: [
      `You can email Abdulrahman at ${EMAIL}, message him on WhatsApp at +20 112 699 8251, or connect on LinkedIn (linkedin.com/in/abdulrahmanemadfathy).`
    ]
  },
  {
    keys: ["where", "location", "cairo", "remote", "relocat"],
    answers: ["He's based in Cairo, Egypt and open to both remote and on-site opportunities."]
  },
  {
    keys: ["educat", "study", "university", "degree", "college"],
    answers: ["He's studying for a Bachelor's in Artificial Intelligence at the Faculty of Computers and Information in Cairo (expected 2028)."]
  },
  {
    keys: ["thank", "thanks", "great", "awesome"],
    answers: ["You're welcome! Anything else you'd like to know about Abdulrahman?"]
  },
  {
    keys: ["hello", "hi", "hey", "salam", "good morning", "good evening"],
    answers: ["Hello! I'm Abdulrahman's assistant. Ask me about his QA skills, automation, API or SQL testing, projects, or how to contact him."]
  }
];

const FALLBACK =
  "I don't have that specific answer right now, but you can reach out directly to Abdulrahman via Email or WhatsApp!";

const suggestions = ["What are his skills?", "API testing experience?", "Show me his projects", "How can I contact him?"];

const reply = (raw: string): Msg => {
  const q = raw.toLowerCase();
  const words = q.split(/[^a-z]+/).filter(Boolean);
  const hit = (k: string) => (k.length <= 3 ? words.includes(k) : q.includes(k));
  // Score every topic and combine the best matches for multi-part questions
  const scored = kb
    .map((t) => ({ t, score: t.keys.filter(hit).length }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  if (!scored.length) return { from: "bot", text: FALLBACK, contact: true };
  const text = scored.map((s) => s.t.answers[Math.floor(Math.random() * s.t.answers.length)]).join("\n\n");
  const isContact = scored.some((s) => s.t.keys.includes("contact"));
  return { from: "bot", text, contact: isContact };
};

const ContactButtons = () => (
  <div className="flex gap-2 mt-2">
    <a href={`mailto:${EMAIL}`} target="_top" className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
      <Mail className="w-3.5 h-3.5" /> Email
    </a>
    <a href={WHATSAPP} target="_top" rel="noopener noreferrer" className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-primary text-primary">
      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
    </a>
  </div>
);

const PortfolioAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Abdulrahman's portfolio assistant. Ask me anything about his QA skills, experience, projects, or contact info." }
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, reply(trimmed)]);
      setTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 sm:w-96 rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-scale-in">
          <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-border">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-primary" />
              <p className="font-semibold text-sm">QA Assistant</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant" className="text-muted-foreground hover:text-primary transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={listRef} className="h-80 overflow-y-auto px-3 py-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-line ${
                    m.from === "user" ? "bg-primary text-primary-foreground" : "bg-secondary/60 border border-border"
                  }`}
                >
                  {m.text}
                  {m.contact && <ContactButtons />}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="rounded-lg px-3 py-2 text-sm bg-secondary/60 border border-border text-muted-foreground">Typing…</div>
              </div>
            )}
          </div>

          <div className="px-3 pb-2 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-1 rounded-full bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-3 py-3 border-t border-border"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects, contact..."
              className="flex-1 bg-background border border-input rounded-md px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button type="submit" aria-label="Send message" className="text-primary hover:text-primary/80 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open portfolio assistant"
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PortfolioAssistant;
