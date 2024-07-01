import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Ripple } from "../src/ripple";

const meta: Meta<typeof Ripple> = {
  title: "Components/Ripple",
  component: Ripple,
  args: {
    onClick: fn(),
  },
};

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
