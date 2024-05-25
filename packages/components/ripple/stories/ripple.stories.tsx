import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Ripple } from "../src/ripple";

const meta = {
  title: "Components/Ripple",
  component: Ripple,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Ripple>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  return (
    <div className="grid h-full place-items-center">
      <Ripple />
      Click anywhere
    </div>
  );
};

export const Default: Story = {
  args: {},
  render: Template,
};
