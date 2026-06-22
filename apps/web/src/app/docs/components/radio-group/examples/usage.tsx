"use client";

import { Field } from "ui/field";
import { Label } from "ui/label";
import { Radio, RadioGroup } from "ui/radio-group";

export const RadioUsage = (props: RadioGroup.Props) => {
  return (
    <RadioGroup {...props}>
      <Label>Select your favorite city</Label>
      <Field orientation="horizontal">
        <Radio value="buenos-aires" />
        <Field.Label>Buenos Aires</Field.Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="sydney" />
        <Field.Label>Sydney</Field.Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="san-francisco" />
        <Field.Label>San Francisco</Field.Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="london" />
        <Field.Label>London</Field.Label>
      </Field>
      <Field orientation="horizontal">
        <Radio value="tokyo" />
        <Field.Label>Tokyo</Field.Label>
      </Field>
    </RadioGroup>
  );
};
