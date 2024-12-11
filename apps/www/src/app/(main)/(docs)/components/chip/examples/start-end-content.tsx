import { Chip } from "@jamsr-ui/react";
import { CheckIcon, EmailIcon } from "@jamsr-ui/shared-icons";

export const StartEndContent = () => {
  return (
    <div className="flex gap-4">
      <Chip startContent={<EmailIcon />}>Default</Chip>
      <Chip variant="flat" color="primary" startContent={<EmailIcon />}>
        Default
      </Chip>
      <Chip endContent={<CheckIcon />}>Default</Chip>
      <Chip variant="outlined" color="secondary" endContent={<CheckIcon />}>
        Default
      </Chip>
    </div>
  );
};
