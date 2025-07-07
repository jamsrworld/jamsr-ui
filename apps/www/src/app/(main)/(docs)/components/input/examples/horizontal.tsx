import { Input } from "@jamsr-ui/react";

export const InputHorizontal = () => {
  return (
    <Input
      label="Username"
      errorMessage="Please use a unique username"
      isInvalid
      classNames={{
        mainWrapper: "flex-row items-center",
        labelWrapper: "w-1/2 shrink-0",
      }}
    />
  );
};
