import { Input } from "@jamsr-ui/react";

export const InputLabelPlacement = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Enter your email"
        labelPlacement="start"
        variant="outlined"
      />
      <Input label="Enter your email" labelPlacement="top" />
      <Input label="Enter your email" labelPlacement="inside" size="sm" />
      <Input label="Enter your email" labelPlacement="inside" size="md" />
      <Input
        label="Enter your email"
        variant="outlined"
        labelPlacement="inside"
        size="lg"
      />
      <Input placeholder="Enter your email" variant="outlined" size="lg" />
    </div>
  );
};
