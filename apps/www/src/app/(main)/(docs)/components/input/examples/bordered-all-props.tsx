import { Input } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const InputBorderedAllProps = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Bordered Input (small)" size="sm" variant="bordered" />
      <Input label="Bordered Input (medium)" size="md" variant="bordered" />
      <Input label="Bordered Input (large)" size="lg" variant="bordered" />
      <Input label="Bordered Input (Filled)" isFilled variant="bordered" />
      <Input
        label="Bordered Input"
        placeholder="Input Placeholder"
        variant="bordered"
      />
      <Input placeholder="Without Label" variant="bordered" />
      <Input
        placeholder="With start and end content"
        label="Bordered Input"
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
        variant="bordered"
      />
    </div>
  );
};
