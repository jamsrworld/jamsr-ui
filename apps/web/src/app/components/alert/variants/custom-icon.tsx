import { Alert } from "@jamsr-ui/react";
import { CloseIcon } from "@jamsr-ui/shared-icons";

export const AlertCustomIcon = () => {
  return (
    <Alert
      severity="danger"
      icon={<CloseIcon />}
    >
      This is a error message.
    </Alert>
  );
};
