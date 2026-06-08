import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

const SelectUsage = (props: { size: Select.Props["size"] }) => {
  const { size } = props;
  return (
    <Select
      size={size}
      items={apples}
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

export const SelectSizes = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <SelectUsage size="sm" />
      <SelectUsage size="md" />
      <SelectUsage size="lg" />
    </div>
  );
};
