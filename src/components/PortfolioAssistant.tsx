import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { from: "user" | "bot"; text: string };

const answers: { keys: string[]; text: string }[] = [
  {
    keys: ["who", "about", "abdulrahman", "you"],
    text: "Abdulrahman Emad is a Software Quality Assurance Engineer specializing in Manual & Automated Testing, API Validation, and End-to-End Web & Mobile Quality Assurance, based in El Faiyum, Egypt."
  },
  {
    keys: ["skill", "tools", "technology", "stack"],
    text: "Core skills: Manual & Automation Testing, API Testing, Selenium WebDriver, Postman, TestNG, Cucumber (BDD), Jira, Zephyr Scale, SQL Server, Maven, Git & GitHub, plus Java, SQL, Python, C++, HTML/CSS."
  },
  {
    keys: ["experience", "work", "depi", "intern", "job"],
    text: "Abdulrahman completed a Software Quality Assurance Engineer internship at the Digital Egypt Pioneers Initiative (DEPI), Jun 2025 – Nov 2025, working on test case design, Selenium/TestNG automation, Postman API testing, SQL database testing, and defect tracking in Jira."
  },
  {
    keys: ["project", "portfolio", "github"],
    text: "Highlighted projects: OpenCart E-Commerce QA Graduation Project, Restful Booker API Testing with Postman, Swag Labs Manual Testing, and Guru99 Bank Testing. You can find the code on GitHub: https://github.com/abdoemadfathy"
  },
  {
    keys: ["cv", "resume", "download"],
    text: "You can download the CV using the 'Download CV' button in the hero section at the top of the page."
  },
  {
    keys: ["contact", "email", "reach", "hire", "linkedin"],
    text: "You can reach Abdulrahman at abdulrahmanemadfathy@gmail.com, on LinkedIn (linkedin.com/in/abdulrahmanemadfathy), or via the contact form at the bottom of the page."
  },
  {
    keys: ["service", "offer", "test"],
    text: "Services offered: Functional Testing, UI/UX Testing, Cross-Browser & Cross-Device Testing, Bug Reporting, Regression Testing, and Test Case Design & Execution."
  },
  {
    keys: ["hello", "hi", "hey", "salam"],
    text: "Hello! I'm Abdulrahman's portfolio assistant. Ask me about his skills, experience, projects, services, or how to contact him."
  }
];

const fallback =
  "I can help with questions about Abdulrahman's skills, experience, projects, services, CV, or contact details. What would you like to know?";

const suggestions = ["What are his skills?", "Show me his projects", "How can I contact him?"];

const PortfolioAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Abdulrahman's portfolio assistant. How can I help you?" }
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const reply = (raw: string) => {
    const q = raw.toLowerCase();
    const match = answers.find((a) => a.keys.some((k) => q.includes(k)));
    return match ? match.text : fallback;
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }, { from: "bot", text: reply(trimmed) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 sm:w-96 rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-border">
            <p className="font-semibold text-sm">Portfolio Assistant</p>
            <button onClick={() => setOpen(false)} aria-label="Close assistant" className="text-muted-foreground hover:text-primary transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={listRef} className="h-72 overflow-y-auto px-3 py-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/60 border border-border"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
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
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PortfolioAssistant;
