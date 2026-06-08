import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectDisabled = () => {
  return (
    <Select
      items={apples}
      disabled
    >
      <Label>Fruit</Label>
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
    </Select>
  );
};
