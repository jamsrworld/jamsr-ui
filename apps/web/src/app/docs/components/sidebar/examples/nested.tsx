"use client";

import { ChevronRightIcon, EmailIcon } from "@jamsrui/icons";
import { Collapsible } from "jamsrui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarStateProvider,
} from "jamsrui/sidebar";
import Link from "next/link";

type NavItem = {
  title: string;
  icon?: React.ReactNode;
  url?: string;
  items?: NavItem[];
  isActive?: boolean;
  isDisabled?: boolean;
};

const navItems: NavItem[] = [
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
            items: [
              {
                title: "History",
                url: "#",
              },
              {
                title: "Starred",
                url: "#",
              },
            ],
            isActive: true,
          },
          {
            title: "Starred",
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
            ],
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
        ],
        isDisabled: true,
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
        isDisabled: true,
      },
    ],
  },
];

const SidebarNestedMenuItem = (props: NavItem & { isNested?: boolean }) => {
  const { icon, title, items = [], isNested, isActive, isDisabled } = props;
  const hasChild = items.length > 0;
  return (
    <Collapsible
      defaultOpen={isActive}
      disabled={isDisabled}
    >
      <SidebarMenuItem className="relative">
        {isNested && (
          <div className="absolute -left-1 top-0 h-full w-px bg-content2" />
        )}
        <SidebarMenuItemButton
          {...(!isDisabled && {
            render: hasChild ? (
              <Collapsible.Trigger children={null} />
            ) : (
              <Link href="/" />
            ),
          })}
          disabled={isDisabled}
          className="[&[data-expanded=true]>svg.arrow]:rotate-90"
        >
          {icon}
          {title}
          {hasChild && (
            <ChevronRightIcon className="arrow ml-auto size-4 transition-transform duration-200" />
          )}
        </SidebarMenuItemButton>
        {hasChild && (
          <Collapsible.Content>
            <SidebarMenu className="pl-2 pt-1">
              {items.map((item, index) => (
                <SidebarNestedMenuItem
                  isNested
                  key={index}
                  {...item}
                />
              ))}
            </SidebarMenu>
          </Collapsible.Content>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
};

export const SidebarNested = () => {
  return;
  return (
    <SidebarStateProvider>
      <Sidebar className="max-w-[250px]">
        <SidebarHeader>Avatar</SidebarHeader>
        <SidebarContent>
          {navItems.map((item) => {
            const { items = [], title } = item;
            return (
              <SidebarGroup key={title}>
                <SidebarGroupLabel>{title}</SidebarGroupLabel>
                <SidebarMenu>
                  {items.map((item) => {
                    return (
                      <SidebarNestedMenuItem
                        key={item.title}
                        {...item}
                      />
                    );
                  })}
                </SidebarMenu>
              </SidebarGroup>
            );
          })}
        </SidebarContent>
        <SidebarFooter>Logout</SidebarFooter>
      </Sidebar>
    </SidebarStateProvider>
  );
};
