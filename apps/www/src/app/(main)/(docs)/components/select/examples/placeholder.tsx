import { Select, SelectItem } from "@jamsr-ui/react";
import { SelectUsage } from "./usage";

export const SelectPlaceholder = () => {
  return (
    <div className="min-h-[80px]">
      <Select className="max-w-sm" label="Select Label" placeholder="Select as item...">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </Select>
    </div>
  );
};
