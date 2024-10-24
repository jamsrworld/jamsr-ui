import { Alert } from "@jamsr-ui/react";
import { CloseIcon } from "@jamsr-ui/shared-icons";

export const AlertCustomIcon = () => {
  return (
    <Alert severity="danger" icon={<CloseIcon className="size-5" />}>
      This is a error message.
    </Alert>
  );
};
