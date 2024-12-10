import {
  groupDataFocusVisibleClasses,
  radiusVariant,
  tv,
  type VariantProps,
} from "@jamsr-ui/utils";

export const test = "";
export const inputVariants = tv({
  slots: {
    base: "group flex flex-col gap-1",
    labelWrapper: "flex items-center gap-2",
    label: "shrink-0 select-none text-sm font-normal text-foreground",
    mainWrapper: "flex flex-col gap-1",
    inputWrapper: [
      "relative border-2 border-default-200",
      "grow overflow-hidden",
      "ui-group-disabled:cursor-not-allowed ui-group-disabled:opacity-60",
      "ui-group-focus:border-primary ui-group-focus:ring-primary",
      "ui-group-hover:border-default-400",
      ...groupDataFocusVisibleClasses,
    ],
    innerWrapper: "flex h-full items-center",
    input: [
      "block grow bg-transparent px-3 font-normal",
      "placeholder:text-foreground-400 read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      "group-data-[has-start-content=true]:pl-2",
      "group-data-[has-end-content=true]:pr-2",
    ],
    helper: "text-xs text-foreground-600",
    startContent: "flex items-center gap-1 pl-2 text-foreground-500",
    endContent: "flex items-center gap-1 pr-2 text-foreground-500",
    notation: "",
    contentWrapper: "flex h-full grow items-center",
    clearButton: "size-4",
  },
  variants: {
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    radius: radiusVariant("inputWrapper"),
    variant: {
      standard: {
        inputWrapper: "",
      },
      outlined: {
        inputWrapper: "relative",
        startContent: "group-data-[filled-within=true]:mt-4",
        labelWrapper:
          "pointer-events-none absolute inset-0 flex size-full items-start justify-between",
        label:
          "absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400 transition-all duration-200 group-data-[filled-within=true]:top-3.5",
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
    isFilled: {
      true: {
        inputWrapper: "border-none bg-default-100 hover:bg-default-100/70",
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
    radius: "md",
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
