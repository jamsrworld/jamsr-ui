"use client";

import {
  Avatar,
  Divider,
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
  Switch,
  Text,
} from "@jamsr-ui/react";
import { ChevronRightIcon } from "@jamsr-ui/shared-icons";
import {
  ActivityIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  DashboardIcon,
  ExchangeIcon,
  InvoiceIcon,
  LogoutIcon,
  MoonIcon,
  PlusIcon,
  SettingsIcon,
  SupportIcon,
  TransferIcon,
} from "../icons";

type NavItem = {
  title: string;
  icon?: React.ReactNode;
  url?: string;
  items?: NavItem[];
  isDisabled?: boolean;
};

const navItems: NavItem[] = [
  {
    title: "MAIN",
    items: [
      {
        title: "Dashboard",
        url: "#",
        icon: <DashboardIcon />,
      },
      {
        title: "My Cards",
        url: "#",
        icon: <CreditCardIcon />,
      },
      {
        title: "Transfer",
        url: "#",
        icon: <TransferIcon />,
      },
      {
        title: "Transactions",
        url: "#",
        icon: <ClockIcon />,
      },
      {
        title: "Payments",
        url: "#",
        icon: <InvoiceIcon />,
        isDisabled: true,
      },
      {
        title: "Exchange",
        url: "#",
        icon: <ExchangeIcon />,
        isDisabled: true,
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        title: "Settings",
        url: "#",
        icon: <SettingsIcon />,
      },
      {
        title: "Support",
        url: "#",
        icon: <SupportIcon />,
        isDisabled: true,
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
      name: "Jamsr World",
      logo: "/synergy.png",
      role: "Parent Company",
    },
    {
      name: "JamsrUI",
      logo: "/apex.png",

      role: "Subsidiary",
    },
    {
      name: "JamsrPay",
      logo: "/catalyst.png",

      role: "Payment Gateway",
    },
  ],
};

export const SidebarCustomized = () => {
  const { user, teams } = data;
  return (
    <Sidebar
      className="max-w-[280px]"
      classNames={{
        menu: "flex flex-col gap-1 ",
        menuItemButton:
          "py-2 [&>svg]:text-foreground-secondary [&>svg>path]:stroke-[2px] flex gap-2",
        content: "gap-8 scrollbar-hide",
        group: "gap-2",
        groupLabel: "font-medium",
      }}
    >
      <SidebarHeader>
        <Select
          defaultValue={["Jamsr World"]}
          renderValue={(value) => {
            const selectedValue = value[0];
            if (!selectedValue) return null;
            const selectedItem = teams.find(
              (item) => item.name === selectedValue,
            );
            if (!selectedItem) return null;
            const { logo, name, role } = selectedItem;
            return (
              <div className="flex items-center gap-2" key={logo}>
                <Avatar src={logo} width={100} height={100} alt={name} />
                <div className="flex flex-col text-left">
                  <Text as="p" className="text-sm">
                    {name}
                  </Text>
                  <Text as="p" className="text-xs text-foreground-secondary">
                    {role}
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
            const { logo, name, role } = item;
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
                    {role}
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
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="group/collapsible"
                    >
                      <SidebarMenuItemButton isDisabled={item.isDisabled}>
                        {item.icon && item.icon}
                        <span>{item.title}</span>
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
            <div className="flex w-full items-center gap-2 rounded-md px-2 py-1 hover:bg-content2">
              <Avatar
                src={user.avatar}
                alt={user.name}
                width={100}
                height={100}
              />
              <div>
                <div className="flex items-center gap-1">
                  <Text as="p" className="text-sm">
                    {user.name}
                  </Text>
                  <CheckIcon className="size-4 text-cyan-500" />
                </div>
                <Text as="p" className="text-xs text-foreground-secondary">
                  {user.email}
                </Text>
              </div>
              <ChevronRightIcon className="ml-auto size-4" />
            </div>
          }
          placement="right-end"
          className="min-w-[250px]"
          classNames={{
            menuItem: "[&>svg]:text-foreground-secondary",
            base: "w-full",
          }}
        >
          <MenuItem
            startContent={<MoonIcon />}
            preventCloseOnClick
            className="flex items-center"
            endContent={<Switch size="sm" />}
          >
            Dark Mode
          </MenuItem>
          <Divider className="py-1" />
          <MenuItem startContent={<ActivityIcon />}>Activity</MenuItem>
          <MenuItem startContent={<DashboardIcon />}>Integrations</MenuItem>
          <MenuItem startContent={<SettingsIcon />}>Settings</MenuItem>
          <Divider className="py-1" />
          <MenuItem startContent={<PlusIcon />}>Add Account</MenuItem>
          <MenuItem startContent={<LogoutIcon />}>Logout</MenuItem>
          <Text
            as="p"
            className="mt-2 px-2 text-foreground-secondary"
            variant="lead"
          >
            v0.1.0. Terms & Conditions
          </Text>
        </Menu>
      </SidebarFooter>
    </Sidebar>
  );
};
