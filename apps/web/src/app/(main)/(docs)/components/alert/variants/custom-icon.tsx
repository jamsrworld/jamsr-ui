import { Alert } from "@jamsr-ui/react";
import { TrashIcon, RefreshIcon, StarIcon } from "@jamsr-ui/shared-icons";

export const AlertCustomIcon = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert
        status="warning"
        variant="solid"
        icon={<TrashIcon className="size-5" />}
      >
        This is a warning message.
      </Alert>
      <Alert
        status="info"
        variant="solid"
        icon={<RefreshIcon className="size-5" />}
      >
        This is an info message.
      </Alert>
      <Alert
        status="success"
        variant="solid"
        icon={<StarIcon className="size-5" />}
      >
        Your Pro plan has been activated.
      </Alert>
    </div>
  );
};
