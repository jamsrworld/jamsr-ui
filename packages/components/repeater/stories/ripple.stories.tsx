import { type Meta, type StoryObj } from "@storybook/react";
import { Repeater } from "../src/repeater";

const meta: Meta<typeof Repeater> = {
  title: "Components/Repeater",
  component: Repeater,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  return (
    <Repeater repeat={5}>
      <div className="p-2">I am repeated</div>
    </Repeater>
  );
};

export const Default: Story = {
  render: Template,
};
