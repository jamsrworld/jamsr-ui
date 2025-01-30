import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const inputVariants = tv({
  slots: {
    base: "group flex flex-col gap-1",
    labelWrapper: "flex items-center gap-2",
    label: "shrink-0 text-sm font-normal text-foreground",
    mainWrapper: "flex flex-col gap-1",
    inputWrapper: [
      "relative",
      "grow",
      "ui-group-disabled:cursor-not-allowed ui-group-disabled:opacity-60",
      "ui-group-focus:border-primary ui-group-focus:ring-primary",
      "ui-group-hover:border-default-400",
    ],
    innerWrapper: ["flex h-full items-center"],
    input: [
      "block grow bg-transparent font-normal",
      "placeholder:text-foreground-400 read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      "group-data-[has-start-content=true]:pl-0",
      "group-data-[has-end-content=true]:pr-0",
    ],
    helper: "text-xs text-foreground-600",
    startContent: "flex items-center gap-1 pr-2 text-foreground-500",
    endContent: "flex items-center gap-1 pl-2 text-foreground-500",
    notation: "",
    contentWrapper: "flex h-full grow items-center",
    clearButton: "mr-2 size-4",
    icon: "",
    legend: "",
  },
  variants: {
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    radius: radiusVariant("inputWrapper"),
    variant: {
      underlined: {
        inputWrapper: "rounded-b-none border-b-2 border-default-200",
        label:
          "absolute top-1/2 -translate-y-1/2 text-foreground-400 transition-all duration-200 ui-group-filled-within:top-0 ui-group-filled-within:translate-y-0 ui-group-filled-within:text-xs",
        innerWrapper: "pt-2",
      },
      standard: {
        inputWrapper: "border-2 border-default-200",
        innerWrapper: [
          "group-data-[has-start-content=true]:pl-2",
          "group-data-[has-end-content=true]:pr-2",
        ],
      },
      bordered: {
        inputWrapper: "border-2 border-default-200",
        startContent: "ui-group-filled-within:mt-4",
        label:
          "absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400 transition-all duration-200 ui-group-filled-within:top-3.5",
        innerWrapper: [
          "group-data-[has-start-content=true]:pl-3",
          "group-data-[has-end-content=true]:pr-3",
        ],
      },
      outlined: {
        inputWrapper: "border-2 border-default-200",
        label:
          "absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400 transition-all duration-200 ui-group-filled-within:top-[-2.5px]",
        legend:
          "invisible ml-2 h-1 max-w-[0.01px] text-xs ui-group-filled-within:max-w-md ui-group-filled-within:pl-2",
        innerWrapper: [
          "group-data-[has-start-content=true]:pl-3",
          "group-data-[has-end-content=true]:pr-3",
        ],
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
        inputWrapper: "bg-default-100/50 ui-group-hover:bg-default-100",
      },
    },
  },
  compoundVariants: [
    // filled
    {
      isFilled: true,
      variant: ["standard"],
      className: {
        inputWrapper: "border-none",
      },
    },
    // standard
    {
      variant: ["standard"],
      size: "sm",
      className: {
        input: "px-3 py-1.5 text-sm placeholder:text-sm",
      },
    },
    {
      variant: ["standard"],
      size: "md",
      className: {
        input: "px-3 py-2 text-sm placeholder:text-sm",
      },
    },
    {
      variant: ["standard"],
      size: "lg",
      className: {
        input: "p-3 text-base placeholder:text-base",
      },
    },
    // underlined
    {
      variant: ["underlined"],
      isFilled: true,
      className: {
        inputWrapper: "px-2",
      },
    },
    {
      variant: ["underlined"],
      size: "sm",
      className: {
        input: "py-1.5 text-sm placeholder:text-sm",
      },
    },
    {
      variant: ["underlined"],
      size: "md",
      className: {
        input: "py-2 text-sm placeholder:text-sm",
      },
    },
    {
      variant: ["underlined"],
      size: "lg",
      className: {
        input: "py-3 text-base placeholder:text-base",
      },
    },
    // bordered
    {
      variant: "bordered",
      size: "sm",
      className: {
        input: "px-3 py-1 group-data-[has-label=true]:pt-5",
        label: "text-sm ui-group-filled-within:text-xs",
      },
    },
    {
      variant: "bordered",
      size: "md",
      className: {
        input: "px-3 py-1.5 group-data-[has-label=true]:pt-5",
        label: "text-base ui-group-filled-within:text-xs",
      },
    },
    {
      variant: "bordered",
      size: "lg",
      className: {
        input: "px-3 py-2 group-data-[has-label=true]:pt-6",
        label: "text-base ui-group-filled-within:text-xs",
      },
    },
    // outlined
    {
      variant: "outlined",
      size: "sm",
      className: {
        input: "px-3 py-2",
        label: "text-sm ui-group-filled-within:text-xs",
      },
    },
    {
      variant: "outlined",
      size: "md",
      className: {
        input: "px-3 py-2.5",
        label: "text-base ui-group-filled-within:text-xs",
      },
    },
    {
      variant: "outlined",
      size: "lg",
      className: {
        input: "p-3",
        label: "text-base ui-group-filled-within:text-xs",
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
