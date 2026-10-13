import { ArrowUpRight } from "lucide-react";
import { CI_RUNS_URL } from "@/data/portfolioData";
import { useCiSummary } from "@/hooks/useCiSummary";
import { usePortfolio } from "@/i18n/LanguageProvider";

type Tone = "pass" | "fail" | "idle";

const TONE: Record<Tone, string> = {
  pass: "border-pass/40 text-pass",
  fail: "border-destructive/40 text-destructive",
  idle: "border-border text-muted-foreground",
};
const DOT: Record<Tone, string> = { pass: "bg-pass", fail: "bg-destructive", idle: "bg-border" };

/**
 * Live status of the Swag Labs suite, read from the file its GitHub Actions workflow publishes.
 * If that file can't be read the badge says so rather than showing a number.
 */
const useBadge = () => {
  const { t, lang } = usePortfolio();
  const state = useCiSummary();
  if (state.status === "loading") return { tone: "idle" as Tone, text: t.ci.loading, detail: "", url: CI_RUNS_URL };
  if (state.status === "unavailable") return { tone: "idle" as Tone, text: t.ci.unavailable, detail: "", url: CI_RUNS_URL };
  const s = state.summary;
  const failing = s.failed > 0;
  const date = new Intl.DateTimeFormat(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { dateStyle: "medium" }).format(
    new Date(s.finishedAt),
  );
  return {
    tone: (failing ? "fail" : "pass") as Tone,
    text: failing ? t.ci.failed(s.failed, s.total) : t.ci.passed(s.passed, s.total),
    detail: t.ci.ranAt(date),
    url: s.runUrl ?? CI_RUNS_URL,
  };
};

/** Small pill for the project row header. */
export const CiPill = () => {
  const b = useBadge();
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs ${TONE[b.tone]}`}>
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${DOT[b.tone]}`} />
      <span className="tabular-nums">{b.text}</span>
    </span>
  );
};

/** Fuller card for the open project. */
export const CiCard = () => {
  const { t } = usePortfolio();
  const b = useBadge();
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-xl border border-border bg-card/60 p-4">
      <div className="min-w-0">
        <p className="text-sm font-medium">{t.ci.label}</p>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span className={`inline-flex items-center gap-1.5 font-medium ${b.tone === "idle" ? "" : TONE[b.tone].split(" ")[1]}`}>
            <span aria-hidden className={`h-2 w-2 rounded-full ${DOT[b.tone]}`} />
            <span className="tabular-nums" role="status">{b.text}</span>
          </span>
          {b.detail && <span>{b.detail}</span>}
        </p>
        <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">{t.ci.note}</p>
      </div>
      <a
        href={b.url}
        target="_top"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
      >
        {t.ci.viewRuns}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
};
