import { Field } from "jamsrui/field";
import { Select } from "jamsrui/select";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectWithErrorMessage = () => {
  return (
    <Field>
      <Select
        items={apples}
        isInvalid
      >
        <Field.Label>Fruit</Field.Label>
        <Select.Trigger className="min-w-40" />
        <Select.Content>
          {apples.map(({ label, value }) => (
            <Select.Item
              key={label}
              value={value}
            >
              <Select.ItemIndicator />
              <Select.ItemText>{label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
        <Field.Error match>Please select a fruit</Field.Error>
      </Select>
    </Field>
  );
};
