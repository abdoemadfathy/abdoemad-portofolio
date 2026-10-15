import type { ReactNode } from "react";
import { usePortfolio } from "@/i18n/LanguageProvider";

export const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="grid gap-1 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
    <dd className="min-w-0 text-sm leading-relaxed">{children}</dd>
  </div>
);

/** The actionable sample report, shared by the comparison and the find-the-bug exercise. */
export const StrongReport = () => {
  const { t } = usePortfolio();
  const p = t.process;
  return (
    <dl className="divide-y divide-border/60">
      <Field label={p.fields.title}>
        <span className="font-medium">{p.strong.title}</span>
      </Field>
      <Field label={p.fields.environment}>{p.strong.environment}</Field>
      <Field label={p.fields.severity}>{p.strong.severity}</Field>
      <Field label={p.fields.priority}>{p.strong.priority}</Field>
      <Field label={p.fields.steps}>
        <ol className="list-decimal space-y-1 ps-5">
          {p.strong.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Field>
      <Field label={p.fields.expected}>{p.strong.expected}</Field>
      <Field label={p.fields.actual}>{p.strong.actual}</Field>
      <Field label={p.fields.evidence}>{p.strong.evidence}</Field>
      <Field label={p.fields.impact}>{p.strong.impact}</Field>
    </dl>
  );
};
