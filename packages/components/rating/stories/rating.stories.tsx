import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Rating } from "../src";
import { RatingProps } from "../src/rating";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: RatingProps) => {
  return <Rating label="Rate your feedback!" {...props} />;
};

export const Default: Story = {
  render: Template,
};

export const Readonly: Story = {
  render: () => <Template isReadonly defaultValue={5} />,
};

export const Disabled: Story = {
  render: () => <Template isDisabled />,
};

export const DefaultValue: Story = {
  render: () => <Template defaultValue={3} />,
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(2);
    return (
      <Template
        value={value}
        onValueChange={setValue}
        helperText={`value is: ${value}`}
      />
    );
  },
};

export const HelperText: Story = {
  render: () => <Template helperText="Helper text" />,
};

export const IsInvalid: Story = {
  render: () => <Template helperText="Rating is required" isInvalid />,
};
