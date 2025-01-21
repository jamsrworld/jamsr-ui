import { Input } from "@jamsr-ui/react";

export const InputVariants = () => {
  return (
    <div className="space-y-4">
      <Input label="Outlined" variant="outlined" />
      <Input label="Standard" variant="standard" placeholder="Standard Input" />
      <Input label="Underlined" variant="underlined" placeholder="Underlined Input" />
    </div>
  );
};
