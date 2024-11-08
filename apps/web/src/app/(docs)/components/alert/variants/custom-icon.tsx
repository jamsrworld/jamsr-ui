import { Alert } from "@jamsr-ui/react";
import { CloseIcon } from "@jamsr-ui/shared-icons";

export const AlertCustomIcon = () => {
  return (
    <Alert status="info" icon={<CloseIcon className="size-5" />}>
      This is a info message.
    </Alert>
  );
};
