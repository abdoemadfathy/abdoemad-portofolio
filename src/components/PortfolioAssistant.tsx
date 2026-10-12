import { useEffect, useRef, useState } from "react";
import { Bot, Mail, MessageCircle, Send, X } from "lucide-react";
import { usePortfolio } from "@/i18n/LanguageProvider";
import type { KbTopic } from "@/types/portfolio";

type Msg = { from: "user" | "bot"; text: string; contact?: boolean };

/** Folds Arabic spelling variants so "أتمتة" and "اتمته" match the same key. */
const normalize = (v: string) =>
  v
    .toLowerCase()
    .replace(/[ً-ٟـ]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه");

const answer = (raw: string, kb: KbTopic[], fallback: string): Msg => {
  const q = normalize(raw);
  const words = q.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  const hit = (key: string) => {
    const k = normalize(key);
    return k.length <= 3 ? words.includes(k) : q.includes(k);
  };
  const scored = kb
    .map((topic) => ({ topic, score: topic.keys.filter(hit).length }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  if (!scored.length) return { from: "bot", text: fallback, contact: true };
  const text = scored.map((s) => s.topic.answers[Math.floor(Math.random() * s.topic.answers.length)]).join("\n\n");
  return { from: "bot", text, contact: scored.some((s) => s.topic.keys.includes("contact") || s.topic.keys.includes("تواصل")) };
};

const PortfolioAssistant = () => {
  const { t, contact } = usePortfolio();
  const a = t.assistant;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ from: "bot", text: a.welcome }]);
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
      setMessages((m) => [...m, answer(trimmed, a.kb, a.fallback)]);
      setTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 end-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label={a.title}
          className="w-[calc(100vw-2.5rem)] max-w-96 animate-scale-in overflow-hidden rounded-xl border border-border bg-card shadow-2xl sm:w-96"
        >
          <div className="flex items-center justify-between border-b border-border bg-primary/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" aria-hidden />
              <p className="text-sm font-semibold">{a.title}</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label={a.close} className="text-muted-foreground transition-colors hover:text-primary">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="h-80 space-y-2 overflow-y-auto px-3 py-3" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    m.from === "user" ? "bg-primary text-primary-foreground" : "border border-border bg-secondary/60"
                  }`}
                >
                  {m.text}
                  {m.contact && (
                    <div className="mt-2 flex gap-2">
                      <a href={`mailto:${contact.email}`} target="_top" className="flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs text-primary-foreground">
                        <Mail className="h-3.5 w-3.5" /> {a.email}
                      </a>
                      <a
                        href={`https://wa.me/${contact.phone.replace("+", "")}`}
                        target="_top"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-full border border-primary px-3 py-1.5 text-xs text-primary"
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> {a.whatsapp}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm text-muted-foreground">{a.typing}</div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 px-3 pb-2">
            {a.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs transition-colors hover:border-primary hover:text-primary"
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
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={a.placeholder}
              aria-label={a.placeholder}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button type="submit" aria-label={a.send} className="text-primary transition-colors hover:text-primary/80 rtl:-scale-x-100">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={a.open}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default PortfolioAssistant;
