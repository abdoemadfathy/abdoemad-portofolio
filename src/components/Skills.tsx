import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import { Stagger, StaggerItem } from "@/components/common/Reveal";
import { ICONS } from "@/components/common/icons";
import TechBadge from "@/components/TechBadge";
import { skillGroups } from "@/data/portfolioData";
import { VIEWPORT, staggerGroup } from "@/lib/motion";

const chips = staggerGroup(0.035, 0.1);

const Skills = () => (
  <Section id="skills" title="Skills" description="The methods, tools, and languages I use day to day.">
    <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {skillGroups.map(({ title, icon, skills }, g) => {
        const Icon = ICONS[icon];
        return (
          <StaggerItem key={title}>
            <div className="mb-4 flex items-center gap-2.5">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">{title}</h3>
            </div>
            <motion.div
              variants={chips}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex flex-wrap gap-2"
            >
              {skills.map((s) => (
                <TechBadge key={s} label={s} tone={g === 1 ? "tech" : "skill"} />
              ))}
            </motion.div>
          </StaggerItem>
        );
      })}
    </Stagger>
  </Section>
);

export default Skills;
