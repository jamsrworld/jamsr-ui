import { Textarea } from "@jamsr-ui/react";

export const TextareaRequired = () => {
  return (
    <Textarea
      label="Enter your username"
      isRequired
    />
  );
};
