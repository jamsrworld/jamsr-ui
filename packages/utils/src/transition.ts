import { type Variants } from "framer-motion";

export const TRANSITION_VARIANTS = {
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          bounce: 0,
          duration: 0.3,
        },
        opacity: {
          easings: "ease",
          duration: 0.4,
        },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        easings: "ease",
        duration: 0.3,
      },
    },
  },
} satisfies Record<string, Variants>;
