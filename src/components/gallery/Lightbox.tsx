import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { usePortfolio, type ResolvedMedia } from "@/i18n/LanguageProvider";
import { EASE_OUT } from "@/lib/motion";

interface LightboxProps {
  items: ResolvedMedia[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}

const FOCUSABLE = 'button, [href], [tabindex]:not([tabindex="-1"])';

/**
 * Full-screen viewer for screenshots. Keyboard: Esc closes, arrows move (mirrored in RTL),
 * Tab is trapped inside, focus returns to the thumbnail that opened it, page scroll is locked.
 */
const Lightbox = ({ items, index, onIndex, onClose }: LightboxProps) => {
  const { t } = usePortfolio();
  const rtl = t.dir === "rtl";
  const root = useRef<HTMLDivElement>(null);
  const opener = useRef<Element | null>(null);
  const item = items[index];

  const step = useCallback(
    (d: 1 | -1) => onIndex((index + d + items.length) % items.length),
    [index, items.length, onIndex],
  );

  useEffect(() => {
    opener.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    root.current?.querySelector<HTMLElement>("[data-close]")?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      (opener.current as HTMLElement | null)?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key === "ArrowRight") return step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") return step(rtl ? 1 : -1);
      if (e.key === "Tab" && root.current) {
        const nodes = Array.from(root.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, step, rtl]);

  const Prev = rtl ? ChevronRight : ChevronLeft;
  const Next = rtl ? ChevronLeft : ChevronRight;
  const multiple = items.length > 1;

  return createPortal(
    <motion.div
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      dir={t.dir}
      lang={t.htmlLang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] flex flex-col bg-background/90 backdrop-blur-2xl"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6" onClick={(e) => e.stopPropagation()}>
        <p className="min-w-0 truncate text-sm text-muted-foreground" aria-live="polite">
          {t.lightbox.counter(index + 1, items.length)}
        </p>
        <button
          data-close
          onClick={onClose}
          aria-label={t.lightbox.close}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 transition-colors hover:border-primary/50"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16">
        {multiple && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label={t.lightbox.previous}
            className="absolute start-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur transition-colors hover:border-primary/50 sm:start-5"
          >
            <Prev className="h-5 w-5" />
          </button>
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg border border-border bg-card object-contain shadow-2xl"
          />
        </AnimatePresence>
        {multiple && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label={t.lightbox.next}
            className="absolute end-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur transition-colors hover:border-primary/50 sm:end-5"
          >
            <Next className="h-5 w-5" />
          </button>
        )}
      </div>

      <p
        className="mx-auto max-w-3xl px-6 py-4 text-center text-sm leading-relaxed text-foreground/90"
        onClick={(e) => e.stopPropagation()}
      >
        {item.caption}
      </p>
    </motion.div>,
    document.body,
  );
};

export default Lightbox;
