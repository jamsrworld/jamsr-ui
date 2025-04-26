import type { VariantProps } from "@jamsr-ui/utils";
import {
  colorVariants,
  dataFocusVisibleClasses,
  focusVisibleClasses,
  tv,
} from "@jamsr-ui/utils";

export const test = "";
export const tabsVariant = tv({
  slots: {
    base: "",
    tabList: [
      "inline-flex",
      "p-1",
      "h-fit",
      "gap-2",
      "items-center",
      "flex-nowrap",
      "overflow-x-auto",
      "scrollbar-hide",
      "bg-default-100",
      "max-w-full overflow-auto",
    ],
    tab: [
      "z-0 text-default-500",
      "w-full",
      "px-3",
      "py-1",
      "flex flex-row items-center justify-center gap-2",
      "group",
      "relative",
      "outline-none",
      "cursor-pointer",
      "transition-opacity",
      "tap-highlight-transparent",
      "ui-disabled:cursor-not-allowed",
      "ui-disabled:opacity-30",
      "ui-disabled:text-foreground",
      // focus ring
      ...focusVisibleClasses,
    ],
    tabContent: [
      "relative",
      "z-10",
      "whitespace-nowrap",
      "transition-colors",
      "text-default-500",
      "uig-selected:text-foreground",
      "flex flex-row items-center justify-center gap-2",
    ],
    cursor: ["absolute", "-z-1", "bg-white"],
    panel: [
      "py-3",
      "px-1",
      "outline-none",
      "data-[inert=true]:hidden",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
  },
  variants: {
    variant: {
      solid: {
        cursor: "inset-0",
      },
      light: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "inset-0",
      },
      underlined: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "bottom-0 h-[2px] w-4/5 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
      },
      bordered: {
        tabList:
          "border-2 border-default-200 bg-transparent shadow-sm dark:bg-transparent",
        cursor: "inset-0",
      },
    },
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
        tabList: "rounded-xl",
        tab: "h-7 rounded text-xs",
        cursor: "rounded",
      },
      md: {
        tabList: "rounded-xl",
        tab: "h-8 rounded text-sm",
        cursor: "rounded-md",
      },
      lg: {
        tabList: "rounded-lg",
        tab: "h-9 rounded-xl text-base",
        cursor: "rounded-xl",
      },
    },
    radius: {
      none: {
        tabList: "rounded-none",
        tab: "rounded-none",
        cursor: "rounded-none",
      },
      sm: {
        tabList: "rounded",
        tab: "rounded",
        cursor: "rounded",
      },
      md: {
        tabList: "rounded-md",
        tab: "rounded-md",
        cursor: "rounded-md",
      },
      lg: {
        tabList: "rounded-lg",
        tab: "rounded-lg",
        cursor: "rounded-lg",
      },
      xl: {
        tabList: "rounded-xl",
        tab: "rounded-xl",
        cursor: "rounded-xl",
      },
      full: {
        tabList: "rounded-full",
        tab: "rounded-full",
        cursor: "rounded-full",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
        tabList: "w-full",
      },
    },
    isDisabled: {
      true: {
        tabList: "pointer-events-none opacity-disabled",
      },
    },
    disableAnimation: {
      true: {
        tab: "transition-none",
        tabContent: "transition-none",
      },
    },
    placement: {
      top: {},
      start: {
        tabList: "flex-col",
        panel: "px-3 py-0",
        base: "flex",
      },
      end: {
        tabList: "flex-col",
        panel: "px-3 py-0",
        base: "flex flex-row-reverse",
      },
      bottom: {
        base: "flex flex-col-reverse",
      },
    },
  },
  compoundVariants: [
    /**
     * Variants & Colors
     */
    // solid + bordered + light && color
    {
      variant: ["solid", "bordered", "light"],
      color: "default",
      className: {
        cursor: ["bg-background", "dark:bg-default", "shadow-sm"],
        tabContent: "uig-selected:text-default-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "primary",
      className: {
        cursor: colorVariants.solid.primary,
        tabContent: "uig-selected:text-primary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "secondary",
      className: {
        cursor: colorVariants.solid.secondary,
        tabContent: "uig-selected:text-secondary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "success",
      className: {
        cursor: colorVariants.solid.success,
        tabContent: "uig-selected:text-success-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "warning",
      className: {
        cursor: colorVariants.solid.warning,
        tabContent: "uig-selected:text-warning-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "danger",
      className: {
        cursor: colorVariants.solid.danger,
        tabContent: "uig-selected:text-danger-foreground",
      },
    },
    // underlined && color
    {
      variant: "underlined",
      color: "default",
      className: {
        cursor: "bg-foreground",
        tabContent: "uig-selected:text-foreground",
      },
    },
    {
      variant: "underlined",
      color: "primary",
      className: {
        cursor: "bg-primary",
        tabContent: "uig-selected:text-primary",
      },
    },
    {
      variant: "underlined",
      color: "secondary",
      className: {
        cursor: "bg-secondary",
        tabContent: "uig-selected:text-secondary",
      },
    },
    {
      variant: "underlined",
      color: "success",
      className: {
        cursor: "bg-success",
        tabContent: "uig-selected:text-success",
      },
    },
    {
      variant: "underlined",
      color: "warning",
      className: {
        cursor: "bg-warning",
        tabContent: "uig-selected:text-warning",
      },
    },
    {
      variant: "underlined",
      color: "danger",
      className: {
        cursor: "bg-danger",
        tabContent: "uig-selected:text-danger",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "solid",
    size: "md",
    fullWidth: false,
    isDisabled: false,
  },
});

export type TabVariants = VariantProps<typeof tabsVariant>;
export type TabsSlots = keyof ReturnType<typeof tabsVariant>;
