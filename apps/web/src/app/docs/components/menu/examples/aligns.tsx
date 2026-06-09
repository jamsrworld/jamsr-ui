"use client";

import { Button } from "ui/button";
import { Menu } from "ui/menu";

export const MenuAligns = (props: Menu.Props) => {
  const aligns = ["start", "center", "end"] as const;
  return (
    <div className="flex flex-wrap gap-4">
      {aligns.map((align) => (
        <Menu
          key={align}
          {...props}
        >
          <Menu.Trigger render={<Button>{align}</Button>} />
          <Menu.Content
            slotProps={{
              positioner: {
                align,
              },
            }}
          >
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
      ))}
    </div>
  );
};
