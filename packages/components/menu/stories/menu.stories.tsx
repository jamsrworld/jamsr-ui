import { Button } from "@jamsr-ui/button";
import { ChevronUp } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Menu, MenuItem } from "../src";

const meta = {
  title: "Components/Menu",
  component: Menu,

  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  return (
    <Menu label={<Button endContent={<ChevronUp />}>Open Me</Button>}>
      <MenuItem label="Undo" />
      <MenuItem
        label="Redo"
        disabled
      />
      <MenuItem label="Cut" />
      <Menu label="Copy as">
        <MenuItem label="Text" />
        <MenuItem label="Video" />
        <MenuItem label="Audio" />
      </Menu>
      <Menu label="Share">
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>
    </Menu>
  );
};

export const Primary = {
  render: Template,
};
