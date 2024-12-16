import { Input } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const InputOutlinedAllProps = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Enter your email (small)" size="sm" variant="outlined" />
      <Input label="Enter your email (middle)" size="md" variant="outlined" />
      <Input label="Enter your email (large)" size="lg" variant="outlined" />
      <Input label="Enter your email" isFilled variant="outlined" />
      
      <Input
        placeholder="Enter your email"
        label="Enter your email"
        startContent={<EmailIcon />}
        endContent={<EmailIcon />}
        variant="outlined"
        size="lg"
      />
    </div>
  );
};
