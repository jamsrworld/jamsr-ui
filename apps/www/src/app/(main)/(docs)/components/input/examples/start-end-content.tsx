import { Input } from "@jamsr-ui/react";
import { div } from "framer-motion/client";

export const InputWithStartContent = () => {
  return (
    <div className="space-y-2">
      <Input
      label="Amount"
      startContent={<span className="text-foreground-400">$</span>}
    />

    <Input
      label="Discount"
      endContent={<span className="text-foreground-400">%</span>}
    />
    </div>
  );
};
