"use client";

import {
  Avatar,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
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
  Typography,
} from "@jamsr-ui/react";
import { ChevronRightIcon, EmailIcon } from "@jamsr-ui/shared-icons";

const data = {
  user: {
    name: "James Richard",
    email: "jamsrui@jamsrworld.com",
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
          isActive: true,
          items: [
            {
              title: "History",
              url: "#",
            },
            {
              title: "Starred",
              url: "#",
            },
            {
              title: "Settings",
              url: "#",
            },
          ],
        },
        {
          title: "Models",
          icon: <EmailIcon />,
          items: [
            {
              title: "Genesis",
              url: "#",
            },
            {
              title: "Explorer",
              url: "#",
            },
            {
              title: "Quantum",
              url: "#",
            },
          ],
        },
        {
          title: "Documentation",
          icon: <EmailIcon />,
          items: [
            {
              title: "Introduction",
              url: "#",
            },
            {
              title: "Get Started",
              url: "#",
            },
            {
              title: "Tutorials",
              url: "#",
            },
            {
              title: "Changelog",
              url: "#",
            },
          ],
        },
        {
          title: "Settings",
          icon: <EmailIcon />,
          items: [
            {
              title: "General",
              url: "#",
            },
            {
              title: "Team",
              url: "#",
            },
            {
              title: "Billing",
              url: "#",
            },
            {
              title: "Limits",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          title: "Design Engineering",
          url: "#",
          icon: null,
        },
        {
          title: "Sales & Marketing",
          url: "#",
          icon: null,
        },
        {
          title: "Travel",
          url: "#",
          icon: null,
        },
      ],
    },
  ],
};

export const SidebarUsage = () => {
  const { navMain, user, teams } = data;
  return (
    <Sidebar className="max-w-[250px] bg-content1">
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
                  <Typography as="p" className="text-sm">
                    {name}
                  </Typography>
                  <Typography
                    as="p"
                    className="text-xs text-foreground-secondary"
                  >
                    {plan}
                  </Typography>
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
                  <Typography as="p" className="text-sm">
                    {name}
                  </Typography>
                  <Typography
                    as="p"
                    className="text-xs text-foreground-secondary"
                  >
                    {plan}
                  </Typography>
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
                  const hasChild = "items" in item;
                  return (
                    <Collapsible isDisabled={!hasChild} key={item.title}>
                      <SidebarMenuItem className="group/collapsible">
                        <CollapsibleTrigger as={SidebarMenuItemButton}>
                          {item.icon && item.icon}
                          {item.title}
                          {hasChild && (
                            <ChevronRightIcon className="ml-auto size-4 transition-transform duration-200 group-data-[expanded=true]/collapsible:rotate-90" />
                          )}
                        </CollapsibleTrigger>
                        {hasChild && (
                          <CollapsibleContent>
                            <SidebarMenu className="pl-2 pt-1">
                              {"items" in item &&
                                item.items.map((item) => {
                                  return (
                                    <SidebarMenuItem
                                      className="relative"
                                      key={item.title}
                                    >
                                      <div className="absolute -left-1 top-0 h-full w-px bg-content2" />
                                      <SidebarMenuItemButton>
                                        {item.title}
                                      </SidebarMenuItemButton>
                                    </SidebarMenuItem>
                                  );
                                })}
                            </SidebarMenu>
                          </CollapsibleContent>
                        )}
                      </SidebarMenuItem>
                    </Collapsible>
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
                <Typography as="p" className="text-sm">
                  {user.name}
                </Typography>
                <Typography
                  as="p"
                  className="text-xs text-foreground-secondary"
                >
                  {user.email}
                </Typography>
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
