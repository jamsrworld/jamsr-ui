import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const drawer = tv({
  slots: {
    backdrop: "z-backdrop !overflow-x-hidden backdrop-blur-sm",
    content: "absolute z-dialog h-dvh w-full overflow-y-auto bg-content1",
  },
  variants: {
    anchor: {
      left: {
        content: "left-0 top-0",
      },
      right: {
        content: "right-0 top-0",
      },
      top: {
        content: "left-0 top-0",
      },
      bottom: {
        content: "bottom-0 left-0",
      },
    },
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
  compoundVariants: [
    {
      anchor: ["top", "bottom"],
      className: {
        content: "w-full !max-w-full",
      },
    },
  ],
  defaultVariants: {
    scroll: false,
    size: "lg",
    backdrop: "blur",
    anchor: "right",
  },
});

export type DrawerVariants = VariantProps<typeof drawer>;
export type DrawerSlots = keyof ReturnType<typeof drawer>;
