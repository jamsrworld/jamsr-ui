import { type AlertProps } from "@jamsr-ui/react";
import { AlertStatus } from "./status";

export const AlertVariants = () => {
  const variants: AlertProps["variant"][] = ["outlined", "solid"];

  return (
    <div className="grid gap-4">
      {variants.map((variant) => (
        <AlertStatus key={variant} variant={variant} />
      ))}
    </div>
  );
};
