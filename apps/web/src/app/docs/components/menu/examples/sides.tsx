"use client";

import { Button } from "ui/button";
import { Menu } from "ui/menu";

export const MenuSides = (props: Menu.Props) => {
  const sides = [
    "top",
    "right",
    "bottom",
    "left",
    "inline-end",
    "inline-start",
  ] as const;
  return (
    <div className="flex flex-wrap gap-4">
      {sides.map((side) => (
        <Menu
          key={side}
          {...props}
        >
          <Menu.Trigger render={<Button>{side}</Button>} />
          <Menu.Content
            slotProps={{
              positioner: {
                side,
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
