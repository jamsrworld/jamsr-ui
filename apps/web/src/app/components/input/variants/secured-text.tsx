import { Input } from "@jamsr-ui/react";

export const InputSecuredText = () => {
  return (
    <Input
      label="Password"
      type="password"
      isSecuredText
    />
  );
};
