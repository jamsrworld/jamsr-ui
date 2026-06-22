"use client";

import { useDisclosure } from "ui/hooks";
import { ChevronUpIcon } from "@/icons";
import { Button } from "ui/button";
import { Menu } from "ui/menu";

export const MenuControlled = (props: Menu.Props) => {
  const { isOpen, onToggle, setIsOpen } = useDisclosure();
  return (
    <div className="flex items-center justify-center gap-4">
      <Menu
        open={isOpen}
        onOpenChange={setIsOpen}
        {...props}
      >
        <Menu.Trigger
          render={
            <Button>
              <ChevronUpIcon />
              Open Me
            </Button>
          }
        />
        <Menu.Content>
          <Menu.Item>Add to Library</Menu.Item>
          <Menu.Item>Add to Playlist</Menu.Item>
          <Menu.Item>Play Next</Menu.Item>
          <Menu.Item>Play Last</Menu.Item>
          <Menu.Item>Share</Menu.Item>
          <Menu.Item>Favorite</Menu.Item>
          <Menu.Item
            disabled
            color="danger"
          >
            Delete
          </Menu.Item>
        </Menu.Content>
      </Menu>
      <Button onClick={onToggle}> {isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
