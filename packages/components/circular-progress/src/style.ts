import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const circularProgress = tv({
  slots: {
    track: "relative",
    svg: "size-full animate-spin fill-current",
    value:
      "absolute left-0 top-0 flex size-full items-center justify-center text-xs",
  },
  variants: {
    color: {
      current: {
        svg: "text-current",
      },
      default: {
        svg: "text-default",
      },
      primary: {
        svg: "text-primary",
      },
      danger: {
        svg: "text-danger",
      },
      success: {
        svg: "text-success",
      },
      secondary: {
        svg: "text-secondary",
      },
      warning: {
        svg: "text-warning",
      },
    },
    size: {
      xs: {
        track: "size-3",
      },
      sm: {
        track: "size-4",
      },
      md: {
        track: "size-6",
      },
      lg: {
        track: "size-8",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type CircularProgressVariants = VariantProps<typeof circularProgress>;
export type CircularProgressSlots = keyof ReturnType<typeof circularProgress>;
