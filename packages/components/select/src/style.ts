import { tv, type VariantProps } from "@jamsr-ui/utils";

export const selectVariant = tv({
  slots: {
    base: ["group relative flex w-full select-none flex-col text-sm"],
    value: [
      "subpixel-antialiased",
      "text-sm",
      "pointer-events-none",
      "flex flex-wrap gap-2",
    ],
    placeholder: ["text-left", "text-foreground-500", "text-sm"],
    mainWrapper: "flex w-full flex-col",
    label: "mb-1 text-sm",
    trigger:
      "relative flex w-full flex-row items-center justify-between gap-3 rounded-xl border-2 border-divider px-3 py-2 shadow-sm outline-none focus-within:ring-2 focus-within:ring-primary",
    helperText: "mt-1 text-xs text-foreground-500",
  },
  variants: {
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      sm: {
        label: "text-xs",
        trigger: "h-8 min-h-8 rounded-md px-2",
        value: "text-sm",
      },
      md: {
        trigger: "h-10 min-h-10 rounded-md",
        value: "text-sm",
      },
      lg: {
        trigger: "h-12 min-h-12 rounded-lg",
        value: "text-sm",
      },
    },
    isInvalid: {
      true: {
        helperText: "text-error",
        label:"text-error",
        trigger:"border-error"
      },
    },
  },
});
export type SelectVariantProps = VariantProps<typeof selectVariant>;
