import { Switch } from "@jamsr-ui/react";

export const SwitchInvalidState = () => {
  return (
    <Switch
      label="Are you ok?"
      description="This is a description"
      isInvalid
      helperText="This field is required"
    />
  );
};
