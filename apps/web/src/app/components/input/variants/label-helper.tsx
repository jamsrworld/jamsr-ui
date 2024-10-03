import { Input, Popover } from "@jamsr-ui/react";
import { Info } from "@jamsr-ui/shared-icons";

export const InputLabelHelper = () => {
  return (
    <div className="space-y-4">
      <Input
        label="Password"
        labelHelperContent={
          <Popover
            trigger={<Info className="text-foreground-secondary size-4" />}
          >
            Password must be at least 8 characters
          </Popover>
        }
      />
      <Input
        label="Password"
        labelHelperContent={<a className="ml-auto text-xs">Forgot Password?</a>}
      />
    </div>
  );
};
