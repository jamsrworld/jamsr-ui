import { Button } from "@jamsr-ui/react";

export const ButtonSizes = () => {
  return (
    <div className="flex items-center gap-4">
      <Button size="xs">X Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
};
