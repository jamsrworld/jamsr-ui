import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const dialog = tv({
  slots: {
    backdrop: "z-backdrop grid place-items-center",
    header: "p-4 text-base font-bold",
    body: "w-full p-4",
    content:
      "relative z-dialog flex max-h-[calc(100dvh-4rem)] w-full flex-col overflow-y-auto rounded-3xl bg-content1 shadow-lg backdrop-blur-3xl",
    footer: "flex w-full items-center justify-end gap-2 p-4",
    closeButton: "absolute right-2 top-2 z-10",
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
        backdrop: "",
      },
      opaque: {
        backdrop: " bg-overlay/50",
      },
      blur: {
        backdrop: "bg-overlay/30 backdrop-blur-md backdrop-saturate-150",
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
        body: "grow overflow-y-auto",
      },
      outside: {},
    },
  },
  defaultVariants: {
    scrollBehavior: "inside",
    isBordered: false,
    size: "lg",
    backdrop: "blur",
  },
});

export type DialogVariantProps = VariantProps<typeof dialog>;
export type DialogSlots = keyof ReturnType<typeof dialog>;
