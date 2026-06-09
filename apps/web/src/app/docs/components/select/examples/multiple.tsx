"use client";

import { Field } from "ui/field";
import { Select } from "ui/select";
import React from "react";

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

export const SelectMultiple = (props: Partial<Select.Props>) => {
  const { multiple = true, ...rest } = props;
  return (
    <Field>
      <Field.Label>Language</Field.Label>
      <Select
        multiple={multiple}
        {...rest}
      >
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
    </Field>
  );
};
