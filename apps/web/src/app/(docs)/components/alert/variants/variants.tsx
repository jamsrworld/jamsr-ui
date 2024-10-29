import { type AlertProps } from "@jamsr-ui/react";
import { AlertSeverity } from "./severity";

export const AlertVariants = () => {
  const variants: AlertProps["variant"][] = ["outlined", "solid"];

  return (
    <div className="grid gap-4">
      {variants.map((variant) => (
        <AlertSeverity key={variant} variant={variant} />
      ))}
    </div>
  );
};
