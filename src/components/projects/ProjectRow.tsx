import { useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Images, Plus } from "lucide-react";
import MediaGallery from "@/components/gallery/MediaGallery";
import ResultsPanel from "@/components/gallery/ResultsPanel";
import TechBadge from "@/components/TechBadge";
import { EASE_OUT, SPRING_SNAPPY, staggerGroup } from "@/lib/motion";
import { usePortfolio, type ResolvedProject } from "@/i18n/LanguageProvider";

const chips = staggerGroup(0.035, 0.12);

interface ProjectRowProps {
  project: ResolvedProject;
  open: boolean;
  onToggle: () => void;
}

/**
 * One project. The summary is always visible; pressing the row opens the
 * details. A soft light follows the pointer across the row.
 */
const ProjectRow = ({ project, open, onToggle }: ProjectRowProps) => {
  const ref = useRef<HTMLElement>(null);
  const panelId = useId();
  const { t } = usePortfolio();
  const p = t.projects;
  const isApi = project.category === "api";

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className="group relative border-b border-border hover:[background:radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),hsl(var(--primary)/0.07),transparent_60%)_no-repeat] [background-size:100%_100%]"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${project.title}. ${open ? p.collapse : p.expand}`}
        className="flex w-full items-start gap-6 py-7 text-start"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span>{p.categories[project.category]}</span>
            {project.period && (
              <>
                <span aria-hidden className="h-3 w-px bg-border" />
                <span>{project.period}</span>
              </>
            )}
            {project.media.length > 0 && (
              <>
                <span aria-hidden className="h-3 w-px bg-border" />
                <span className="inline-flex items-center gap-1.5" title={p.screenshots}>
                  <Images className="h-3.5 w-3.5" aria-hidden />
                  <span className="sr-only">{p.screenshots}: </span>
                  <span className="tabular-nums">{project.media.length}</span>
                </span>
              </>
            )}
          </div>
          <h3 className="font-display text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={SPRING_SNAPPY}
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="space-y-8 pb-8">
            <div className="grid gap-8 md:grid-cols-2">
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pass" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-5">
                <div>
                  <h4 className="mb-2 text-sm font-medium">{p.technologies}</h4>
                  <motion.div variants={chips} initial="hidden" animate="visible" className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} tone="tech" />
                    ))}
                  </motion.div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-medium">{p.skillsDeveloped}</h4>
                  <motion.div variants={chips} initial="hidden" animate="visible" className="flex flex-wrap gap-1.5">
                    {project.skills.map((s) => (
                      <TechBadge key={s} label={s} tone="skill" />
                    ))}
                  </motion.div>
                </div>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_top"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                  >
                    {isApi ? p.viewSuite : p.viewCode}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            {project.results && (
              <div>
                <h4 className="mb-3 text-sm font-medium">{p.results}</h4>
                <ResultsPanel groups={project.results} />
              </div>
            )}
            {project.media.length > 0 && (
              <div>
                <h4 className="mb-3 text-sm font-medium">{p.screenshots}</h4>
                <MediaGallery items={project.media} />
              </div>
            )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ProjectRow;
