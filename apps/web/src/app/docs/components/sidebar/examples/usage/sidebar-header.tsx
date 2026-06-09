"use client";

import { Icon } from "@iconify/react";
import { Avatar } from "jamsrui/avatar";
import { IconButton } from "jamsrui/icon-button";
import { Menu } from "jamsrui/menu";
import { Text } from "jamsrui/text";

const WorkspaceSwitcher = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <div className="flex gap-1 items-center hover:bg-surface-secondary p-0.5 rounded-sm">
          <Avatar size="sm">
            {/* <Avatar.Image alt="Jamsrworld" src="" /> */}
            <Avatar.Fallback>JW</Avatar.Fallback>
          </Avatar>
          <Text className="text-sm">Jamsrworld</Text>
          <Icon icon="tabler:chevron-down" />
        </div>
      </Menu.Trigger>
      <Menu.Content
        slotProps={{ positioner: { side: "bottom", align: "start" } }}
      >
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Invite and manage members</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Download desktop app</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Switch workspace</Menu.Item>
        <Menu.Item>Log out</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};

export const SidebarHeader = () => {
  return (
    <div className="flex gap-1 items-center">
      <WorkspaceSwitcher />
      <div className="ml-auto flex gap-1 items-center">
        <IconButton
          label="Search"
          variant="light"
          size="sm"
        >
          <Icon
            icon="hugeicons:search-01"
            className="text-foreground-secondary"
          />
        </IconButton>
        <IconButton
          label="Draft"
          size="sm"
        >
          <Icon icon="mynaui:edit-one-solid" />
        </IconButton>
      </div>
    </div>
  );
};
