"use client";

import { ChevronUpIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

export const MenuBackdrop = (props: Menu.Props) => {
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
  );
};
