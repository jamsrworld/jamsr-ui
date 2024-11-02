import { Alert, Button } from "@jamsr-ui/react";

export const AlertWithAction = () => {
  return (
    <div className="flex flex-col gap-2">
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
    <Alert
      severity="success"
      heading="Success"
      action={
        <Button
          variant="solid"
          color="success"
        >
          Let's start!
        </Button>
      }
    >
      Your Pro plan has been activated.
    </Alert>
    </div>
  );
};
