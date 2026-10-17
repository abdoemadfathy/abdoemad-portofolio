/**
 * Thin wrapper over the Google tag already loaded in index.html (GA4).
 * It only sends event names and a short label: never anything a visitor types.
 * If the tag is blocked (ad blockers, privacy modes) every call is a silent no-op.
 */
type Gtag = (command: "event", name: string, params?: Record<string, string>) => void;

export const track = (name: string, label?: string): void => {
  try {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    gtag?.("event", name, label ? { label } : undefined);
  } catch {
    /* analytics must never break the page */
  }
};

/** Maps a clicked link to an event, or null when it isn't one we care about. */
export const classifyLink = (a: HTMLAnchorElement): { name: string; label: string } | null => {
  const href = a.getAttribute("href") ?? "";
  if (a.hasAttribute("download") || href.toLowerCase().endsWith(".pdf")) return { name: "cv_download", label: "cv" };
  if (a.hasAttribute("hreflang")) return { name: "language_switch", label: a.getAttribute("hreflang") ?? "" };
  if (href.startsWith("mailto:")) return { name: "contact_click", label: "email" };
  if (href.startsWith("tel:")) return { name: "contact_click", label: "phone" };
  if (href.includes("wa.me")) return { name: "contact_click", label: "whatsapp" };
  if (href.includes("linkedin.com")) return { name: "contact_click", label: "linkedin" };
  if (href.includes("mostaql.com")) return { name: "contact_click", label: "mostaql" };
  if (href.includes("github.com")) return { name: "github_click", label: href.includes("/actions") ? "ci_runs" : "repo" };
  return null;
};
