import { Textarea } from "@jamsr-ui/react";

export const TextareaSizes = () => {
  return (
    <div className="space-y-4">
      <Textarea
        label="Small"
        size="sm"
      />
      <Textarea
        label="Medium"
        size="md"
      />
      <Textarea
        label="Large"
        size="lg"
      />
    </div>
  );
};
