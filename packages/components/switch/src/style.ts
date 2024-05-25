import { focusVisibleClasses, tv } from "@jamsr-ui/utils";

// eslint-disable-next-line tailwindcss/no-custom-classname
export const switchVariants = tv({
  slots: {
    wrapper: [
      "flex cursor-pointer items-center rounded-full p-1",
      focusVisibleClasses,
    ],
    thumb: "size-8 rounded-full bg-white shadow-md",
  },
  variants: {
    color: {
      default: {
        wrapper: "bg-default",
      },
      primary: {
        wrapper: "bg-primary",
      },
      secondary: {
        wrapper: "bg-secondary",
      },
      success: {
        wrapper: "bg-success",
      },
      warning: {
        wrapper: "bg-warning",
      },
      error: {
        wrapper: "bg-error",
      },
    },
    size: {
      sm: {
        wrapper: "h-6 w-10",
        thumb: "size-4",
      },
      md: {
        wrapper: "mr-2 h-7 w-12",
        thumb: "size-5",
      },
      lg: {
        wrapper: "mr-2 h-8 w-14",
        thumb: "size-6",
      },
    },
    checked: {
      true: {
        wrapper: "justify-end",
      },
      false: {
        wrapper: "justify-start !bg-default-200",
      },
    },
    disabled: {
      true: {
        wrapper: "pointer-events-none cursor-not-allowed bg-background-neutral",
      },
    },
  },
  compoundSlots: [
    {
      checked: false,
      slots: ["wrapper"],
    },
  ],
  defaultVariants: {
    size: "md",
    color: "success",
  },
});
