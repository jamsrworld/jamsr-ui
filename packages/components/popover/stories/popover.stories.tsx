import { Button } from "@jamsr-ui/button";
import { Info } from "@jamsr-ui/shared-icons";
import { Typography } from "@jamsr-ui/typography";
import { type Meta, type StoryObj } from "@storybook/react";
import { Popover } from "../src/popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  return (
    <Popover
      trigger={
        <Button isIconOnly>
          <Info />
        </Button>
      }
      className="p-2"
    >
      <Typography>This is a Popover content</Typography>
    </Popover>
  );
};

export const Default: Story = {
  render: Template,
  args: {},
};
