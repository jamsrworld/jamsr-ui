import { type Meta, type StoryObj } from "@storybook/react";
import { Link } from "../src/link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Go to homepage",
  },
};
