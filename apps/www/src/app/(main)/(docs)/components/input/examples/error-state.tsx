import { Input } from "@jamsr-ui/react";

export const InputErrorState = () => {
  return (
    <Input
      label="Username"
      errorMessage="Please use a unique username"
      isInvalid
    />
  );
};
