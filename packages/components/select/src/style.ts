import { tv, type VariantProps } from "@jamsr-ui/utils";

export const selectVariant = tv({
  slots: {
    base: ["group relative flex w-full select-none flex-col text-sm"],
    value: [
      "subpixel-antialiased",
      "text-sm",
      "pointer-events-none",
      "flex grow flex-wrap",
    ],
    placeholder: ["text-left", "text-foreground-500", "text-sm", "grow"],
    mainWrapper: "flex w-full flex-col",
    innerWrapper: "flex w-full items-center gap-2",
    label: "mb-1 text-sm",
    trigger:
      "relative flex h-auto w-full flex-row items-center gap-3 rounded-xl border-2 border-divider px-3 py-2 shadow-sm outline-none focus-within:ring-2 focus-within:ring-primary",
    helperText: "mt-1 text-xs text-foreground-500",
    popover:
      "z-popover flex flex-col overflow-hidden rounded-2xl border border-divider bg-background shadow-card focus:outline-none",
    content: "overflow-y-auto p-2",
    startContent: "",
    endContent: "",
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
        label: "text-error",
        trigger: "border-error",
      },
    },
  },
});

export type SelectVariantProps = VariantProps<typeof selectVariant>;
export type SelectSlots = keyof ReturnType<typeof selectVariant>;
