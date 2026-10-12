import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, MessageSquareText, RotateCcw, Send, X } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { chipLabels } from "@/data/assistant/topics";
import { newContext, respond, respondToTopic, type Context, type Reply } from "@/lib/assistant/engine";
import { EASE_OUT } from "@/lib/motion";
import { usePortfolio } from "@/i18n/LanguageProvider";

type Msg = {
  id: number;
  from: "user" | "bot";
  text: string;
  lang?: "en" | "ar";
  contact?: boolean;
  chips?: { id: string; label: string }[];
};

/** Renders **bold** spans and keeps line breaks. */
const Rich = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>,
    )}
  </>
);

const PortfolioAssistant = () => {
  const { t, lang, contact } = usePortfolio();
  const a = t.assistant;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const idRef = useRef(1);
  const ctx = useRef<Context>(newContext());
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const initialChips = () =>
    ["about", "projects", "hire"].map((id) => ({ id, label: chipLabels[id][lang] }));

  const welcome = (): Msg[] => [{ id: 0, from: "bot", text: a.welcome, lang, chips: initialChips() }];
  const [messages, setMessages] = useState<Msg[]>(welcome);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const close = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const deliver = (reply: Reply) => {
    // A short, length-aware pause reads as a person typing rather than an instant dump.
    const delay = Math.min(1300, 450 + reply.text.length * 3);
    setTyping(true);
    timer.current = setTimeout(() => {
      setMessages((m) => [
        ...m.map((x) => ({ ...x, chips: undefined })),
        { id: idRef.current++, from: "bot", text: reply.text, lang: reply.lang, contact: reply.contact, chips: reply.chips },
      ]);
      setTyping(false);
    }, delay);
  };

  const send = (raw: string, topicId?: string) => {
    const text = raw.trim().slice(0, 300);
    if (!text || typing) return;
    setMessages((m) => [...m.map((x) => ({ ...x, chips: undefined })), { id: idRef.current++, from: "user", text }]);
    setInput("");
    deliver(topicId ? respondToTopic(topicId, lang, ctx.current) : respond(text, lang, ctx.current));
  };

  const reset = () => {
    clearTimeout(timer.current);
    setTyping(false);
    ctx.current = newContext();
    setMessages(welcome());
  };

  const goToForm = () => {
    close();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const last = messages[messages.length - 1];

  return (
    <div className="fixed bottom-5 end-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={a.title}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="flex max-h-[min(640px,calc(100dvh-7rem))] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.5)] sm:w-[400px]"
          >
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-3">
              <img src={profileImage} alt="" className="h-9 w-9 rounded-full object-cover object-top ring-1 ring-border" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold leading-tight">{a.title}</p>
                <p className="truncate text-xs text-muted-foreground">{a.subtitle}</p>
              </div>
              <button
                onClick={reset}
                aria-label={a.clear}
                title={a.clear}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={close}
                aria-label={a.close}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={listRef} className="min-h-[280px] flex-1 space-y-3 overflow-y-auto px-4 py-4" role="log" aria-live="polite">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className={`flex flex-col ${m.from === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    dir="auto"
                    lang={m.lang}
                    className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-ee-md bg-primary text-primary-foreground"
                        : "rounded-es-md border border-border bg-secondary/60"
                    }`}
                  >
                    <Rich text={m.text} />
                  </div>
                  {m.contact && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a
                        href={`mailto:${contact.email}`}
                        target="_top"
                        className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
                      >
                        <Mail className="h-3.5 w-3.5" /> {a.email}
                      </a>
                      <a
                        href={`https://wa.me/${contact.phone.replace("+", "")}`}
                        target="_top"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full border border-primary px-3 py-1.5 text-xs font-medium text-primary"
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> {a.whatsapp}
                      </a>
                      <button
                        onClick={goToForm}
                        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/50"
                      >
                        <MessageSquareText className="h-3.5 w-3.5" /> {a.contactForm}
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start" aria-label={a.typing}>
                  <div className="flex items-center gap-1 rounded-2xl rounded-es-md border border-border bg-secondary/60 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!typing && last?.from === "bot" && last.chips && last.chips.length > 0 && (
              <div className="flex flex-wrap gap-2 px-4 pb-3">
                {last.chips.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => send(c.label, c.id)}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs transition-colors hover:border-primary hover:text-primary"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border px-3 py-3"
            >
              <input
                ref={inputRef}
                dir="auto"
                value={input}
                maxLength={300}
                onChange={(e) => setInput(e.target.value)}
                placeholder={a.placeholder}
                aria-label={a.placeholder}
                className="min-w-0 flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                aria-label={a.send}
                disabled={!input.trim() || typing}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40 rtl:-scale-x-100"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={launcherRef}
        onClick={() => setOpen((v) => !v)}
        aria-label={a.open}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default PortfolioAssistant;
