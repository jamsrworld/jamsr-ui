"use client";

import {
  Avatar,
  Menu,
  MenuItem,
  Select,
  SelectItem,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  Text,
} from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

const data = {
  user: {
    name: "Jamsr World",
    email: "jamsrworld@gmail.com",
    avatar: "/avatar.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: null,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: null,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: null,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Platform",
      items: [
        {
          title: "Playground",
          icon: <EmailIcon />,
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
  ],
};

export const SidebarHeaderFooter = () => {
  const { navMain, user, teams } = data;
  return (
    <Sidebar className="max-w-[250px]">
      <SidebarHeader>
        <Select
          defaultValue={["Acme Inc"]}
          renderValue={(value) => {
            const selectedValue = value[0];
            if (!selectedValue) return null;
            const selectedItem = teams.find(
              (item) => item.name === selectedValue,
            );
            if (!selectedItem) return null;
            const { logo, name, plan } = selectedItem;
            return (
              <div className="flex items-center gap-2">
                <Avatar src={logo} width={100} height={100} alt={name} />
                <div className="flex flex-col text-left">
                  <Text as="p" className="text-sm">
                    {name}
                  </Text>
                  <Text as="p" className="text-xs text-foreground-secondary">
                    {plan}
                  </Text>
                </div>
              </div>
            );
          }}
          classNames={{
            trigger: "border-none hover:bg-content2 h-auto",
          }}
        >
          {teams.map((item) => {
            const { logo, name, plan } = item;
            return (
              <SelectItem key={name} value={name}>
                <Avatar
                  size="sm"
                  src={logo}
                  width={100}
                  height={100}
                  alt={name}
                />
                <div className="flex flex-col text-left">
                  <Text as="p" className="text-sm">
                    {name}
                  </Text>
                  <Text as="p" className="text-xs text-foreground-secondary">
                    {plan}
                  </Text>
                </div>
              </SelectItem>
            );
          })}
        </Select>
      </SidebarHeader>
      <SidebarContent>
        {navMain.map((item) => {
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
      <SidebarFooter>
        <Menu
          trigger={
            <div className="flex items-center gap-2">
              <Avatar
                src={user.avatar}
                alt={user.name}
                width={100}
                height={100}
              />
              <div>
                <Text as="p" className="text-sm">
                  {user.name}
                </Text>
                <Text as="p" className="text-xs text-foreground-secondary">
                  {user.email}
                </Text>
              </div>
            </div>
          }
          placement="right-end"
        >
          <MenuItem>Settings</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </SidebarFooter>
    </Sidebar>
  );
};
