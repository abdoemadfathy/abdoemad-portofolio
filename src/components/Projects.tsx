import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import ProjectRow from "@/components/projects/ProjectRow";
import { usePortfolio } from "@/i18n/LanguageProvider";
import { EASE_OUT } from "@/lib/motion";
import { track } from "@/lib/analytics";

const Projects = () => {
  const { t, projects } = usePortfolio();
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);
  const [showAll, setShowAll] = useState(false);

  const main = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  const row = (project: (typeof projects)[number]) => (
    <ProjectRow
      key={project.id}
      project={project}
      open={openId === project.id}
      onToggle={() => {
        if (openId !== project.id) track("project_open", project.id);
        setOpenId((cur) => (cur === project.id ? null : project.id));
      }}
    />
  );

  return (
    <Section id="projects" title={t.projects.title} description={t.projects.description}>
      <div className="border-t border-border">
        {main.map((project) => (
          <Reveal key={project.id}>{row(project)}</Reveal>
        ))}
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              id="more-projects"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              {more.map(row)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {more.length > 0 && (
        <button
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls="more-projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary/50 hover:text-primary"
        >
          {showAll ? t.projects.showLess : t.projects.showMore(more.length)}
          <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
        </button>
      )}
      <p className="mt-8 text-sm text-muted-foreground">{t.projects.note}</p>
    </Section>
  );
};

export default Projects;
