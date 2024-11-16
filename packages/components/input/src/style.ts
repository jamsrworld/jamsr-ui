import { tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";

export const inputVariants = tv({
  slots: {
    base: "group flex flex-col gap-1",
    labelWrapper: "flex items-center gap-2",
    label:
      "shrink-0 select-none text-sm font-normal text-foreground-400 subpixel-antialiased",
    mainWrapper: "flex flex-col gap-1",
    inputWrapper: [
      "grow overflow-hidden",
      "hover:border-default-400",
      "group-data-[focused=true]:border-primary group-data-[focused=true]:ring-primary",
    ],
    innerWrapper: "flex h-full items-center",
    input: [
      "block grow bg-transparent px-3 font-normal",
      "placeholder:text-foreground-400 read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      "group-data-[has-start-content=true]:pl-2",
      "group-data-[has-end-content=true]:pr-2",
    ],
    helper: "text-xs text-foreground-600",
    startContent: "pl-2 leading-0 text-foreground-500",
    endContent: "pr-2 leading-0 text-foreground-500",
    notation: "",
    contentWrapper: "flex h-full grow items-center",
  },
  variants: {
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    isFilled: {
      true: {
        inputWrapper:
          "rounded-xl border-2 border-divider bg-background-secondary",
      },
    },
    variant: {
      standard: {
        inputWrapper: "relative rounded-xl border-2 border-divider",
      },
      outlined: {
        inputWrapper: "relative rounded-xl border-2 border-divider",
        startContent: "group-data-[filled-within=true]:mt-4",
        labelWrapper:
          "pointer-events-none absolute inset-0 flex size-full items-start justify-between",
        label:
          "absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400 transition-all duration-200 group-data-[filled-within=true]:top-4",
      },
    },
    size: {
      false: {},
      sm: {},
      md: {},
      lg: {},
    },
    isInvalid: {
      true: {
        inputWrapper: "!border-danger",
        helper: "text-danger",
        label: "text-danger",
      },
    },
    isTextarea: {
      true: {
        innerWrapper: "h-auto",
      },
    },
    isRequired: {
      true: {
        notation: "text-danger",
      },
    },
    isOptional: {
      true: {
        notation: "text-success",
      },
    },
  },
  compoundVariants: [
    {
      variant: "standard",
      size: "sm",
      className: {
        input: "py-1.5 text-sm placeholder:text-sm",
      },
    },
    {
      variant: "standard",
      size: "md",
      className: {
        input: "py-2 text-sm placeholder:text-sm",
      },
    },
    {
      variant: "standard",
      size: "lg",
      className: {
        input: "py-3 text-base placeholder:text-base",
      },
    },
    // outlined
    {
      variant: "outlined",
      size: "sm",
      className: {
        input: "px-3 pb-1 pt-5",
        label: "text-sm group-data-[filled-within=true]:text-xs",
      },
    },
    {
      variant: "outlined",
      size: "md",
      className: {
        input: "px-3 pb-1.5 pt-5",
        label: "text-base group-data-[filled-within=true]:text-xs",
      },
    },
    {
      variant: "outlined",
      size: "lg",
      className: {
        input: "px-3 pb-2 pt-6",
        label: "text-base group-data-[filled-within=true]:text-xs",
      },
    },
  ],
  defaultVariants: {
    variant: "standard",
    size: "md",
    fullWidth: false,
    isFilled: false,
    isInvalid: false,
    isOptional: false,
    isRequired: false,
    isTextarea: false,
  },
});

export type InputVariantProps = VariantProps<typeof inputVariants>;
export type InputSlots = keyof ReturnType<typeof inputVariants>;
