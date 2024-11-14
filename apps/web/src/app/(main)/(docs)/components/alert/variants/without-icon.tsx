import { Alert } from "@jamsr-ui/react";

export const WithoutIcon = () => {
  return (
    <Alert
      status="warning"
      icon={null}
    >
      This is a warning message.
    </Alert>
  );
};
