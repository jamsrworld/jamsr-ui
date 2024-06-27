import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select, SelectItem, SelectProps } from "../src";
import { SelectionSet } from "../src/use-select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: Partial<SelectProps>) => {
  return (
    <div className="min-h-[200px]">
      <Select
        className="max-w-sm"
        label="Select Label"
        {...props}
      >
        <SelectItem value="Apple">
          <div>HIi div</div> THis Apple
        </SelectItem>
        <SelectItem value="Blueberry">Blueberry</SelectItem>
        <SelectItem value="Watermelon">Watermelon</SelectItem>
        <SelectItem value="Banana">Banana</SelectItem>
        <SelectItem value="Orange">Orange</SelectItem>
      </Select>
    </div>
  );
};

export const Default: Story = {
  render: () => <Template />,
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<SelectionSet>(new Set([""]));
    return (
      <Template
        value={value}
        onValueChange={setValue}
        helperText={`Selected Value: ${Array.from(value)}`}
      />
    );
  },
};

export const ChangePlaceholder: Story = {
  render: () => <Template placeholder="Select as item..." />,
};

export const WithoutLabel: Story = {
  render: () => (
    <Template
      placeholder="Select as item..."
      label={undefined}
    />
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Template
      placeholder="Select as item..."
      helperText="Please choose one of the options"
    />
  ),
};

export const InvalidState: Story = {
  render: () => (
    <Template
      placeholder="Choose Fruit"
      isInvalid
      helperText="This field is required"
    />
  ),
};

export const CustomRenderValue: Story = {
  render: () => (
    <Template
      placeholder="Choose Fruit"
      renderValue={(value) => {
        console.log("value:->", value);
        return `Selected value is ${value}`;
      }}
    />
  ),
};

const MultipleTemplate = () => {
  return (
    <div className="min-h-[300px]">
      <Select
        className="max-w-md"
        label="Select Label"
        isMultiple
      >
        {Array(20)
          .fill(null)
          .map((_, idx) => {
            const value = `option${idx}`;
            return (
              <SelectItem
                key={value}
                value={value}
              >
                {`Option ${ idx }`}
              </SelectItem>
            );
          })}
      </Select>
    </div>
  );
};

export const Multiple: Story = {
  render: MultipleTemplate,
};
