import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectSizes = () => {
  return (
    <div className="min-h-[80px] space-y-2">
      {/* size="sm" */}
      <Select className="max-w-sm" label="Select Label" size="sm">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </Select>

      {/* size="md" */}
      <Select className="max-w-sm" label="Select Label" size="md">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </Select>

      {/* size="lg" */}
      <Select className="max-w-sm" label="Select Label" size="lg">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </Select>
    </div>
  );
};
