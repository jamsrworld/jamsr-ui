import { Input } from "@jamsr-ui/react";
import { EyeClosedIcon } from "@jamsr-ui/shared-icons";

export const InputClearable = () => {
  return (
    <Input
      label="Username"
      placeholder="Enter your username"
      type="text"
      isClearable
      endContent={<EyeClosedIcon />}
    />
  );
};
