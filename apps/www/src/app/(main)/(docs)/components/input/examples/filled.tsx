import { Input } from "@jamsr-ui/react";

export const InputFilled = () => {
  return (
    <div className="space-y-4">
      <Input label="Outlined" isFilled variant="outlined" />
      <Input label="Standard" isFilled variant="standard" />
    </div>
  );
};
