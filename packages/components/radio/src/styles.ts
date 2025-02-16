import type { VariantProps } from "@jamsr-ui/utils";
import { groupDataFocusVisibleClasses, tv } from "@jamsr-ui/utils";

export const test = "";
export const radioVariant = tv({
  slots: {
    base: [
      "group relative -m-2 inline-flex cursor-pointer items-center justify-start p-2 tap-highlight-transparent",
      "ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
    ],
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "flex-shrink-0",
      "overflow-hidden",
      "border-solid",
      "border-2",
      "box-border",
      "border-default-200",
      "rounded-full",
      "uig-hover:border-default-400",
      // focus ring
      ...groupDataFocusVisibleClasses,
    ],
    labelWrapper: "ml-1 flex grow flex-col",
    control: [
      "z-10",
      "w-2",
      "h-2",
      "opacity-0",
      "scale-0",
      "origin-center",
      "rounded-full",
      "uig-selected:opacity-100",
      "uig-selected:scale-100",
    ],
    label: "relative select-none text-foreground",
    description: "relative text-foreground-400",
  },
  variants: {
    color: {
      default: {
        control: "bg-default-500 text-default-foreground",
        wrapper: "uig-selected:border-default-500",
      },
      primary: {
        control: "bg-primary text-primary-foreground",
        wrapper: "uig-selected:border-primary",
      },
      secondary: {
        control: "bg-secondary text-secondary-foreground",
        wrapper: "uig-selected:border-secondary",
      },
      success: {
        control: "bg-success text-success-foreground",
        wrapper: "uig-selected:border-success",
      },
      warning: {
        control: "bg-warning text-warning-foreground",
        wrapper: "uig-selected:border-warning",
      },
      danger: {
        control: "bg-danger text-danger-foreground",
        wrapper: "uig-selected:border-danger",
      },
    },
    size: {
      sm: {
        wrapper: "size-4",
        control: "size-1.5",
        labelWrapper: "ml-1",
        label: "text-sm",
        description: "text-xs",
      },
      md: {
        wrapper: "size-5",
        control: "size-2",
        labelWrapper: "ml-2",
        label: "text-base",
        description: "text-sm",
      },
      lg: {
        wrapper: "size-6",
        control: "size-2.5",
        labelWrapper: "ml-2",
        label: "text-lg",
        description: "text-base",
      },
    },
    isInvalid: {
      true: {
        control: "bg-danger text-danger-foreground",
        wrapper: "border-danger uig-selected:border-danger",
        label: "text-danger",
        description: "text-danger-300",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isDisabled: false,
    isInvalid: false,
  },
});

export const radioGroupVariant = tv({
  slots: {
    base: "relative flex flex-col gap-2",
    label: "relative text-foreground-500",
    wrapper:
      "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
    helperText: "text-xs text-foreground-400",
  },
  variants: {
    isInvalid: {
      true: {
        helperText: "text-danger",
      },
    },
  },
  defaultVariants: {
    isInvalid: false,
    isRequired: false,
  },
});

export type RadioVariantProps = VariantProps<typeof radioVariant>;
export type RadioSlots = keyof ReturnType<typeof radioVariant>;
export type RadioGroupSlots = keyof ReturnType<typeof radioGroupVariant>;
