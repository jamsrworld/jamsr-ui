import { Alert } from "@jamsr-ui/react";

export const WithoutIcon = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning" variant="solid" icon={null}>
        This is a warning message.
      </Alert>

      <Alert status="info" variant="solid" icon={null}>
        This is an info message.
      </Alert>

      <Alert status="success" variant="solid" icon={null}>
        This is an success message.
      </Alert>
    </div>
  );
};
