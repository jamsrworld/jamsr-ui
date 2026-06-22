"use client";

import { ChevronUpIcon } from "@/icons";
import { Button } from "ui/button";
import { Menu } from "ui/menu";

export const MenuWithArrow = (props: Menu.Props) => {
  return (
    <Menu
      showArrow
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
        <Menu.Arrow />
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
  );
};
