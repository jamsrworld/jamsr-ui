import { Button } from "@jamsr-ui/button";
import { type Meta, type StoryObj } from "@storybook/react";
import { Toast, toast } from "../src";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const handleClick = () => {
    toast("I am a toast");
  };
  return (
    <div>
      <Button onClick={handleClick}>Toast</Button>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Toast />
        <Template />
      </div>
    );
  },
};
