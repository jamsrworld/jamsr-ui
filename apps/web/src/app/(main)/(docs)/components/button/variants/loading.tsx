import { Button } from "@jamsr-ui/react";

export const ButtonLoading = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button color="primary" isDisabled>
        Loading...
      </Button>
      <Button isLoading color="secondary">
        Saving...
      </Button>
      <Button isLoading color="success">
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
