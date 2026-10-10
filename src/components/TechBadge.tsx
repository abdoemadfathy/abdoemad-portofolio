import { motion } from "framer-motion";
import { badgeGestures, badgeItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Tone = "tech" | "skill";

const TONES: Record<Tone, string> = {
  tech: "border-primary/30 bg-primary/10 text-primary",
  skill: "border-border text-muted-foreground hover:text-foreground",
};

interface TechBadgeProps {
  label: string;
  tone?: Tone;
}

/** Outlined chip with a tactile hover/tap spring. Entrance comes from a parent stagger. */
const TechBadge = ({ label, tone = "skill" }: TechBadgeProps) => (
  <motion.span
    variants={badgeItem}
    {...badgeGestures}
    className={cn(
      "inline-block cursor-default select-none rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
      TONES[tone],
    )}
  >
    {label}
  </motion.span>
);

export default TechBadge;
