import { Suspense, lazy, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import { usePortfolio, type ResolvedMedia } from "@/i18n/LanguageProvider";
import { SPRING_SOFT, staggerGroup, revealUp, VIEWPORT } from "@/lib/motion";

const Lightbox = lazy(() => import("@/components/gallery/Lightbox"));

const group = staggerGroup(0.08);

/** Thumbnail grid. Opening a thumbnail loads the viewer on demand. */
const MediaGallery = ({ items, className = "" }: { items: ResolvedMedia[]; className?: string }) => {
  const { t } = usePortfolio();
  const [current, setCurrent] = useState<number | null>(null);
  if (!items.length) return null;

  const cols =
    items.length === 1
      ? "grid-cols-1 sm:max-w-md"
      : items.length === 2 || items.length === 4
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <motion.ul
        variants={group}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={`grid gap-3 ${cols} ${className}`}
      >
        {items.map((m, i) => (
          <motion.li key={m.id} variants={revealUp} className="min-w-0">
            <motion.button
              type="button"
              onClick={() => setCurrent(i)}
              whileHover={{ y: -4, transition: SPRING_SOFT }}
              aria-label={`${t.lightbox.zoomIn}: ${m.caption}`}
              className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-start transition-colors hover:border-primary/50"
            >
              <img
                src={m.thumb}
                alt={m.alt}
                loading="lazy"
                decoding="async"
                width={640}
                height={Math.round((640 * m.height) / m.width)}
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute end-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="block flex-1 border-t border-border px-3 py-2 text-xs leading-snug text-muted-foreground">
                {m.caption}
              </span>
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>

      <Suspense fallback={null}>
        <AnimatePresence>
          {current !== null && (
            <Lightbox items={items} index={current} onIndex={setCurrent} onClose={() => setCurrent(null)} />
          )}
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default MediaGallery;
