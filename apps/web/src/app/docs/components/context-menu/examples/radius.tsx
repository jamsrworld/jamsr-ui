import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuRadius = () => {
  const radii: ContextMenu.Props["radius"][] = ["none", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {radii.map((radius) => (
        <ContextMenu
          key={radius}
          radius={radius}
        >
          <ContextMenu.Trigger>
            <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
              Right Click Here
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content>
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
