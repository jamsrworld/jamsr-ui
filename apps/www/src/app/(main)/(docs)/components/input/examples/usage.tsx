import { Input } from "@jamsr-ui/react";

export const InputUsage = () => {
  return (
    <div>
      <Input label="Enter your email" type="email" />
      <fieldset className="border-2 border-default-200">
        <legend className="px-2">Fieldset</legend>
      </fieldset>
    </div>
  );
};
