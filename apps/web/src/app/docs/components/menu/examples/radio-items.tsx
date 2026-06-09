"use client";

import { Button } from "ui/button";
import { Menu } from "ui/menu";
import { useState } from "react";

export const MenuRadioItemsExample = (props: Menu.Props) => {
  const [sortBy, setSortBy] = useState("date");
  return (
    <Menu {...props}>
      <Menu.Trigger render={<Button>Sort</Button>} />
      <Menu.Content>
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
          <Menu.RadioItem value="rating">
            <Menu.RadioItemIndicator />
            Rating
          </Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu>
  );
};
