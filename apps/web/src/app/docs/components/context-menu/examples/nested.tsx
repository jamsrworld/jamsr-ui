import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuNested = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Add to Library</ContextMenu.Item>
        <ContextMenu.Item>Add to Playlist</ContextMenu.Item>
        <ContextMenu.Item>Play Next</ContextMenu.Item>
        <ContextMenu.SubmenuRoot>
          <ContextMenu.SubmenuTrigger>
            Share <ContextMenu.SubmenuIndicator />
          </ContextMenu.SubmenuTrigger>
          <ContextMenu.SubmenuContent>
            <ContextMenu.Item>Facebook</ContextMenu.Item>
            <ContextMenu.Item>Twitter</ContextMenu.Item>
            <ContextMenu.Item>Instagram</ContextMenu.Item>
            <ContextMenu.SubmenuRoot>
              <ContextMenu.SubmenuTrigger>
                More <ContextMenu.SubmenuIndicator />
              </ContextMenu.SubmenuTrigger>
              <ContextMenu.SubmenuContent>
                <ContextMenu.Item>Email</ContextMenu.Item>
                <ContextMenu.Item>Copy Link</ContextMenu.Item>
              </ContextMenu.SubmenuContent>
            </ContextMenu.SubmenuRoot>
          </ContextMenu.SubmenuContent>
        </ContextMenu.SubmenuRoot>
        <ContextMenu.Item
          disabled
          color="danger"
        >
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
