import { Input } from "@jamsr-ui/react";

export const InputErrorState = () => {
  return (
    <Input
      label="Username"
      helperText="Please use a unique username"
      isInvalid
    />
  );
};
