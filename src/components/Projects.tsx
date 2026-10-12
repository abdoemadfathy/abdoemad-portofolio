import { useState } from "react";
import Section from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import ProjectRow from "@/components/projects/ProjectRow";
import { usePortfolio } from "@/i18n/LanguageProvider";

const Projects = () => {
  const { t, projects } = usePortfolio();
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <Section
      id="projects"
      title={t.projects.title}
      description={t.projects.description}
    >
      <div className="border-t border-border">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <ProjectRow
              project={project}
              open={openId === project.id}
              onToggle={() => setOpenId((cur) => (cur === project.id ? null : project.id))}
            />
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        {t.projects.note}
      </p>
    </Section>
  );
};

export default Projects;
