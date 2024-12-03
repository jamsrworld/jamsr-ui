import { focusVisibleClasses, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";

export const switchVariants = tv({
  slots: {
    base: "flex flex-col gap-2",
    switch: [
      "flex cursor-pointer items-center rounded-full p-1",
      focusVisibleClasses,
    ],
    thumb: "size-8 rounded-full bg-white shadow-md",
    helperText: "text-xs text-foreground-400",
    label: "grid grow cursor-pointer select-none gap-1",
    labelText: "font-medium",
    description: "text-xs text-foreground-500",
    mainWrapper: "flex items-center justify-between gap-2",
    switchWrapper: "",
  },
  variants: {
    color: {
      default: {
        switch: "bg-default",
      },
      primary: {
        switch: "bg-primary",
      },
      secondary: {
        switch: "bg-secondary",
      },
      success: {
        switch: "bg-success",
      },
      warning: {
        switch: "bg-warning",
      },
      error: {
        switch: "bg-danger",
      },
    },
    size: {
      sm: {
        switch: "h-6 w-10",
        thumb: "size-4",
      },
      md: {
        switch: "mr-2 h-7 w-12",
        thumb: "size-5",
      },
      lg: {
        switch: "mr-2 h-8 w-14",
        thumb: "size-6",
      },
    },
    checked: {
      true: {
        switch: "justify-end",
      },
      false: {
        switch: "justify-start !bg-default-200",
      },
    },
    labelPlacement: {
      start: {
        mainWrapper: "flex-row",
      },
      end: {
        mainWrapper: "flex-row-reverse",
      },
      top: {
        mainWrapper: "flex-col",
      },
      bottom: {
        mainWrapper: "flex-col-reverse",
      },
    },
    isDisabled: {
      true: {
        switch: "pointer-events-none cursor-not-allowed bg-background-tertiary",
      },
    },
    isInvalid: {
      true: {
        helperText: "text-danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "success",
    labelPlacement: "start",
  },
});

export type SwitchVariantProps = VariantProps<typeof switchVariants>;
export type SwitchSlots = keyof ReturnType<typeof switchVariants>;
