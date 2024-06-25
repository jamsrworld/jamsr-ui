import { type Meta, type StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "../src/badge";
import { BadgeVariants } from "../src/style";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: { children: "Badge" },
};

const ColorsTemplate = () => {
  const colors: BadgeVariants["color"][] = [
    "default",
    "error",
    "primary",
    "secondary",
    "success",
    "warning",
  ];
  return (
    <div className="flex gap-4">
      {colors.map((color) => (
        <Badge
          color={color}
          key={color}
        >
          {color}
        </Badge>
      ))}
    </div>
  );
};

export const Colors: Story = {
  render: ColorsTemplate,
};
