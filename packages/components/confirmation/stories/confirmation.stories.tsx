import { Button } from "@jamsr-ui/button";
import { type Meta, type StoryObj } from "@storybook/react";
import { Confirmation } from "../src";
import { useConfirmation } from "../src/use-confirmation";

const meta: Meta<typeof Confirmation> = {
  title: "Components/Confirmation",
  component: Confirmation,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const { confirm } = useConfirmation();
  const handleClick = () =>
    confirm({
      message: "Are you sure want to delete?",
      title: "Warning!",
      onConfirm() {},
      onCancel() {},
    });
  return (
    <div>
      <Button onClick={handleClick}>Delete</Button>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Confirmation />
        <Template />
      </div>
    );
  },
};
