import { type Meta, type StoryObj } from "@storybook/react";
import { Select, SelectItem } from "../src";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  return (
    <Select
      className="max-w-md"
      label="Select Label"
    >
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
    </Select>
  );
};

const MultipleTemplate = () => {
  return (
    <Select
      className="max-w-md"
      label="Select Label"
      multiple
    >
      {Array(20)
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
  args: {},
};

export const Multiple: Story = {
  render: MultipleTemplate,
  args: {},
};
