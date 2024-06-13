import { tv, type VariantProps } from "@jamsr-ui/utils";

export const textareaVariants = tv({
  slots: {
    base: "flex flex-col gap-1",
    textarea:
      "block w-full grow bg-transparent text-sm placeholder:text-sm placeholder:text-foreground-400 read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    labelWrapper: "flex items-center gap-2",
    label: "shrink-0 select-none text-sm font-normal text-foreground-400",
    mainWrapper: "flex gap-1",
    textareaWrapper:
      "w-full focus-within:border-primary focus-within:ring-primary",
    innerWrapper: "flex items-center",
    helper: "",
  },
  variants: {
    variant: {
      outline: {
        textareaWrapper: "rounded-lg border-2 border-divider",
        textarea: "rounded-lg",
      },
      transparent: {
        textareaWrapper: "border-none bg-transparent outline-none",
        textarea: "p-0",
      },
      search: {
        textareaWrapper: "rounded-2xl border-2 border-divider bg-background-paper",
      },
    },
    size: {
      false: {},
      sm: {
        textarea: "p-1.5",
      },
      md: {
        textarea: "p-3",
      },
      lg: {
        textarea: "p-5",
      },
    },
    isInvalid: {
      true: {
        textareaWrapper:
          "border-error focus-within:border-error focus-within:shadow-error focus-within:ring-error",
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
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
    labelPlacement: "top",
  },
});

export type TextareaVariantProps = VariantProps<typeof textareaVariants>;
export type TextareaSlots = keyof ReturnType<typeof textareaVariants>;
