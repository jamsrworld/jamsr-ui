import { AlertProps } from "@jamsr-ui/react";
import { AlertSeverity } from "./severity";

export const AlertVariants = () => {
  const variants: AlertProps["variant"][] = ["filled", "outline"];

  return (
    <div className="grid gap-4">
      {variants.map((variant) => (
        <AlertSeverity
          key={variant}
          variant={variant}
        />
      ))}
    </div>
  );
};
