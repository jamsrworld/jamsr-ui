import { Textarea } from "@jamsr-ui/react";

export const TextareaErrorState = () => {
  return (
    <Textarea
      label="Username"
      helperText="Please use a unique username"
      isInvalid
    />
  );
};
