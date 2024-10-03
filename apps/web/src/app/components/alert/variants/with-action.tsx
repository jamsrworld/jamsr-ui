import { Alert, Button } from "@jamsr-ui/react";

export const AlertWithAction = () => {
  return (
    <Alert
      severity="warning"
      heading="Warning!"
      action={
        <Button
          variant="light"
          color="warning"
        >
          Renew Now!
        </Button>
      }
    >
      Your plan will expire soon, please renew your plan.
    </Alert>
  );
};
