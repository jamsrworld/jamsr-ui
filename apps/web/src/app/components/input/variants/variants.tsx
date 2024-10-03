import { Input } from "@jamsr-ui/react";

export const InputVariants = () => {
  return (
    <div className="space-y-4">
      <Input
        label="Outline"
        variant="outline"
      />
      <Input
        label="Filled"
        variant="filled"
      />
      <Input
        label="Transparent"
        variant="transparent"
      />
    </div>
  );
};
