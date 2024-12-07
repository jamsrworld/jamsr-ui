import { IconButton } from "@jamsr-ui/icon-button";
import { InfoIcon } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { Tooltip, type TooltipProps } from "../src";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: Partial<TooltipProps>) => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Tooltip title="I am tooltip" {...props}>
        <IconButton aria-label="Click Me!">
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export const Default: Story = {
  render: () => <Template />,
};

export const WithArrow: Story = {
  render: () => <Template showArrow />,
};

export const Offset: Story = {
  render: () => <Template offset={20} title="This tooltip has offset 20" />,
};
