import { type Variants } from "framer-motion";

export const TRANSITION_VARIANTS = {
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      filter: "blur(2px)",
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
  },
} satisfies Record<string, Variants>;
