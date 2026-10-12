import { motion } from "framer-motion";
import { usePortfolio } from "@/i18n/LanguageProvider";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";
import type { ResultGroup, ResultKey } from "@/types/portfolio";

const COLOR: Record<ResultKey, string> = {
  total: "bg-foreground",
  passed: "bg-pass",
  failed: "bg-destructive",
  skipped: "bg-amber-500",
  critical: "bg-destructive",
  high: "bg-orange-500",
  medium: "bg-amber-500",
  low: "bg-primary/70",
};

/**
 * Real counts taken from the project's own reports. Each group is a single stacked bar;
 * the legend repeats every value as text so colour is never the only signal.
 */
const ResultsPanel = ({ groups }: { groups: ResultGroup[] }) => {
  const { t } = usePortfolio();
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((g) => {
        const total = g.items.reduce((s, i) => s + i.value, 0);
        return (
          <figure key={g.kind} className="min-w-0 rounded-xl border border-border bg-card/60 p-4">
            <figcaption className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium">{t.projects.resultTitles[g.kind]}</span>
              <span className="font-display text-2xl font-semibold tabular-nums">{total}</span>
            </figcaption>
            <div className="mt-3 flex h-2.5 w-full gap-0.5 overflow-hidden rounded-full bg-border/50" role="presentation">
              {g.items
                .filter((i) => i.value > 0)
                .map((i, idx) => (
                  <motion.span
                    key={i.key}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 + idx * 0.08 }}
                    style={{ flexGrow: i.value, flexBasis: 0, transformOrigin: t.dir === "rtl" ? "right" : "left" }}
                    className={`h-full ${COLOR[i.key]}`}
                  />
                ))}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              {g.items.map((i) => (
                <li key={i.key} className="flex items-center gap-1.5">
                  <span aria-hidden className={`h-2 w-2 rounded-sm ${COLOR[i.key]}`} />
                  {t.projects.resultLabels[i.key]}
                  <span className="font-medium tabular-nums text-foreground">{i.value}</span>
                </li>
              ))}
            </ul>
          </figure>
        );
      })}
    </div>
  );
};

export default ResultsPanel;
