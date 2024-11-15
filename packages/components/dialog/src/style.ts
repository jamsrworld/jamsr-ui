import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const dialog = tv({
  slots: {
    backdrop: "z-backdrop grid place-items-center backdrop-blur-sm",
    header: "px-2 pt-4 text-base font-bold md:px-4",
    body: "m-auto w-full flex-1 overflow-y-auto p-2 md:p-4",
    content:
      "relative z-dialog flex  w-full flex-col rounded-3xl bg-content1 shadow-lg backdrop-blur-3xl",
    footer: "bottom-0 flex w-full justify-end gap-2 p-2 md:p-4",
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
    isScroll: {
      true: {
        header: "border-b border-divider pb-4",
        footer: "sticky border-t border-divider",
        content: "max-h-[calc(100dvh-40px)] overflow-hidden",
      },
    },
  },
  defaultVariants: {
    scroll: false,
    size: "lg",
    backdrop: "blur",
  },
});

export type DialogVariantProps = VariantProps<typeof dialog>;
export type DialogSlots = keyof ReturnType<typeof dialog>;
