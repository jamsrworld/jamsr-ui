import { Alert } from "@jamsr-ui/react";

export const AlertWithDescription = () => {
  return (
    <Alert
      heading="Warning!"
      status="warning"
    >
      This is a warning message.
    </Alert>
  );
};
