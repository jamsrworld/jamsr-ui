import { Button } from "@jamsr-ui/button";
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  type DialogProps,
} from "../src";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: DialogProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  return (
    <div>
      <Button onClick={handleClick}>Open Me</Button>
      <Dialog {...props} isOpen={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>Im am dialog Heading</DialogHeader>
          <DialogBody>I am dialog content!</DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const Default: Story = {
  render: Template,
};
