import type { TargetAndTransition, Transition, Variants } from "framer-motion";

/**
 * Shared motion language for the portfolio.
 * Principles: short distances, spring physics for interaction, soft ease-out for
 * entrances, no looping/pulsing, nothing that delays content by more than ~1s.
 */

/* -------------------------------------------------------------------------- */
/*  Tokens                                                                    */
/* -------------------------------------------------------------------------- */

/** Soft ease-out used for entrance (reveal) animations. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Gentle spring: card elevation, layout-ish movement. */
export const SPRING_SOFT: Transition = { type: "spring", stiffness: 280, damping: 28, mass: 0.8 };

/** Snappy spring: tactile hover/tap feedback on small elements. */
export const SPRING_SNAPPY: Transition = { type: "spring", stiffness: 420, damping: 30 };

/** Delay between siblings in lists and grids (seconds). */
export const STAGGER = 0.08;

/** Vertical distance for reveal-on-scroll (px). */
export const REVEAL_OFFSET = 15;

/** Trigger once, slightly before the element is fully inside the viewport. */
export const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -40px 0px" } as const;

/* -------------------------------------------------------------------------- */
/*  Scroll reveal                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Fade in + soft slide up. Pass `custom={delaySeconds}` to offset an item
 * (e.g. `(index % 2) * STAGGER` for a two-column grid).
 */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT, delay },
  }),
};

/** Parent variant that staggers children carrying their own `variants`. */
export const staggerGroup = (stagger: number = STAGGER, delayChildren: number = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/* -------------------------------------------------------------------------- */
/*  Hero entrance: avatar -> headline -> bio -> actions                       */
/* -------------------------------------------------------------------------- */

/** Root of the hero: sequences the avatar first, then the text column. */
export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};

/** Text column: staggers headline, role, bio, buttons, socials. */
export const heroGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

/* -------------------------------------------------------------------------- */
/*  Badges                                                                    */
/* -------------------------------------------------------------------------- */

/** Entrance for a pill inside a `staggerGroup` parent. */
export const badgeItem: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE_OUT } },
};

/* -------------------------------------------------------------------------- */
/*  Gesture presets (spread onto a motion element)                            */
/* -------------------------------------------------------------------------- */

/** Subtle lift for cards. */
export const cardHover: { whileHover: TargetAndTransition } = {
  whileHover: { y: -4, transition: SPRING_SOFT },
};

/** Tactile feedback for QA tech pills. */
export const badgeGestures: { whileHover: TargetAndTransition; whileTap: TargetAndTransition } = {
  whileHover: { scale: 1.03, transition: SPRING_SNAPPY },
  whileTap: { scale: 0.97, transition: SPRING_SNAPPY },
};

/** Gentle press feedback for buttons and icon links. */
export const pressable: { whileHover: TargetAndTransition; whileTap: TargetAndTransition } = {
  whileHover: { scale: 1.03, transition: SPRING_SNAPPY },
  whileTap: { scale: 0.97, transition: SPRING_SNAPPY },
};
