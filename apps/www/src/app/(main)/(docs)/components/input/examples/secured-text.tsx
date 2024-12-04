import { Input } from "@jamsr-ui/react";

export const InputSecuredText = () => {
  return (
    <div className="grid gap-2">
      <Input label="Password" type="password" isSecuredText />
      <Input
        label="Password"
        type="password"
        isSecuredText
        variant="outlined"
      />
    </div>
  );
};
