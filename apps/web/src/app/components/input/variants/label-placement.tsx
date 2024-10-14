import { Input } from "@jamsr-ui/react";
import { EmailIcon, InfoIcon } from "@jamsr-ui/shared-icons";

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
        placeholder="Enter your email"
        label="Enter your email"
        variant="outlined"
        labelPlacement="inside"
        labelHelperContent={
          <InfoIcon className="m-2 size-4 text-foreground-500" />
        }
        size="lg"
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
      />
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
