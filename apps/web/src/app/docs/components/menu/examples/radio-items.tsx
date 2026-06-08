"use client";
import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";
import { useState } from "react";

export const MenuRadioItemsExample = () => {
  const [sortBy, setSortBy] = useState("date");
  return (
    <Menu>
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
