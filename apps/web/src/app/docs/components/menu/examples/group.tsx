"use client";

import { Button } from "ui/button";
import { Menu } from "ui/menu";
import { useState } from "react";

export const MenuGroupExample = (props: Menu.Props) => {
  const [showMinimap, setShowMinimap] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  return (
    <Menu {...props}>
      <Menu.Trigger render={<Button>View</Button>} />
      <Menu.Content>
        <Menu.Group>
          <Menu.GroupLabel>Sort</Menu.GroupLabel>
          <Menu.RadioGroup
            value={sortBy}
            onValueChange={setSortBy}
          >
            <Menu.RadioItem value="date">
              <Menu.RadioItemIndicator />
              Date
            </Menu.RadioItem>
            <Menu.RadioItem value="name">
              <Menu.RadioItemIndicator />
              Name
            </Menu.RadioItem>
            <Menu.RadioItem value="type">
              <Menu.RadioItemIndicator />
              Type
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Group>
          <Menu.GroupLabel>Workspace</Menu.GroupLabel>
          <Menu.CheckboxItem
            checked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            <Menu.CheckboxItemIndicator />
            Minimap
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            checked={showSearch}
            onCheckedChange={setShowSearch}
          >
            <Menu.CheckboxItemIndicator />
            Search
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            <Menu.CheckboxItemIndicator />
            Sidebar
          </Menu.CheckboxItem>
        </Menu.Group>
      </Menu.Content>
    </Menu>
  );
};
