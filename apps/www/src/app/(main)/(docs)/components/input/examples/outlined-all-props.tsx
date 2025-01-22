import { Input } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const InputOutlinedAllProps = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Outlined Input (small)" size="sm" variant="outlined" />
      <Input label="Outlined Input (medium)" size="md" variant="outlined" />
      <Input label="Outlined Input (large)" size="lg" variant="outlined" />
      <Input label="Outlined Input (Filled)" isFilled variant="outlined" />
      <Input
        label="Outlined Input"
        placeholder="Input Placeholder"
        variant="outlined"
      />
      <Input placeholder="Without Label" variant="outlined" />
      <Input
        placeholder="With start and end content"
        label="Outlined Input"
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
        variant="outlined"
      />
    </div>
  );
};
