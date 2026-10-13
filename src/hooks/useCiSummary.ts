import { useEffect, useState } from "react";
import { CI_SUMMARY_URL } from "@/data/portfolioData";

export interface CiSummary {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  finishedAt: string;
  runUrl?: string;
}

export type CiState =
  | { status: "loading" }
  | { status: "ready"; summary: CiSummary }
  | { status: "unavailable" };

const TIMEOUT_MS = 6000;
let cached: Promise<CiSummary | null> | null = null;

const isCount = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v) && v >= 0;

/** Reads the summary the repo's workflow publishes. Anything unexpected counts as unavailable, never as a made-up number. */
const load = (): Promise<CiSummary | null> => {
  cached ??= (async () => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(CI_SUMMARY_URL, { signal: controller.signal, cache: "no-cache" });
      if (!res.ok) return null;
      const d = await res.json();
      if (d?.schemaVersion !== 1 || !isCount(d.total) || !isCount(d.passed) || !isCount(d.failed) || !isCount(d.skipped)) {
        return null;
      }
      if (typeof d.finishedAt !== "string" || Number.isNaN(Date.parse(d.finishedAt))) return null;
      const runUrl = typeof d.runUrl === "string" && d.runUrl.startsWith("https://github.com/") ? d.runUrl : undefined;
      return { total: d.total, passed: d.passed, failed: d.failed, skipped: d.skipped, finishedAt: d.finishedAt, runUrl };
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  })();
  return cached;
};

export const useCiSummary = (): CiState => {
  const [state, setState] = useState<CiState>({ status: "loading" });
  useEffect(() => {
    let alive = true;
    load().then((summary) => {
      if (alive) setState(summary ? { status: "ready", summary } : { status: "unavailable" });
    });
    return () => {
      alive = false;
    };
  }, []);
  return state;
};
