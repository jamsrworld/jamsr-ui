import type { VariantProps } from "@jamsr-ui/utils";
import { tv } from "@jamsr-ui/utils";

export const alertVariant = tv({
  slots: {
    wrapper: "relative flex gap-2 rounded-lg p-4 text-sm",
    title: "flex gap-2 font-normal",
    description: "flex grow flex-col gap-1 self-center break-all",
    action: "absolute right-2 self-center",
    heading: "font-medium",
  },
  variants: {
    variant: {
      outline: "",
      filled: "",
    },
    severity: {
      success: {
        wrapper: "border border-success-600 text-success-600",
      },
      warning: {
        wrapper: "border border-warning-600 text-warning-600",
      },
      danger: { wrapper: "border border-danger-600 text-danger-500" },
      info: { wrapper: "border border-blue-600 text-blue-500" },
      default: { wrapper: "border border-default-600 text-default-500" },
    },
  },
  compoundVariants: [
    // danger
    {
      severity: "danger",
      variant: "filled",
      className: {
        wrapper: "bg-danger-100 text-white",
      },
    },
    // success
    {
      severity: "success",
      variant: "filled",
      className: {
        wrapper: "bg-success-100 text-white",
      },
    },
    // info
    {
      severity: "info",
      variant: "filled",
      className: {
        wrapper: "bg-blue-600 text-white",
      },
    },
    // warning
    {
      severity: "warning",
      variant: "filled",
      className: {
        wrapper: "bg-warning-100 text-white",
      },
    },
    // default
    {
      severity: "default",
      variant: "filled",
      className: {
        wrapper: "bg-default-100 text-white",
      },
    },
  ],
  defaultVariants: {
    severity: "default",
    variant: "outline",
  },
});
export type AlertVariantProps = VariantProps<typeof alertVariant>;
