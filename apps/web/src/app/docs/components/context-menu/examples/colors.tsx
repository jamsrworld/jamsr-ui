import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuColors = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item color="default">Add to Library</ContextMenu.Item>
        <ContextMenu.Item color="primary">Add to Playlist</ContextMenu.Item>
        <ContextMenu.Item color="secondary">Play Next</ContextMenu.Item>
        <ContextMenu.Item color="success">Play Last</ContextMenu.Item>
        <ContextMenu.Item color="warning">Share</ContextMenu.Item>
        <ContextMenu.Item color="danger">Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
