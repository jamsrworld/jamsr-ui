"use client";

import { Description } from "ui/description";
import { Label } from "ui/label";
import { Select } from "ui/select";
import React, { useState } from "react";

const languages = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  csharp: "C#",
  php: "PHP",
  cpp: "C++",
  rust: "Rust",
  go: "Go",
  swift: "Swift",
};
type Language = keyof typeof languages;

const values = Object.keys(languages) as Language[];

function renderValue(value: Language[]) {
  if (value.length === 0) {
    return "Select languages…";
  }
  const firstLanguage = languages[value[0]!];
  const additionalLanguages =
    value.length > 1 ? ` (+${value.length - 1} more)` : "";
  return firstLanguage + additionalLanguages;
}

export const SelectMultipleControlled = (
  props: Partial<React.ComponentProps<typeof Select>>,
) => {
  const [value, setValue] = useState<Language[]>([]);
  const { multiple = true, ...rest } = props;
  return (
    <div className="flex flex-col gap-2">
      <Select
        multiple={multiple}
        value={value}
        onValueChange={(val) => setValue(val as Language[])}
        {...rest}
      >
        <Label>Language</Label>
        <Select.Trigger className="min-w-80">
          <Select.Value>
            {(value) => {
              return renderValue(value as Language[]);
            }}
          </Select.Value>
          <Select.Icon />
        </Select.Trigger>
        <Select.Content>
          {values.map((value) => {
            return (
              <Select.Item
                key={value}
                value={value}
              >
                <Select.ItemIndicator />
                <Select.ItemText>{languages[value]}</Select.ItemText>
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select>
      <Description>Selected values: {value.join(", ")}</Description>
    </div>
  );
};
