import { Button } from "@jamsr-ui/button";
import { type Meta, type StoryObj } from "@storybook/react";
import { ToastProvider, toast } from "../src";

const meta: Meta<typeof ToastProvider> = {
  title: "Components/Toast",
  component: ToastProvider,
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
        <ToastProvider />
        <Template />
      </div>
    );
  },
};
