import { Textarea } from "@jamsr-ui/react";

export const TextareaVariants = () => {
  return (
    <div className="space-y-4">
      <Textarea
        label="Outline"
        variant="outline"
      />
      <Textarea
        label="Filled"
        variant="filled"
      />
      <Textarea
        label="Transparent"
        variant="transparent"
      />
    </div>
  );
};
