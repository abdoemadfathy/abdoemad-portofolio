import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Loader2, RotateCcw } from "lucide-react";
import { usePortfolio } from "@/i18n/LanguageProvider";
import { EASE_OUT } from "@/lib/motion";

const STEP_MS = 520;
const START_DELAY_MS = 1300;


/**
 * The hero's signature moment: a test suite that runs once on load and passes
 * line by line. The person can run it again. Reduced motion shows the result.
 */
const TestRunPanel = () => {
  const { testRun, t } = usePortfolio();
  const total = testRun.reduce((sum, l) => sum + l.ms, 0);
  const reduced = useReducedMotion();
  const [step, setStep] = useState(reduced ? testRun.length : 0);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    if (reduced) {
      setStep(testRun.length);
      return;
    }
    setStep(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    testRun.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), (runId === 0 ? START_DELAY_MS : 250) + (i + 1) * STEP_MS));
    });
    return () => timers.forEach(clearTimeout);
  }, [runId, reduced, testRun]);

  const done = step >= testRun.length;
  const rerun = useCallback(() => setRunId((n) => n + 1), []);

  return (
    <div dir="ltr" className="ltr-island overflow-hidden rounded-2xl border border-border bg-card/70 shadow-[0_30px_80px_-40px_hsl(var(--primary)/0.45)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">regression-suite</span>
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-xs transition-colors ${
            done ? "border-pass/40 text-pass" : "border-border text-muted-foreground"
          }`}
        >
          {done ? "Passed" : "Running"}
        </span>
      </div>

      <ul className="divide-y divide-border/60 font-mono text-[13px]" aria-live="polite">
        {testRun.map((line, i) => {
          const state = step > i ? "pass" : step === i ? "run" : "wait";
          return (
            <li key={line.label} className="flex items-center gap-3 px-5 py-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                {state === "pass" && (
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-pass/15 text-pass"
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </motion.span>
                )}
                {state === "run" && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
                {state === "wait" && <span className="h-1.5 w-1.5 rounded-full bg-border" />}
              </span>
              <span className={`flex-1 truncate ${state === "wait" ? "text-muted-foreground/60" : "text-foreground"}`}>
                {line.label}
              </span>
              <span className="tabular-nums text-muted-foreground">{state === "pass" ? `${line.ms} ms` : ""}</span>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-border px-5 py-4">
        <div className="h-1 overflow-hidden rounded-full bg-border/60">
          <motion.div
            className="h-full rounded-full bg-pass"
            animate={{ width: `${(step / testRun.length) * 100}%` }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={done ? "done" : "going"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {done
                ? t.hero.runSummary(testRun.length, (total / 1000).toFixed(1))
                : t.hero.runProgress(step, testRun.length)}
            </motion.span>
          </AnimatePresence>
          <button
            onClick={rerun}
            disabled={!done}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            <RotateCcw className="h-3 w-3" />
            Run again
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestRunPanel;
