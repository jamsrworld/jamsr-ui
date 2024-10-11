import { Input } from "@jamsr-ui/react";

export const InputVariants = () => {
  return (
    <div className="space-y-4">
      <Input
        label="Outlined"
        variant="outlined"
      />
      <Input
        label="Filled"
        variant="filled"
      />
    </div>
  );
};
