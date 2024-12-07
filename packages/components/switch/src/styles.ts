import { focusVisibleClasses, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const switchVariants = tv({
  slots: {
    base: "group flex flex-col gap-2",
    switch: [
      "flex cursor-pointer items-center rounded-full bg-content1 p-1",
      ...focusVisibleClasses,
      "ui-group-disabled:cursor-not-allowed ui-group-disabled:opacity-50",
      "cursor-default ui-interactive:cursor-pointer ui-interactive:hover:opacity-95",
      "justify-start ui-group-checked:justify-end",
    ],
    thumb: "size-8 rounded-full bg-white shadow-md",
    helperText: "text-xs text-foreground-400",
    label: "grid grow select-none gap-1 ui-group-interactive:cursor-pointer",
    labelText: "font-medium",
    description: "text-xs text-foreground-500",
    mainWrapper: "flex items-center justify-between gap-2",
    switchWrapper: "",
  },
  variants: {
    color: {
      default: {
        switch: "ui-group-checked:bg-default",
      },
      primary: {
        switch: "ui-group-checked:bg-primary",
      },
      secondary: {
        switch: "ui-group-checked:bg-secondary",
      },
      success: {
        switch: "ui-group-checked:bg-success",
      },
      warning: {
        switch: "ui-group-checked:bg-warning",
      },
      error: {
        switch: "ui-group-checked:bg-danger",
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