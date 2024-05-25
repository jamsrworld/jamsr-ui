import { tv } from "@jamsr-ui/utils";

export const linearProgressVariants = tv({
  slots: {
    wrapper: "w-full overflow-hidden rounded-full bg-gray-200",
    bar: "rounded-full",
  },
  variants: {
    color: {
      primary: {
        bar: "bg-primary",
      },
      error: {
        bar: "bg-error",
      },
      success: {
        bar: "bg-success",
      },
      secondary: {
        bar: "bg-secondary",
      },
      warning: {
        bar: "bg-warning",
      },
    },
    size: {
      sm: {
        wrapper: "h-[3px]",
        bar: "h-[3px]",
      },
      md: {
        wrapper: "h-1.5",
        bar: "h-1.5 ",
      },
      lg: {
        wrapper: "h-2",
        bar: "h-2 ",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});
