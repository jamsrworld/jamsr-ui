"use client";

import { Menu } from "jamsrui/menu";
import { Menubar } from "jamsrui/menubar";
import { ChevronRight } from "lucide-react";

export const MenubarUsage = (props: Menubar.Props) => {
  return (
    <Menubar {...props}>
      <Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menu.Content>
          <Menu.Item>New</Menu.Item>
          <Menu.Item>Open</Menu.Item>
          <Menu.Item>Save</Menu.Item>
          <Menu.SubmenuRoot>
            <Menu.SubmenuTrigger>
              Export
              <Menu.SubmenuIndicator>
                <ChevronRight className="size-4" />
              </Menu.SubmenuIndicator>
            </Menu.SubmenuTrigger>
            <Menu.SubmenuContent>
              <Menu.Item>PDF</Menu.Item>
              <Menu.Item>PNG</Menu.Item>
              <Menu.Item>SVG</Menu.Item>
            </Menu.SubmenuContent>
          </Menu.SubmenuRoot>
          <Menu.Separator />
          <Menu.Item>Print</Menu.Item>
        </Menu.Content>
      </Menu>
      <Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menu.Content>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menu.Content>
      </Menu>
      <Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menu.Content>
          <Menu.Item>Zoom In</Menu.Item>
          <Menu.Item>Zoom Out</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Full Screen</Menu.Item>
        </Menu.Content>
      </Menu>
      <Menu>
        <Menubar.Trigger disabled>Help</Menubar.Trigger>
      </Menu>
    </Menubar>
  );
};
