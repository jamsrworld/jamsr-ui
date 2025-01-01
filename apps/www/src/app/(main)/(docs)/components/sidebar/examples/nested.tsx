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
  Text,
} from "@jamsr-ui/react";
import { ChevronRightIcon, EmailIcon } from "@jamsr-ui/shared-icons";

type NavItem = {
  title: string;
  icon?: React.ReactNode;
  url?: string;
  items?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Platform",
    items: [
      {
        title: "Playground",
        icon: <EmailIcon />,
        items: [
          {
            title: "History",
            url: "#",
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
};

const SidebarNestedMenuItem = (props: NavItem & { isNested?: boolean }) => {
  const { icon, title, items = [], isNested } = props;
  const hasChild = items.length > 0;
  return (
    <Collapsible isDisabled={!hasChild}>
      <SidebarMenuItem className="group/collapsible relative">
        {isNested && (
          <div className="absolute -left-1 top-0 h-full w-px bg-content2" />
        )}
        <CollapsibleTrigger as={SidebarMenuItemButton}>
          {icon}
          {title}
          {hasChild && (
            <ChevronRightIcon className="ml-auto size-4 transition-transform duration-200 group-data-[expanded=true]/collapsible:rotate-90" />
          )}
        </CollapsibleTrigger>
        {hasChild && (
          <CollapsibleContent>
            <SidebarMenu className="pl-2 pt-1">
              {items.map((item, index) => (
                <SidebarNestedMenuItem isNested key={index} {...item} />
              ))}
            </SidebarMenu>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
};

export const SidebarNested = () => {
  const { user, teams } = data;
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
        {navItems.map((item) => {
          const { items = [], title } = item;
          return (
            <SidebarGroup key={title}>
              <SidebarGroupLabel>{title}</SidebarGroupLabel>
              <SidebarMenu>
                {items.map((item) => {
                  return <SidebarNestedMenuItem key={item.title} {...item} />;
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
