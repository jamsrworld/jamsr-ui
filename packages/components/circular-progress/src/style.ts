import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const circularProgress = tv({
  slots: {
    track: "stroke-default-300/50",
    progress: "stroke-success",
    svg: "",
    label: "fill-foreground text-xs",
  },
  variants: {
    isIntermediate: {
      true: {
        svg: "animate-spin",
      },
    },
    color: {
      current: {
        progress: "stroke-current",
      },
      default: {
        progress: "stroke-default-500",
      },
      primary: {
        progress: "stroke-primary",
      },
      danger: {
        progress: "stroke-danger",
      },
      success: {
        progress: "stroke-success",
      },
      secondary: {
        progress: "stroke-secondary",
      },
      warning: {
        progress: "stroke-warning",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export type CircularProgressVariants = VariantProps<typeof circularProgress>;
export type CircularProgressSlots = keyof ReturnType<typeof circularProgress>;
