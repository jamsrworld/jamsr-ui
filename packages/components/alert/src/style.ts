import type { VariantProps } from "@jamsr-ui/utils";
import { tv } from "@jamsr-ui/utils";

export const alertVariant = tv({
  slots: {
    wrapper: "relative flex gap-2 rounded-lg p-4 text-sm",
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
      default: { wrapper: "border border-default-600 text-default-500" },
    },
  },
  compoundVariants: [
    // filled
    {
      status: "danger",
      variant: "solid",
      className: {
        wrapper: "bg-danger-100 text-danger-600",
      },
    },
    {
      status: "success",
      variant: "solid",
      className: {
        wrapper: "bg-success-100 text-success-600",
      },
    },
    {
      status: "info",
      variant: "solid",
      className: {
        wrapper: "bg-blue-100 text-blue-600",
      },
    },
    {
      status: "warning",
      variant: "solid",
      className: {
        wrapper: "bg-warning-100 text-warning-600",
      },
    },
    {
      status: "default",
      variant: "solid",
      className: {
        wrapper: "border-divider bg-default-100 text-default-600",
      },
    },
  ],
  defaultVariants: {
    status: "default",
    variant: "outlined",
  },
});

export type AlertVariantProps = VariantProps<typeof alertVariant>;
export type AlertSlots = keyof ReturnType<typeof alertVariant>;
