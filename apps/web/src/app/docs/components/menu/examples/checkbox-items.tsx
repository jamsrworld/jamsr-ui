"use client";

import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

export const MenuCheckboxItemsExample = (props: Menu.Props) => {
  return (
    <Menu {...props}>
      <Menu.Trigger render={<Button>Sort</Button>} />
      <Menu.Content>
        <Menu.CheckboxItem>
          <Menu.CheckboxItemIndicator />
          Date
        </Menu.CheckboxItem>
        <Menu.CheckboxItem>
          <Menu.CheckboxItemIndicator />
          Name
        </Menu.CheckboxItem>
        <Menu.CheckboxItem>
          <Menu.CheckboxItemIndicator />
          Type
        </Menu.CheckboxItem>
      </Menu.Content>
    </Menu>
  );
};
