import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectHorizontal = () => {
  return (
    <div className="min-h-[80px] max-w-sm">
      <Select
        label="Select Label"
        placeholder="Choose Fruit"
        isInvalid
        errorMessage="This field is required"
        classNames={{
          mainWrapper: "flex flex-row items-center",
          label: "w-1/2",
        }}
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
