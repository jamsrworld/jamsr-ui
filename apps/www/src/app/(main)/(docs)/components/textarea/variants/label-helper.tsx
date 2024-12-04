import { Popover, Textarea } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const TextareaLabelHelper = () => {
  return (
    <div className="space-y-4">
      <Textarea
        label="Password"
        labelHelperContent={
          <Popover
            trigger={<InfoIcon className="size-4 text-foreground-secondary" />}
          >
            Password must be at least 8 characters
          </Popover>
        }
      />
      <Textarea
        label="Password"
        labelHelperContent={
          <div className="ml-auto text-xs">Forgot Password?</div>
        }
      />
    </div>
  );
};
