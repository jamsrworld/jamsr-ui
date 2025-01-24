import { Alert, type AlertProps } from "@jamsr-ui/react";

export const AlertRadius = () => {
  const radius: AlertProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="grid gap-4">
      {radius.map((radius) => (
        <Alert key={radius} radius={radius} status="info">
          {radius}: This is an {radius} Radius Alert
        </Alert>
      ))}
    </div>
  );
};
