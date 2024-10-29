import { Alert, type AlertProps } from "@jamsr-ui/react";

export const AlertSeverity = (props: AlertProps) => {
  const severity: AlertProps["severity"][] = [
    "info",
    "success",
    "warning",
    "danger",
    "default",
  ];

  return (
    <div className="grid gap-4">
      {severity.map((severity) => (
        <Alert
          key={severity}
          severity={severity}
          className="capitalize"
          heading={severity}
          {...props}
        >
          This is a description message for {severity}
        </Alert>
      ))}
    </div>
  );
};
