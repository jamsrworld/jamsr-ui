import { Input } from "@jamsr-ui/react";

export const InputRequiredOptional = () => {
  return (
    <div className="space-y-2">
      <Input label="Enter your username" isRequired />

      <Input label="Enter your address" isOptional />
    </div>
  );
};
