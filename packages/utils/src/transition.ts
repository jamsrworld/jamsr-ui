import { type Variants } from "motion/react";

export const TRANSITION_VARIANTS = {
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
  },
} satisfies Record<string, Variants>;
