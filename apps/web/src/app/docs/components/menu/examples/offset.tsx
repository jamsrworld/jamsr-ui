"use client";

import { ChevronUpIcon } from "@/icons";
import { Button } from "ui/button";
import { Menu } from "ui/menu";

export const MenuOffset = (props: Menu.Props) => {
  return (
    <Menu {...props}>
      <Menu.Trigger
        render={
          <Button>
            <ChevronUpIcon />
            Open Me
          </Button>
        }
      />
      <Menu.Content slotProps={{ positioner: { sideOffset: 20 } }}>
        <Menu.Item>Add to Library</Menu.Item>
        <Menu.Item>Add to Playlist</Menu.Item>
        <Menu.Item>Play Next</Menu.Item>
        <Menu.Item>Play Last</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item>Favorite</Menu.Item>
        <Menu.Item disabled>Delete</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
