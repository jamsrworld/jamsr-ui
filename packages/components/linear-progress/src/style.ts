import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const linearProgressVariants = tv({
  slots: {
    track: "w-full overflow-hidden rounded-full",
    bar: "rounded-full",
  },
  variants: {
    color: {
      primary: {
        bar: "bg-primary",
        track: "bg-primary/10",
      },
      error: {
        bar: "bg-danger",
        track: "bg-danger/10",
      },
      success: {
        bar: "bg-success",
        track: "bg-success/10",
      },
      secondary: {
        bar: "bg-secondary",
        track: "bg-secondary/10",
      },
      warning: {
        bar: "bg-warning",
        track: "bg-warning/10",
      },
    },
    size: {
      sm: {
        track: "h-[3px]",
        bar: "h-[3px]",
      },
      md: {
        track: "h-1.5",
        bar: "h-1.5 ",
      },
      lg: {
        track: "h-2",
        bar: "h-2 ",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});

export type LinearProgressVariants = VariantProps<
  typeof linearProgressVariants
>;
