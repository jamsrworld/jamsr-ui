"use client";

import { Icon } from "@iconify/react";
import { Sidebar } from "ui/sidebar";
import { SidebarHeader } from "./sidebar-header";

const data = [
  {
    items: [
      {
        title: "Preferences",
        icon: "pajamas:preferences",
      },
      {
        title: "Profile",
        icon: "lets-icons:user",
      },
      {
        title: "Notifications",
        icon: "mynaui:notification-solid",
      },
      {
        title: "Security & access",
        icon: "mdi:cloud-security",
      },
      {
        title: "Connected accounts",
        icon: "hugeicons:blockchain-02",
      },
    ],
  },
  {
    title: "Issues",
    items: [
      {
        title: "Labels",
        url: "#",
        icon: "pajamas:labels",
      },
      {
        title: "Templates",
        url: "#",
        icon: "akar-icons:paper",
      },
      {
        title: "SLAs",
        url: "#",
        icon: "solar:fire-linear",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Labels",
        url: "#",
        icon: "pajamas:labels",
      },
      {
        title: "Templates",
        url: "#",
        icon: "akar-icons:paper",
      },
      {
        title: "Statuses",
        url: "#",
        icon: "pajamas:status",
      },
      {
        title: "Updates",
        url: "#",
        icon: "hugeicons:analytics-up",
      },
    ],
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <Sidebar.Container>
        <Sidebar.Content>
          <Sidebar.Header>
            <SidebarHeader />
          </Sidebar.Header>
          <Sidebar.Body>
            {data.map((item, idx) => {
              const { items, title } = item;
              return (
                <Sidebar.Group key={idx}>
                  {title && <Sidebar.GroupLabel>{title}</Sidebar.GroupLabel>}
                  <Sidebar.Menu>
                    {items.map((item) => {
                      return (
                        <Sidebar.MenuItem key={item.title}>
                          <Sidebar.MenuItemButton className="text-sm py-1.25 text-sm">
                            {item.icon && (
                              <Icon
                                icon={item.icon}
                                className="text-foreground-secondary"
                              />
                            )}
                            {item.title}
                          </Sidebar.MenuItemButton>
                        </Sidebar.MenuItem>
                      );
                    })}
                  </Sidebar.Menu>
                </Sidebar.Group>
              );
            })}
          </Sidebar.Body>
          <Sidebar.Footer>
            <SidebarHeader />
          </Sidebar.Footer>
        </Sidebar.Content>
      </Sidebar.Container>
    </Sidebar>
  );
};
