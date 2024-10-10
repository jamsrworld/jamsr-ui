import { Input } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const InputWithIcon = () => {
  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      type="email"
      startContent={<EmailIcon />}
    />
  );
};
