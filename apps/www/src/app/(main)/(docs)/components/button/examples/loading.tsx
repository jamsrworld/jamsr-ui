import { ArrowRightIcon } from "@/components/icons";
import { Button, CircularProgress } from "@jamsr-ui/react";

export const ButtonLoading = () => {
  return (
    <div className="flex flex-row gap-4">
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
      <Button
        color="primary"
        isLoading
        spinner={<CircularProgress size={18} strokeWidth={2} />}
      >
        Loading...
      </Button>
    </div>
  );
};
