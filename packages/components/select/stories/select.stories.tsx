import { type Meta, type StoryObj } from "@storybook/react";
import { Select, SelectItem } from "../src";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  return (
    <div className="min-h-[200px]">
      <Select
        className="max-w-md"
        label="Select Label"
      >
        <SelectItem value="Apple">THis Apple</SelectItem>
        <SelectItem value="Blueberry">Blueberry</SelectItem>
        <SelectItem value="Watermelon">Watermelon</SelectItem>
        <SelectItem value="Banana">Banana</SelectItem>
        <SelectItem value="Orange">Orange</SelectItem>
      </Select>
    </div>
  );
};

const MultipleTemplate = () => {
  return (
    <Select
      className="max-w-md"
      label="Select Label"
      multiple
      closeOnSelection={false}
    >
      {Array(200)
        .fill(null)
        .map((_, idx) => {
          return (
            <SelectItem
              key={idx}
              value={`option${idx}`}
            >
              Option {idx}
            </SelectItem>
          );
        })}
    </Select>
  );
};

export const Default: Story = {
  render: Template,
};

export const Multiple: Story = {
  render: MultipleTemplate,
};
