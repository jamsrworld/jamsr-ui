import { tv } from "tailwind-variants";

import type { VariantProps } from "tailwind-variants";

export const alertStyles = tv({
  slots: {
    root: "relative flex gap-2 px-4 py-1.5 text-sm ring-1 ring-inset rounded-lg",
    content: "flex flex-col grow py-2 gap-1",
    icon: "shrink-0 py-2",
    title: "",
    description: "",
  },
  variants: {
    variant: {
      bordered: {
        root: "border",
      },
      solid: {
        root: "font-medium",
      },
      soft: {},
    },
    status: {
      success: {
        root: "ring-success-border",
      },
      warning: {
        root: "ring-warning-border",
      },
      error: {
        root: "ring-danger-border",
      },
      info: {
        root: "ring-primary-border",
      },
      neutral: {
        root: "ring-default-border",
      },
    },
  },
  compoundVariants: [
    // solid
    {
      status: "error",
      variant: "solid",
      className: {
        root: "bg-danger text-danger-foreground",
      },
    },
    {
      status: "success",
      variant: "solid",
      className: {
        root: "bg-success text-success-foreground",
      },
    },
    {
      status: "info",
      variant: "solid",
      className: {
        root: "bg-primary text-primary-foreground",
      },
    },
    {
      status: "warning",
      variant: "solid",
      className: {
        root: "bg-warning text-warning-foreground",
      },
    },
    {
      status: "neutral",
      variant: "solid",
      className: {
        root: "bg-default text-default-foreground",
      },
    },
    // soft
    {
      status: "success",
      variant: "soft",
      className: {
        root: "bg-success-soft text-success",
      },
    },
    {
      status: "info",
      variant: "soft",
      className: {
        root: "bg-primary-soft text-primary",
      },
    },
    {
      status: "warning",
      variant: "soft",
      className: {
        root: "bg-warning-soft text-warning",
      },
    },
    {
      status: "error",
      variant: "soft",
      className: {
        root: "bg-danger-soft text-danger",
      },
    },
    {
      status: "neutral",
      variant: "soft",
      className: {
        root: "bg-default-soft text-foreground",
      },
    },
    // bordered
    {
      status: "error",
      variant: "bordered",
      className: {
        root: "border-danger-border text-danger",
      },
    },
    {
      status: "success",
      variant: "bordered",
      className: {
        root: "border-success-border text-success",
      },
    },
    {
      status: "info",
      variant: "bordered",
      className: {
        root: "border-primary-border text-primary",
      },
    },
    {
      status: "warning",
      variant: "bordered",
      className: {
        root: "border-warning-border text-warning",
      },
    },
    {
      status: "neutral",
      variant: "bordered",
      className: {
        root: "border-default-border text-foreground",
      },
    },
  ],
  defaultVariants: {
    status: "success",
    variant: "solid",
  },
});

export type AlertVariants = VariantProps<typeof alertStyles>;
