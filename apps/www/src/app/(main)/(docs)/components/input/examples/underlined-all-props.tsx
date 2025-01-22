import { Input } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const InputUnderlinedAllProps = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Underlined Input (small)" size="sm" variant="underlined" />
      <Input label="Underlined Input (medium)" size="md" variant="underlined" />
      <Input label="Underlined Input (large)" size="lg" variant="underlined" />
      <Input label="Underlined Input (Filled)" isFilled variant="underlined" />
      <Input
        placeholder="With placeholder"
        label="Underlined Input"
        variant="underlined"
      />
      <Input placeholder="Without Label" variant="underlined" />
      <Input
        placeholder="With start and end content"
        label="Underlined Input"
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
        variant="underlined"
      />
    </div>
  );
};
