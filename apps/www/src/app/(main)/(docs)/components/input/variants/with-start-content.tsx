import { Input } from "@jamsr-ui/react";

export const InputWithStartContent = () => {
  return (
    <Input
      label="Amount"
      startContent={<span className="text-foreground-400">$</span>}
    />
  );
};
