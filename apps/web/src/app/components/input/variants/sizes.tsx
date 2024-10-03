import { Input } from "@jamsr-ui/react";

export const InputSizes = () => {
  return (
    <div className="space-y-4">
      <Input
        label="Small"
        size="sm"
      />
      <Input
        label="Medium"
        size="md"
      />
      <Input
        label="Large"
        size="lg"
      />
    </div>
  );
};
