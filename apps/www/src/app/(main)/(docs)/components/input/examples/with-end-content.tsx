import { Input } from "@jamsr-ui/react";

export const InputWithEndContent = () => {
  return (
    <Input
      label="Discount"
      endContent={<span className="text-foreground-400">%</span>}
    />
  );
};
