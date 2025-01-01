"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
} from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

const data = [
  {
    title: "Platform",
    items: [
      {
        title: "Playground",
        icon: <EmailIcon />,
        isActive: true,
      },
      {
        title: "Models",
        icon: <EmailIcon />,
      },
      {
        title: "Documentation",
        icon: <EmailIcon />,
      },
      {
        title: "Settings",
        icon: <EmailIcon />,
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Design Engineering",
        url: "#",
        icon: <EmailIcon />,
      },
      {
        title: "Sales & Marketing",
        url: "#",
        icon: <EmailIcon />,
      },
      {
        title: "Travel",
        url: "#",
        icon: <EmailIcon />,
      },
    ],
  },
];

export const SidebarUsage = () => {
  return (
    <Sidebar className="max-w-[250px]">
      <SidebarContent>
        {data.map((item) => {
          const { items, title } = item;
          return (
            <SidebarGroup key={title}>
              <SidebarGroupLabel>{title}</SidebarGroupLabel>
              <SidebarMenu>
                {items.map((item) => {
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="group/collapsible"
                    >
                      <SidebarMenuItemButton>
                        {item.icon && item.icon}
                        {item.title}
                      </SidebarMenuItemButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};
