import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const selectVariant = tv({
  slots: {
    base: ["group relative flex w-full select-none flex-col gap-1 text-sm"],
    value: ["text-sm", "pointer-events-none", "flex grow flex-wrap"],
    placeholder: ["text-left", "text-foreground-400", "text-sm", "grow"],
    mainWrapper: "flex w-full flex-col",
    innerWrapper: "flex w-full items-center gap-2",
    label: "shrink-0 select-none text-sm font-normal text-foreground",
    trigger: [
      "relative flex w-full flex-row items-center gap-3 rounded-xl border-2 border-default-200 px-3 py-2 outline-none",
      "focus:border-primary ui-group-hover:border-default-400 ui-group-open:border-primary",
      "ui-group-disabled:cursor-not-allowed ui-group-disabled:opacity-50",
    ],
    helperText: "text-xs text-foreground-600",
    indicator:
      "shrink-0 transition-transform duration-300 group-data-[open=true]:rotate-180",
    popover: "z-popover",
    content:
      "z-popover flex h-full flex-col overflow-hidden rounded-2xl bg-content1 shadow-md backdrop-blur-3xl",
    scrollArea: "overflow-y-auto p-2",
    startContent: "text-foreground-500",
    endContent: "text-foreground-500",
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
        trigger: "h-9 min-h-9 px-2.5",
        value: "text-sm",
      },
      md: {
        trigger: "h-10 min-h-10",
        value: "text-sm",
      },
      lg: {
        trigger: "h-12 min-h-12",
        value: "text-base",
        placeholder: "text-base",
      },
    },
    isInvalid: {
      true: {
        helperText: "text-danger",
        label: "text-danger",
        trigger: "!border-danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SelectVariantProps = VariantProps<typeof selectVariant>;
export type SelectSlots = keyof ReturnType<typeof selectVariant>;
