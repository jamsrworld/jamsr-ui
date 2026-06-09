"use client";
import { ContextMenu } from "ui/context-menu";
import { useState } from "react";

export const ContextMenuRadioItemsExample = (props: ContextMenu.Props) => {
  const [sortBy, setSortBy] = useState("date");
  return (
    <ContextMenu {...props}>
      <ContextMenu.Trigger>
        <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
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
          <ContextMenu.RadioItem value="rating">
            <ContextMenu.RadioItemIndicator />
            Rating
          </ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
