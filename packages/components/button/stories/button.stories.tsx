import { Info } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import type { ButtonProps } from "../src/button";
import { Button } from "../src/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

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

export const Loading: Story = {
  args: { isLoading: true, children: "Submit" },
};
