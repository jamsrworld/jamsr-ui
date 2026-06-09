"use client";

import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

export const MenuNested = (props: Menu.Props) => {
  return (
    <Menu {...props}>
      <Menu.Trigger render={<Button>Open Me</Button>} />
      <Menu.Content>
        <Menu.Item>Add to Library</Menu.Item>
        <Menu.Item>Add to Playlist</Menu.Item>
        <Menu.Item>Play Next</Menu.Item>
        <Menu.SubmenuRoot>
          <Menu.SubmenuTrigger>
            Share <Menu.SubmenuIndicator />
          </Menu.SubmenuTrigger>
          <Menu.SubmenuContent>
            <Menu.Item>Facebook</Menu.Item>
            <Menu.Item>Twitter</Menu.Item>
            <Menu.Item>Instagram</Menu.Item>
            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger>
                More <Menu.SubmenuIndicator />
              </Menu.SubmenuTrigger>
              <Menu.SubmenuContent>
                <Menu.Item>Email</Menu.Item>
                <Menu.Item>Copy Link</Menu.Item>
              </Menu.SubmenuContent>
            </Menu.SubmenuRoot>
          </Menu.SubmenuContent>
        </Menu.SubmenuRoot>
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
