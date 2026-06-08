import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

const apples = [
  { label: "Gala", value: "gala", disabled: true },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp", disabled: true },
  { label: "Granny Smith", value: "granny-smith", disabled: true },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectDisabledItems = () => {
  return (
    <Select items={apples}>
      <Label>Fruit</Label>
      <Select.Trigger className="min-w-40" />
      <Select.Content>
        {apples.map(({ label, value, disabled }) => (
          <Select.Item
            key={label}
            value={value}
            disabled={disabled}
          >
            <Select.ItemIndicator />
            <Select.ItemText>{label}</Select.ItemText>
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  );
};
