import { Button } from "@jamsr-ui/button";
import { useDisclosure } from "@jamsr-ui/hooks";
import { type Meta, type StoryObj } from "@storybook/react";
import { Drawer } from "../src";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const { isOpen, onClose, onOpen, setIsOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Click Me!</Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        HIi i am drawer
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: Template,
};
