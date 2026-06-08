"use client";

import { Field } from "jamsrui/field";
import { Label } from "jamsrui/label";
import { Radio, RadioGroup } from "jamsrui/radio-group";
import { useState } from "react";

enum Gender {
  MALE = 1,
  FEMALE = 2,
}

export const RadioNumberUsage = () => {
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  return (
    <RadioGroup
      value={gender}
      onValueChange={setGender}
    >
      <Label>Select your favorite city</Label>
      <Field orientation="horizontal">
        <Radio value={Gender.MALE} />
        <Field.Label>Buenos Aires</Field.Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value={Gender.FEMALE} />
        <Field.Label>Sydney</Field.Label>
      </Field>
    </RadioGroup>
  );
};
