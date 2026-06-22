import { tv } from "tailwind-variants";

export const dialogStyles = tv({
  slots: {
    backdrop: [
      "z-backdrop fixed inset-0 min-h-dvh",
      "transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute",
    ],
    header: "p-4 text-base font-bold",
    body: "w-full p-4",
    popup: [
      "fixed z-dialog bg-surface shadow-lg max-w-md w-full outline-none",
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      "transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
    ],
    footer: "flex w-full items-center justify-end gap-2 p-4",
    closeButton: "absolute right-2 top-2 z-10",
    title: "",
    description: "",
    portal: "relative z-dialog",
  },
  variants: {
    radius: {
      none: { popup: "rounded-none" },
      sm: { popup: "rounded-sm" },
      md: { popup: "rounded-md" },
      lg: { popup: "rounded-lg" },
    },
    fullWidth: {
      true: {
        popup: "m-0 h-dvh max-w-full rounded-none! sm:m-0",
      },
    },
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
    isBordered: {
      true: {
        header: "border-b border-border",
        footer: "border-t border-border",
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
    backdrop: "opaque",
    radius: "md",
  },
});
