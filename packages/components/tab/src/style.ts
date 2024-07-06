import type { VariantProps } from "@jamsr-ui/utils";
import { colorVariants, dataFocusVisibleClasses, tv } from "@jamsr-ui/utils";

export const tabsVariant = tv({
  slots: {
    base: "",
    tabList: [
      "flex",
      "p-1",
      "h-fit",
      "gap-2",
      "items-center",
      "flex-nowrap",
      "overflow-x-scroll",
      "scrollbar-hide",
      "bg-default-100",
    ],
    tab: [
      "z-0",
      "w-full",
      "px-3",
      "py-1",
      "flex",
      "group",
      "relative",
      "justify-center",
      "items-center",
      "outline-none",
      "cursor-pointer",
      "transition-opacity",
      "tap-highlight-transparent",
      "data-[disabled=true]:cursor-not-allowed",
      "data-[disabled=true]:opacity-30",
      "data-[hover-unselected=true]:opacity-disabled",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    tabContent: [
      "relative",
      "z-10",
      "text-inherit",
      "whitespace-nowrap",
      "transition-colors",
      "text-default-500",
      "group-data-[selected=true]:text-foreground",
    ],
    cursor: ["absolute", "z-0", "bg-white"],
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
      error: {},
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
        cursor: "rounded",
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
        tabList: "rounded-xl",
        tab: "rounded",
        cursor: "rounded",
      },
      md: {
        tabList: "rounded-xl",
        tab: "rounded",
        cursor: "rounded",
      },
      lg: {
        tabList: "rounded-lg",
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
      class: {
        cursor: ["bg-background", "dark:bg-default", "shadow-small"],
        tabContent: "group-data-[selected=true]:text-default-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "primary",
      class: {
        cursor: colorVariants.solid.primary,
        tabContent: "group-data-[selected=true]:text-primary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "secondary",
      class: {
        cursor: colorVariants.solid.secondary,
        tabContent: "group-data-[selected=true]:text-secondary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "success",
      class: {
        cursor: colorVariants.solid.success,
        tabContent: "group-data-[selected=true]:text-success-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "warning",
      class: {
        cursor: colorVariants.solid.warning,
        tabContent: "group-data-[selected=true]:text-warning-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "error",
      class: {
        cursor: colorVariants.solid.error,
        tabContent: "group-data-[selected=true]:text-error-foreground",
      },
    },
    // underlined && color
    {
      variant: "underlined",
      color: "default",
      class: {
        cursor: "bg-foreground",
        tabContent: "group-data-[selected=true]:text-foreground",
      },
    },
    {
      variant: "underlined",
      color: "primary",
      class: {
        cursor: "bg-primary",
        tabContent: "group-data-[selected=true]:text-primary",
      },
    },
    {
      variant: "underlined",
      color: "secondary",
      class: {
        cursor: "bg-secondary",
        tabContent: "group-data-[selected=true]:text-secondary",
      },
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        cursor: "bg-success",
        tabContent: "group-data-[selected=true]:text-success",
      },
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        cursor: "bg-warning",
        tabContent: "group-data-[selected=true]:text-warning",
      },
    },
    {
      variant: "underlined",
      color: "error",
      class: {
        cursor: "bg-error",
        tabContent: "group-data-[selected=true]:text-error",
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
