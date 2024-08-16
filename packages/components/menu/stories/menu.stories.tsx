import { Button } from "@jamsr-ui/button";
import { ChevronUp, Info, SearchIcon } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { Menu, MenuItem } from "../src";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const handleClick = () => {
    alert("clicked undo");
  };

  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUp />}>Open Me</Button>}
      >
        <MenuItem onClick={handleClick}>Undo</MenuItem>
        <MenuItem startContent={<Info className="size-5" />}>Info</MenuItem>
        <MenuItem
          startContent={
            <SearchIcon className="size-5 text-foreground-secondary" />
          }
          endContent={
            <div className="rounded bg-background p-0.5 text-xs text-foreground-secondary">
              Ctrl+K
            </div>
          }
        >
          Search
        </MenuItem>
        <MenuItem disabled>Redo</MenuItem>
        <MenuItem>Cut</MenuItem>
        <Menu trigger="Copy as">
          <MenuItem>Text</MenuItem>
          <MenuItem>Video</MenuItem>
          <MenuItem>Audio</MenuItem>
        </Menu>
        <Menu trigger="Share">
          <MenuItem>Mail</MenuItem>
          <MenuItem>Instagram</MenuItem>
        </Menu>
      </Menu>
    </div>
  );
};

export const Primary: Story = {
  render: Template,
};
