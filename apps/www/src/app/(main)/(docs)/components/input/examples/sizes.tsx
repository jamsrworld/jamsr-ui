import { Input } from "@jamsr-ui/react";

export const InputSizes = () => {
  return (
    <div className="space-y-4">
      <Input label="Small" size="sm" />
      <Input label="Medium" size="md" />
      <Input label="Large" size="lg" />
      <Input label="Small" size="sm" variant="outlined" />
      <Input label="Medium" size="md" variant="outlined" />
      <Input label="Large" size="lg" variant="outlined" />
    </div>
  );
};
