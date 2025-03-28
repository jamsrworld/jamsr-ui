import { IconButton } from "@jamsr-ui/icon-button";
import { InfoIcon } from "@jamsr-ui/shared-icons";
import { Text } from "@jamsr-ui/typography";
import { type Meta, type StoryObj } from "@storybook/react";
import { Popover, type PopoverProps } from "../src/popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};
export default meta;
type Story = StoryObj<PopoverProps>;

const Template = (props: Partial<PopoverProps>) => {
  return (
    <div className="grid min-h-[120px] place-content-center">
      <Popover
        trigger={
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        }
        className="p-2"
        {...props}
      >
        <Text as="p">This is a Popover content</Text>
      </Popover>
    </div>
  );
};

export const Default: Story = {
  render: () => <Template />,
};

export const WithArrow: Story = {
  render: () => <Template showArrow />,
};

export const AsModal: Story = {
  render: () => <Template isModal />,
};
