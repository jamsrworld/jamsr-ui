"use client";
import { ContextMenu } from "jamsrui/context-menu";
import { useState } from "react";

export const ContextMenuGroupExample = (props: ContextMenu.Props) => {
  const [showMinimap, setShowMinimap] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  return (
    <ContextMenu {...props}>
      <ContextMenu.Trigger>
        <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Group>
          <ContextMenu.GroupLabel>Sort</ContextMenu.GroupLabel>
          <ContextMenu.RadioGroup
            value={sortBy}
            onValueChange={setSortBy}
          >
            <ContextMenu.RadioItem value="date">
              <ContextMenu.RadioItemIndicator />
              Date
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="name">
              <ContextMenu.RadioItemIndicator />
              Name
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="type">
              <ContextMenu.RadioItemIndicator />
              Type
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Group>
        <ContextMenu.Separator />
        <ContextMenu.Group>
          <ContextMenu.GroupLabel>Workspace</ContextMenu.GroupLabel>
          <ContextMenu.CheckboxItem
            checked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            <ContextMenu.CheckboxItemIndicator />
            Minimap
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            checked={showSearch}
            onCheckedChange={setShowSearch}
          >
            <ContextMenu.CheckboxItemIndicator />
            Search
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            <ContextMenu.CheckboxItemIndicator />
            Sidebar
          </ContextMenu.CheckboxItem>
        </ContextMenu.Group>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
