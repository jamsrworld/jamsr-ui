import { type Variant } from "framer-motion";
import { type DrawerVariants } from "./styles";

type Anchor = NonNullable<DrawerVariants["anchor"]>;

export const motionDrawerVariants: {
  initial: Variant;
  animate: Variant;
  exit: Variant;
} = {
  initial(custom: Anchor) {
    switch (custom) {
      case "left":
        return {
          x: "-100%",
        };
      case "right":
        return {
          x: "100%",
        };
      case "top":
        return {
          y: "-100%",
        };
      case "bottom":
        return {
          y: "100%",
        };
      default:
        return {};
    }
  },
  animate(custom: Anchor) {
    switch (custom) {
      case "left":
        return {
          x: 0,
        };
      case "right":
        return {
          x: 0,
        };
      case "top":
        return {
          y: 0,
        };
      case "bottom":
        return {
          y: 0,
        };
      default:
        return {};
    }
  },
  exit(custom: Anchor) {
    switch (custom) {
      case "left":
        return {
          x: "-100%",
        };
      case "right":
        return {
          x: "100%",
        };
      case "top":
        return {
          y: "-100%",
        };
      case "bottom":
        return {
          y: "100%",
        };
      default:
        return {};
    }
  },
};
