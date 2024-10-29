import { Alert } from "@jamsr-ui/react";

export const WithoutIcon = () => {
  return (
    <Alert
      severity="warning"
      icon={null}
    >
      This is a warning message.
    </Alert>
  );
};
