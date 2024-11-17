import { Alert } from "@jamsr-ui/react";

export const AlertWithDescription = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert heading="Warning!" status="warning">
        Your plan will expire soon, please renew your plan.
      </Alert>

      <Alert heading="Info!" status="info">
        Your Pro account has been verified.
      </Alert>
      <Alert heading="Success!" status="success">
        Your Pro plan has been activated.
      </Alert>
    </div>
  );
};
