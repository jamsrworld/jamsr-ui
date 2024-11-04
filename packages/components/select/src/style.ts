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
    placeholder: ["text-left", "text-foreground-400", "text-sm", "grow"],
    mainWrapper: "flex w-full flex-col",
    innerWrapper: "flex w-full items-center gap-2",
    label: "mb-1 text-sm text-foreground-400",
    trigger:
      "relative flex w-full flex-row items-center gap-3 rounded-xl border-2 border-divider px-3 py-2 shadow-sm outline-none focus:!border-primary group-data-[hovered=true]:border-gray-400 group-data-[open=true]:!border-primary",
    helperText: "mt-1 text-xs text-foreground-500",
    popover: "",
    indicator:
      "transition-transform duration-300 group-data-[open=true]:rotate-180",
    content:
      "z-popover flex flex-col overflow-y-auto rounded-2xl bg-content1 p-2 drop-shadow-menu backdrop-blur-3xl",
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
        trigger: "border-danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SelectVariantProps = VariantProps<typeof selectVariant>;
export type SelectSlots = keyof ReturnType<typeof selectVariant>;
