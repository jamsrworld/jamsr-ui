import { Input } from "@jamsr-ui/react";

export const InputWithoutLabel = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Enter your username" />
      <Input variant="outlined" placeholder="Enter your username" />
    </div>
  );
};
