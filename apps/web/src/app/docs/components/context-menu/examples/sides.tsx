"use client";

import { ContextMenu } from "ui/context-menu";

export const ContextMenuSides = (props: ContextMenu.Props) => {
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
        <ContextMenu
          key={side}
          {...props}
        >
          <ContextMenu.Trigger>
            <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
              Right Click Here
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content
            slotProps={{
              positioner: {
                side,
              },
            }}
          >
            <ContextMenu.Item>Add to Library</ContextMenu.Item>
            <ContextMenu.Item>Add to Playlist</ContextMenu.Item>
            <ContextMenu.Item>Play Next</ContextMenu.Item>
            <ContextMenu.Item>Play Last</ContextMenu.Item>
            <ContextMenu.Item>Share</ContextMenu.Item>
            <ContextMenu.Item>Favorite</ContextMenu.Item>
            <ContextMenu.Item
              disabled
              color="danger"
            >
              Delete
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
      ))}
    </div>
  );
};
