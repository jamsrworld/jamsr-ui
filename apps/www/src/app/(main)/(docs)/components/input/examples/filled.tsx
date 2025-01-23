import { Input } from "@jamsr-ui/react";

export const InputFilled = () => {
  return (
    <div className="space-y-4">
      <Input label="Standard" isFilled variant="standard" />
      <Input label="Outlined" isFilled variant="outlined" />
      <Input label="Bordered" isFilled variant="bordered" />
      <Input label="Underlined" isFilled variant="underlined" />
    </div>
  );
};
