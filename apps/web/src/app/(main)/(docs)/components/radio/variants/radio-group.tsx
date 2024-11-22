import { Radio, RadioGroup } from "@jamsr-ui/react";

export const RadioGroupUsage = () => {
  return (
    <RadioGroup label="Gender" name="gender" defaultValue="male">
      <Radio name="gender" value="male">
        Male
      </Radio>
      <Radio name="gender" value="female">
        Female
      </Radio>
      <Radio name="gender" value="other">
        Other
      </Radio>
    </RadioGroup>
  );
};
