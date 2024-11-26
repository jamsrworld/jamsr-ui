import { Input } from "@jamsr-ui/react";

export const InputClearable = () => {
  return (
    <Input
      label="Username"
      placeholder="Enter your username"
      type="text"
      isClearable
    />
  );
};
