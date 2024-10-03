import { Alert } from "@jamsr-ui/react";
import { Close } from "@jamsr-ui/shared-icons";

export const AlertCustomIcon = () => {
  return (
    <Alert
      severity="danger"
      icon={<Close />}
    >
      This is a error message.
    </Alert>
  );
};
