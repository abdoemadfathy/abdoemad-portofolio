import { useState } from "react";
import Section from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import ProjectRow from "@/components/projects/ProjectRow";
import { projects } from "@/data/portfolioData";

const Projects = () => {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <Section
      id="projects"
      title="Selected projects"
      description="Testing work across e-commerce, banking, API, and mobile. Open a project to see what I tested and how."
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
        More projects are on the way, including test automation and AI-assisted testing.
      </p>
    </Section>
  );
};

export default Projects;
