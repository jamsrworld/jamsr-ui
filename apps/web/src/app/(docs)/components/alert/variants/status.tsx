import { Alert, type AlertProps } from "@jamsr-ui/react";

export const AlertStatus = (props: AlertProps) => {
  const statuses: AlertProps["status"][] = [
    "info",
    "success",
    "warning",
    "danger",
    "default",
  ];

  return (
    <div className="grid gap-4">
      {statuses.map((status) => (
        <Alert
          key={status}
          status={status}
          className="capitalize"
          heading={status}
          {...props}
        >
          This is a description message for {status}
        </Alert>
      ))}
    </div>
  );
};
