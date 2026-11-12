import type { Variants } from "motion/react";

// --- About Animation ---
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.12 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const staggerNormal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};


// --- Home Page Animation ---
export const staggerIntro: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeUpMedium: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const fadeInDelayed: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.2 } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, scale: 0.92, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.25, ease: "easeOut" }
  },
};

// Skills Staggering
export const staggerSkills: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.65 } },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Continuous Animations
export const floatAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  },
};

export const pulseAnimation: Variants = {
  animate: {
    opacity: [1, 0.35, 1],
    transition: { duration: 1.4, repeat: Infinity }
  },
};

export const floatRotateRight: Variants = {
  animate: {
    rotate: [0, 8, 0],
    y: [0, 5, 0],
    transition: { duration: 5, repeat: Infinity }
  },
};

export const floatRotateLeft: Variants = {
  animate: {
    rotate: [0, -8, 0],
    y: [0, -5, 0],
    transition: { duration: 6, repeat: Infinity }
  },
};

// --- Contact Page Animation ---
export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.15 }
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.25 }
  },
};

// --- Proof of Work Page Animation ---
export const fadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 }
  },
};

export const projectCardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: index * 0.06 },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25 }
  },
};
