import { Textarea } from "@jamsr-ui/react";

export const TextareaWithEndContent = () => {
  return (
    <Textarea
      label="Discount"
      endContent={<span className="text-foreground-400">%</span>}
    />
  );
};
