import { Info } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../src/button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "default",
    children: "Button",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Button",
    startContent: <Info />,
    endContent: <Info />,
  },
};

export const IconButton: Story = {
  args: {
    children: <Info />,
    isIconOnly: true,
  },
  parameters: {
    controls: {
      exclude: [],
    },
  },
};
