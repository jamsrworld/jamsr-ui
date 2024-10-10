import { Textarea } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const TextareaWithIcon = () => {
  return (
    <Textarea
      label="Email"
      placeholder="Enter your email"
      startContent={<EmailIcon />}
    />
  );
};
