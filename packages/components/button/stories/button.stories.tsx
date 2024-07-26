import { Info } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import type { ButtonProps } from "../src/button";
import { Button } from "../src/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
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

export const Variants: Story = {
  render: () => {
    const variants: ButtonProps["variant"][] = [
      "light",
      "link",
      "outline",
      "shadow",
      "solid",
    ];

    const colors: ButtonProps["color"][] = [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ];

    return (
      <div className="flex flex-col gap-4">
        {variants.map((variant) => {
          return (
            <div key={variant} className="flex gap-4">
              {colors.map((color) => (
                <Button
                  key={`${variant}-${color}`}
                  variant={variant}
                  color={color}
                >
                  {variant}
                </Button>
              ))}
            </div>
          );
        })}
      </div>
    );
  },
};
