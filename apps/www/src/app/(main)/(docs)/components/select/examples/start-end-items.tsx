import { EmailIcon } from "@jamsr-ui/shared-icons";
import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectStartEndItems = () => {
  return (
    

      <div className="min-h-[80px] space-y-2">
        <Select
          className="max-w-sm"
          label="Select Label"
          startContent="$"
          endContent="%"
        >
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="watermelon">Watermelon</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </Select>

        <Select
          className="max-w-sm"
          label="Select Label"
          startContent={<EmailIcon />}
          endContent={<EmailIcon />}
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
