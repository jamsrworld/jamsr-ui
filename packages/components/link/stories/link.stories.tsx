import { type Meta, type StoryObj } from "@storybook/react";
import { Link } from "../src/link";

const meta = {
  title: "Components/Link",
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Go to homepage",
  },
};
