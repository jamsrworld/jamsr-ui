import { Textarea } from "@jamsr-ui/react";

export const TextareaVariants = () => {
  return (
    <div className="space-y-4">
      <Textarea label="Standard" variant="standard" />
      <Textarea label="Outlined" variant="outlined" />
    </div>
  );
};
