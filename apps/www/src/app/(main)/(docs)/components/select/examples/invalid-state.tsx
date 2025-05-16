import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectInvalidState = () => {
  return (
    <div className="min-h-[80px]">
      <Select
        className="max-w-sm"
        label="Select Label"
        placeholder="Choose Fruit"
        isInvalid
        errorMessage="This field is required"
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
