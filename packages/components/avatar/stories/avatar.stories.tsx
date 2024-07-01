import { type Meta, type StoryObj } from "@storybook/react";
import { Avatar } from "../src/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    alt: "img",
    className: "flex",
    src: "http://placekitten.com/200/300",
  },
};
