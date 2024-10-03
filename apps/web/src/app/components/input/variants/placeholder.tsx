import { Input } from "@jamsr-ui/react";

export const InputPlaceholder = () => {
  return (
    <div className="space-y-4">
      <Input
        label="Small"
        size="sm"
        placeholder="Input your username"
      />
      <Input
        label="Medium"
        size="md"
        placeholder="Input your username"
      />
      <Input
        label="Large"
        size="lg"
        placeholder="Input your username"
      />
    </div>
  );
};
