import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectMultiple = () => {
  return (
    <Select className="max-w-md" label="Select Label" isMultiple>
      {Array(20)
        .fill(null)
        .map((_, idx) => {
          const value = `option${idx}`;
          return (
            <SelectItem key={value} value={value}>
              {`Option ${idx}`}
            </SelectItem>
          );
        })}
    </Select>
  );
};
