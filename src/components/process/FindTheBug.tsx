import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bug, Check, RotateCcw } from "lucide-react";
import { StrongReport } from "@/components/process/ReportView";
import { usePortfolio } from "@/i18n/LanguageProvider";
import { EASE_OUT } from "@/lib/motion";

type Outcome = "idle" | "error" | "ok" | "buggy" | "found";

/**
 * A tiny booking form with one deliberate defect: an empty Email is accepted. Name and Phone are validated,
 * so the gap is only visible to someone who tries it. Nothing typed here leaves the page.
 */
const FindTheBug = () => {
  const { t } = usePortfolio();
  const g = t.process.game;
  const uid = useId();
  const [values, setValues] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [outcome, setOutcome] = useState<Outcome>("idle");

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (next = values) => {
    const errs: typeof errors = {};
    if (!next.name.trim()) errs.name = g.nameError;
    if (!next.phone.trim()) errs.phone = g.phoneError;
    setErrors(errs);
    if (Object.keys(errs).length) return setOutcome("error");
    // The deliberate defect: Email is never checked.
    setOutcome(next.email.trim() ? "ok" : "buggy");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit();
  };

  const reveal = () => {
    const demo = { name: g.demoName, phone: "01000000000", email: "" };
    setValues(demo);
    submit(demo);
  };

  const reset = () => {
    setValues({ name: "", phone: "", email: "" });
    setErrors({});
    setOutcome("idle");
  };

  const input =
    "mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

  return (
    <div>
      <h3 className="font-display text-2xl font-semibold tracking-tight">{g.title}</h3>
      <p className="mt-2 max-w-xl text-muted-foreground">{g.intro}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-border bg-card/60 p-5">
          {(
            [
              ["name", g.nameLabel, "text", "name"],
              ["phone", g.phoneLabel, "tel", "tel"],
              ["email", g.emailLabel, "email", "email"],
            ] as const
          ).map(([key, label, type, auto]) => (
            <div key={key}>
              <label htmlFor={`${uid}-${key}`} className="text-sm font-medium">
                {label}
              </label>
              <input
                id={`${uid}-${key}`}
                type={type}
                autoComplete="off"
                data-form-type="other"
                name={`${auto}-demo`}
                value={values[key]}
                onChange={set(key)}
                aria-invalid={key !== "email" && !!errors[key as "name" | "phone"]}
                aria-describedby={key !== "email" && errors[key as "name" | "phone"] ? `${uid}-${key}-err` : undefined}
                dir={key === "name" ? undefined : "ltr"}
                className={input}
              />
              {key !== "email" && errors[key as "name" | "phone"] && (
                <p id={`${uid}-${key}-err`} className="mt-1 text-xs text-destructive">
                  {errors[key as "name" | "phone"]}
                </p>
              )}
            </div>
          ))}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="submit"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {g.submit}
            </button>
            {outcome !== "idle" && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                {g.reset}
              </button>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{g.privacy}</p>
        </form>

        <div className="min-w-0 space-y-4" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={outcome}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
              className="space-y-4"
            >
              {outcome === "idle" && <p className="text-sm text-muted-foreground">{g.idleHint}</p>}
              {outcome === "error" && <p className="text-sm text-muted-foreground">{g.errorHint}</p>}
              {outcome === "ok" && (
                <>
                  <p className="flex items-center gap-2 font-medium text-pass">
                    <Check className="h-4 w-4" aria-hidden /> {g.success}
                  </p>
                  <p className="text-sm text-muted-foreground">{g.okHint}</p>
                </>
              )}
              {outcome === "buggy" && (
                <>
                  <p className="flex items-center gap-2 font-medium text-pass">
                    <Check className="h-4 w-4" aria-hidden /> {g.success}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOutcome("found")}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
                  >
                    <Bug className="h-4 w-4" aria-hidden />
                    {g.report}
                  </button>
                </>
              )}
              {outcome === "found" && <p className="font-medium">{g.found}</p>}
            </motion.div>
          </AnimatePresence>
          {outcome !== "found" && outcome !== "buggy" && (
            <button
              type="button"
              onClick={reveal}
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {g.showMe}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {outcome === "found" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="mt-6 rounded-2xl border border-border bg-card/60 px-5"
          >
            <StrongReport />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FindTheBug;
