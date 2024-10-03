import { Textarea } from "@jamsr-ui/react";
import { Email } from "@jamsr-ui/shared-icons";

export const TextareaWithIcon = () => {
  return (
    <Textarea
      label="Email"
      placeholder="Enter your email"
      startContent={<Email />}
    />
  );
};
