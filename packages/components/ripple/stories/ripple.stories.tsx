import { type Meta, type StoryObj } from "@storybook/react";
import { Ripple } from "../src/ripple";

const meta: Meta<typeof Ripple> = {
  title: "Components/Ripple",
  component: Ripple,
  args: {},
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
