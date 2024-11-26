import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const drawer = tv({
  slots: {
    backdrop: "z-backdrop !overflow-x-hidden",
    base: "absolute z-dialog flex w-full flex-col overflow-y-auto bg-content1 shadow-sm",
    header: "p-4",
    footer: "flex justify-end gap-2 p-4",
    body: "grow p-4",
    closeButton: "absolute right-2 top-2",
  },
  variants: {
    anchor: {
      left: {
        base: "left-0 top-0 h-dvh",
      },
      right: {
        base: "right-0 top-0 h-dvh",
      },
      top: {
        base: "left-0 top-0",
      },
      bottom: {
        base: "bottom-0 left-0",
      },
    },
    size: {
      xs: {
        base: "max-w-xs",
      },
      sm: {
        base: "max-w-sm",
      },
      md: {
        base: "max-w-md",
      },
      lg: {
        base: "max-w-lg",
      },
      xl: {
        base: "max-w-xl",
      },
      "2xl": {
        base: "max-w-2xl",
      },
      "3xl": {
        base: "max-w-3xl",
      },
      "4xl": {
        base: "max-w-4xl",
      },
      "5xl": {
        base: "max-w-5xl",
      },
      full: {
        base: "m-0 h-dvh max-w-full !rounded-none sm:m-0",
      },
    },
    isBordered: {
      true: {
        header: "border-b border-divider-light",
        footer: "border-t border-divider-light",
      },
    },
    scrollBehavior: {
      inside: {
        body: "overflow-y-auto",
      },
      outside: {},
    },
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-overlay/50",
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
        base: "w-full !max-w-full",
      },
    },
  ],
  defaultVariants: {
    scrollBehavior: "inside",
    size: "lg",
    isBordered: false,
    backdrop: "blur",
    anchor: "right",
  },
});

export type DrawerVariants = VariantProps<typeof drawer>;
export type DrawerSlots = keyof ReturnType<typeof drawer>;
