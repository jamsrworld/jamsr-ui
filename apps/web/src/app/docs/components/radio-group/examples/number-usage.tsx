"use client";

import { Field } from "jamsrui/field";
import { Label } from "jamsrui/label";
import { Radio, RadioGroup } from "jamsrui/radio-group";
import { useState } from "react";

enum Gender {
  MALE = 1,
  FEMALE = 2,
}

export const RadioNumberUsage = (props: Partial<RadioGroup.Props>) => {
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  return (
    <RadioGroup
      value={gender}
      onValueChange={setGender}
      {...props}
    >
      <Label>Select Gender</Label>
      <Field orientation="horizontal">
        <Radio value={Gender.MALE} />
        <Field.Label>Male</Field.Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value={Gender.FEMALE} />
        <Field.Label>Female</Field.Label>
      </Field>
    </RadioGroup>
  );
};
