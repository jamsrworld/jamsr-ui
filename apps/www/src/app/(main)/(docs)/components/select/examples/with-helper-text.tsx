import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectWithHelperText = () => {
  return (
    <div className="min-h-[80px]">
      <Select
        className="max-w-sm"
        label="Select Label"
        helperText="Please choose one of the options"
      >
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </Select>
    </div>
  );
};
