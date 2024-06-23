import { type Meta, type StoryObj } from "@storybook/react";
import { Drawer } from "../src";
import { Button } from "@jamsr-ui/button";
import { useDisclosure } from "@jamsr-ui/hooks";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Click Me!</Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onClose}
      >
        HIi i am drawer
      </Drawer>
    </div>
  );
};

export const Default = {
  render: Template,
};
