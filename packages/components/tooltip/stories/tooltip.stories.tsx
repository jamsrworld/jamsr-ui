import { Button } from "@jamsr-ui/button";
import { Info } from "@jamsr-ui/shared-icons";
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
      <Tooltip
        title="I am tooltip"
        {...props}
      >
        <Button
          aria-label="Click Me!"
          isIconOnly
        >
          <Info />
        </Button>
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

export const Interactive: Story = {
  render: () => (
    <Template
      isInteractive
      title="I'm interactive tooltip you can click or select me"
    />
  ),
};

export const Offset: Story = {
  render: () => (
    <Template
      offset={20}
      title="This tooltip has offset 20"
    />
  ),
};
