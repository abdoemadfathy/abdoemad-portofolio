import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bug, Check, X } from "lucide-react";
import Section from "@/components/common/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { usePortfolio } from "@/i18n/LanguageProvider";
import { EASE_OUT } from "@/lib/motion";

type Mode = "weak" | "strong";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid gap-1 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
    <dd className="min-w-0 text-sm leading-relaxed">{children}</dd>
  </div>
);

const HowIWork = () => {
  const { t } = usePortfolio();
  const p = t.process;
  const [mode, setMode] = useState<Mode>("strong");
  const panelId = useId();

  return (
    <Section id="process" title={p.title} description={p.description}>
      <Stagger as="ul" className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {p.steps.map((step, i) => (
          <StaggerItem
            as="li"
            key={step.title}
            className={`bg-background p-5 ${i === p.steps.length - 1 && p.steps.length % 2 === 1 ? "sm:col-span-2" : ""}`}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg font-semibold tracking-tight">{step.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-14">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{p.reportTitle}</h3>
        <p className="mt-2 text-muted-foreground">{p.reportIntro}</p>

        <div role="group" aria-label={p.reportTitle} className="mt-6 inline-flex rounded-full border border-border p-1 text-sm">
          {(["weak", "strong"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              aria-controls={panelId}
              className="relative rounded-full px-4 py-1.5 transition-colors"
            >
              {mode === m && (
                <motion.span
                  layoutId="report-mode"
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="absolute inset-0 rounded-full bg-foreground"
                />
              )}
              <span className={`relative inline-flex items-center gap-1.5 ${mode === m ? "text-background" : "text-muted-foreground"}`}>
                {m === "weak" ? <X className="h-3.5 w-3.5" aria-hidden /> : <Check className="h-3.5 w-3.5" aria-hidden />}
                {m === "weak" ? p.weakLabel : p.strongLabel}
              </span>
            </button>
          ))}
        </div>

        <div id={panelId} className="mt-5 overflow-hidden rounded-2xl border border-border bg-card/60" aria-live="polite">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3 text-xs text-muted-foreground">
            <Bug className="h-3.5 w-3.5" aria-hidden />
            <span>{p.sampleNote}</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
              className="px-5"
            >
              {mode === "weak" ? (
                <dl className="divide-y divide-border/60">
                  <Field label={p.fields.title}>{p.weak.title}</Field>
                  <Field label={p.fields.actual}>{p.weak.body}</Field>
                  <div className="py-4 text-sm leading-relaxed text-destructive">{p.weak.missing}</div>
                </dl>
              ) : (
                <dl className="divide-y divide-border/60">
                  <Field label={p.fields.title}><span className="font-medium">{p.strong.title}</span></Field>
                  <Field label={p.fields.environment}>{p.strong.environment}</Field>
                  <Field label={p.fields.severity}>{p.strong.severity}</Field>
                  <Field label={p.fields.priority}>{p.strong.priority}</Field>
                  <Field label={p.fields.steps}>
                    <ol className="list-decimal space-y-1 ps-5">
                      {p.strong.steps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                  </Field>
                  <Field label={p.fields.expected}>{p.strong.expected}</Field>
                  <Field label={p.fields.actual}>{p.strong.actual}</Field>
                  <Field label={p.fields.evidence}>{p.strong.evidence}</Field>
                  <Field label={p.fields.impact}>{p.strong.impact}</Field>
                </dl>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
};

export default HowIWork;
