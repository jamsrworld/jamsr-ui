import { Radio, RadioGroup } from "@jamsr-ui/react";

export const RadioGroupHorizontal = () => {
  return (
    <RadioGroup
      classNames={{
        content: "flex flex-row gap-4",
        wrapper: "flex flex-row",
      }}
      label="Gender"
      name="gender"
      defaultValue="male"
      helperText="Something went wrong"
      isInvalid
    >
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
