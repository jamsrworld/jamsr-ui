import { tv } from "@jamsr-ui/utils";

export const drawer = tv({
  slots: {
    backdrop:
      "z-backdrop !overflow-hidden backdrop-blur-sm",
    content:
      "absolute right-0 top-0 z-dialog h-screen  bg-background-secondary",
  },
  variants: {
    size: {
      xs: {
        content: "max-w-xs",
      },
      sm: {
        content: "max-w-sm",
      },
      md: {
        content: "max-w-md",
      },
      lg: {
        content: "max-w-lg",
      },
      xl: {
        content: "max-w-xl",
      },
      "2xl": {
        content: "max-w-2xl",
      },
      "3xl": {
        content: "max-w-3xl",
      },
      "4xl": {
        content: "max-w-4xl",
      },
      "5xl": {
        content: "max-w-5xl",
      },
      full: {
        content: "m-0 h-dvh max-w-full !rounded-none bg-background sm:m-0",
      },
    },
    backdrop: {
      transparent: {
        backdrop: "hidden",
      },
      opaque: {
        backdrop: " bg-overlay/50",
      },
      blur: {
        backdrop: "bg-overlay/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
  },
  defaultVariants: {
    scroll: false,
    size: "lg",
    backdrop: "blur",
  },
});
