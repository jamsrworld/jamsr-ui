"use client";

import { Field } from "jamsrui/field";
import { Label } from "jamsrui/label";
import { Radio, RadioGroup } from "jamsrui/radio-group";
import { Tabs } from "jamsrui/tabs";
import { useState } from "react";

type Color = NonNullable<Radio.Props["color"]>;

export const RadioColors = () => {
  const colors: Color[] = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  const [color, setColor] = useState<Color>("primary");

  return (
    <>
      <Tabs defaultValue="primary">
        <Tabs.List>
          {colors.map((color) => (
            <Tabs.Tab
              value={color}
              key={color}
              onClick={() => setColor(color)}
            >
              {color}
            </Tabs.Tab>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs>

      <RadioGroup color={color}>
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
    </>
  );
};
