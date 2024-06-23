import { Button } from "@jamsr-ui/button";
import { Info } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Tooltip, type TooltipProps } from "../src";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,

  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: TooltipProps) => {
  return (
    <div className="grid min-h-[400px] place-items-center">
      <Tooltip
        {...props}
        title="I am tooltip"
      >
        <Button isIconOnly>
          <Info />
        </Button>
      </Tooltip>
    </div>
  );
};
export const Default = {
  render: Template,
  args: {},
};
