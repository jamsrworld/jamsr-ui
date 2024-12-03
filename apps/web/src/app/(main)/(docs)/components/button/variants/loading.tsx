import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@jamsr-ui/react";

export const ButtonLoading = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button color="primary" isDisabled>
        Loading...
      </Button>
      <Button isLoading spinnerPlacement="end" color="secondary">
        Saving...
      </Button>
      <Button startContent={<ArrowRightIcon />} isLoading color="success">
        Success
      </Button>
      <Button isLoading color="warning">
        Warning
      </Button>
      <Button isLoading color="danger">
        Danger
      </Button>
    </div>
  );
};
