import { tv, type VariantProps } from "@jamsr-ui/utils";

export const inputVariants = tv({
  slots: {
    base: "flex flex-col gap-1",
    labelWrapper: "flex items-center gap-2",
    label: "shrink-0 select-none text-sm font-normal",
    mainWrapper: "flex gap-1",
    inputWrapper:
      "w-full focus-within:border-primary focus-within:ring-primary",
    innerWrapper: "flex items-center px-3 py-2",
    input:
      "block grow bg-transparent text-sm placeholder:text-sm placeholder:text-foreground-400 read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    helper: "text-xs text-foreground-500",
    startContent: "pr-2 text-foreground-muted empty:hidden",
    endContent: "pl-2 text-foreground-muted",
  },
  variants: {
    fullWidth: {
      true: {
        input: "w-full",
      },
    },
    variant: {
      outline: {
        inputWrapper: "rounded-xl border-2 border-divider",
      },
      transparent: {
        inputWrapper: "border-none bg-transparent outline-none",
        input: "p-0",
      },
      filled: {
        inputWrapper: "rounded-xl border-2 border-divider bg-background-paper",
      },
    },
    size: {
      false: {},
      sm: {
        inputWrapper: "rounded-xl",
        innerWrapper: "h-8 min-h-8 px-2.5",
      },
      md: {
        innerWrapper: "h-10 min-h-10",
      },
      lg: {
        innerWrapper: "h-12 min-h-12",
      },
    },
    isInvalid: {
      true: {
        inputWrapper:
          "border-error focus-within:border-error focus-within:shadow-error focus-within:ring-error",
        helper: "text-error",
        label: "text-error",
      },
    },
    labelPlacement: {
      top: {
        mainWrapper: "flex-col",
      },
      start: {
        mainWrapper: "items-center",
      },
    },
    isTextarea: {
      true: {
        innerWrapper: "h-auto",
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
    labelPlacement: "top",
  },
});

export type InputVariantProps = VariantProps<typeof inputVariants>;
export type InputSlots = keyof ReturnType<typeof inputVariants>;
