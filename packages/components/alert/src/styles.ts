import type { VariantProps } from "@jamsr-ui/utils";
import { radiusVariant, tv } from "@jamsr-ui/utils";

export const test = "";
export const alertVariant = tv({
  slots: {
    wrapper: "relative flex gap-2 p-4 text-sm",
    mainContent: "flex flex-col gap-1",
    description: "flex grow flex-col gap-1 self-center break-all",
    action: "absolute right-2 self-center",
    heading: "font-medium",
  },
  variants: {
    variant: {
      outlined: "",
      solid: "",
    },
    status: {
      success: {
        wrapper: "border border-success-600 text-success-600",
      },
      warning: {
        wrapper: "border border-warning-600 text-warning-600",
      },
      danger: { wrapper: "border border-danger-600 text-danger-500" },
      info: { wrapper: "border border-blue-600 text-blue-500" },
      default: { wrapper: "border border-divider text-default-500" },
    },
    radius: radiusVariant("wrapper"),
  },
  compoundVariants: [
    // solid
    {
      status: "danger",
      variant: "solid",
      className: {
        wrapper: "bg-danger/10 text-danger-600",
      },
    },
    {
      status: "success",
      variant: "solid",
      className: {
        wrapper: "bg-success/10 text-success-600",
      },
    },
    {
      status: "info",
      variant: "solid",
      className: {
        wrapper: "bg-blue-600/10 text-blue-600",
      },
    },
    {
      status: "warning",
      variant: "solid",
      className: {
        wrapper: "bg-warning/10 text-warning-600",
      },
    },
    {
      status: "default",
      variant: "solid",
      className: {
        wrapper: "bg-default/10 text-default-600",
      },
    },
  ],
  defaultVariants: {
    status: "default",
    variant: "outlined",
    radius: "md",
  },
});

export type AlertVariantProps = VariantProps<typeof alertVariant>;
export type AlertSlots = keyof ReturnType<typeof alertVariant>;
