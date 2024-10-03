import { Input } from "@jamsr-ui/react";
import { Email } from "@jamsr-ui/shared-icons";

export const InputWithIcon = () => {
  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      type="email"
      startContent={<Email />}
    />
  );
};
