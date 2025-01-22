import { Input } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const InputStandardAllProps = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Standard Input (Small)" size="sm" variant="standard" />
      <Input label="Standard Input (Medium)" size="md" variant="standard" />
      <Input label="Standard Input (Large)" size="lg" variant="standard" />
      <Input label="Standard Input (Filled)" isFilled variant="standard" />
      <Input
        label="Standard Input (Placeholder)"
        placeholder="Standard Input Placeholder"
        variant="standard"
      />
      <Input placeholder="Without Label" variant="standard" />
      <Input
        placeholder="Standard Input"
        label="End and start content"
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
        variant="standard"
      />
    </div>
  );
};
