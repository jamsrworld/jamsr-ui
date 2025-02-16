import { focusVisibleClasses, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const switchVariants = tv({
  slots: {
    base: "group flex flex-col gap-2",
    switch: [
      ...focusVisibleClasses,
      "flex cursor-pointer items-center rounded-full bg-default-200 p-1",
      "uig-disabled:cursor-not-allowed uig-disabled:opacity-60",
      "cursor-default ui-interactive:cursor-pointer ui-interactive:hover:opacity-95",
      "justify-start uig-checked:justify-end",
    ],
    thumb: "size-8 rounded-full bg-white shadow-md",
    helperText: "text-xs text-foreground-400",
    content: "grid grow gap-1",
    label: "text-sm uig-interactive:cursor-pointer",
    description: "text-xs text-foreground-500",
    mainWrapper: "flex items-center justify-between gap-2",
    switchWrapper: "",
  },
  variants: {
    color: {
      default: {
        switch: "uig-checked:bg-default",
      },
      primary: {
        switch: "uig-checked:bg-primary",
      },
      secondary: {
        switch: "uig-checked:bg-secondary",
      },
      success: {
        switch: "uig-checked:bg-success",
      },
      warning: {
        switch: "uig-checked:bg-warning",
      },
      danger: {
        switch: "uig-checked:bg-danger",
      },
    },
    size: {
      xs: {
        switch: "h-4 w-7 px-0.5",
        thumb: "size-3",
      },
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
        label: "text-danger",
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
