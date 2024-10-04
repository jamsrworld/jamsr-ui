import { Input, Popover } from "@jamsr-ui/react";
import { Info } from "@jamsr-ui/shared-icons";

export const InputLabelHelper = () => {
  return (
    <div className="space-y-4">
      <Input
        label="Password"
        labelHelperContent={
          <Popover
            trigger={<Info className="size-4 text-foreground-secondary" />}
          >
            Password must be at least 8 characters
          </Popover>
        }
      />
      <Input
        label="Password"
        labelHelperContent={
          <div className="ml-auto text-xs">Forgot Password?</div>
        }
      />
    </div>
  );
};
