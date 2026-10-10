import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { VIEWPORT, revealUp, staggerGroup, STAGGER } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Extra delay in seconds. */
  delay?: number;
}

/** Fade + soft slide-up once when scrolled into view. */
export const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    variants={revealUp}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT}
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul";
}

/** Container that reveals its <StaggerItem/> children one after another (0.08s). */
export const Stagger = ({ children, className, stagger = STAGGER, as = "div" }: StaggerProps) => {
  const Tag = as === "ul" ? motion.ul : motion.div;
  return (
    <Tag
      variants={staggerGroup(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </Tag>
  );
};

export const StaggerItem = ({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) => {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag variants={revealUp} className={className}>
      {children}
    </Tag>
  );
};
